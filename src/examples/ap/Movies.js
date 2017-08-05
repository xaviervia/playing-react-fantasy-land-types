import React from 'react'
import { Html, of } from 'react-dream'

const mapChildren = Item => Wrapper => ({items, wrapper}) =>
  <Wrapper {...wrapper}>
    {items.map((item, index) => <Item key={index} {...item} />)}
  </Wrapper>

const Title = Html.Li
  .style(props => ({ listStyleType: 'square' }))
  .name('Title')

const TitleList = Html.Ul
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
