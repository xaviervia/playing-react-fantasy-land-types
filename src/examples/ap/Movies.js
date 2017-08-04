import React from 'react'
import { of } from '../../helpers/ReactComponent'
import { setDisplayName } from 'recompose'
import { Li, Ul } from '../../helpers/primitives'

const mapChildren = Item => Wrapper => ({items, wrapper}) =>
  <Wrapper {...wrapper}>
    {items.map((item, index) => <Item key={index} {...item} />)}
  </Wrapper>

const Title = Li
  .style(props => ({ listStyleType: 'square' }))
  .name('Title')

const TitleList = Ul
  .style(props => ({ fontFamily: 'sans-serif' }))
  .name('TitleList')

export default of(mapChildren)
  .ap(Title)
  .ap(TitleList)
  .contramap(({movies}) => ({
    items: movies.map(movie => ({children: movie})),
    wrapper: {}
  }))
  .name('Movies')
