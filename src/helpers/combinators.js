import React from 'react'
import { curryN, reduce } from 'ramda'
import { of } from './ReactComponent'

export const withChild = Child => Parent => ({child, parent}) =>
  <Parent {...parent}>
    <Child {...child} />
  </Parent>

export const twoChildren = North => South => Wrapper => ({north, south, wrapper}) =>
  <Wrapper {...wrapper}>
    <North {...north} />
    <South {...south} />
  </Wrapper>

export const nChildren = Item => Wrapper => ({items, wrapper}) =>
  <Wrapper {...wrapper}>
    {items.map((item, index) => <Item key={index} {...item} />)}
  </Wrapper>

export const listOf = n => curryN(n, (...Items) => ({items}) =>
  items.map((item, index) => {
    const Item = Items[index]

    return <Item key={index} {...item} />
  }))

export const withChildren = (...Children) => Parent =>
  of(withChild)
  .ap(
    reduce(
      (acc, Child) => acc.ap(Child),
      of(listOf(Children.length)),
      Children
    )
  )
  .ap(Parent)
