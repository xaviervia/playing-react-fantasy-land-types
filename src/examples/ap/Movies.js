import React from 'react'
import { of } from '../../helpers/ReactComponent'
import { setDisplayName } from 'recompose'
import { Li, Ul } from '../../helpers/primitives'

const mapChildren = Item => Wrapper => ({items, wrapper}) =>
  <Wrapper {...wrapper}>
    {items.map((item, index) => <Item key={index} {...item} />)}
  </Wrapper>

const Title = of(setDisplayName('Title'))
  .ap(Li)

const TitleList = of(setDisplayName('TitleList'))
  .ap(Ul)

export default of(mapChildren)
  .ap(Title)
  .ap(TitleList)
  .contramap(({movies}) => ({
    items: movies.map(movie => ({children: movie})),
    wrapper: {}
  }))
  .map(setDisplayName('Movies'))
