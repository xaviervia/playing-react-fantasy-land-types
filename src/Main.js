import React from 'react'
import { compose, pick, prop, objOf, map } from 'ramda'
import ReactComponent from './ReactComponent'
import createElement from './createElement'
import { setDisplayName } from 'recompose'
import Article from './Article'
import Header from './Header'

const Blogroll = ReactComponent(props => <section {...props} />).contramap(
  compose(
    objOf('children'),
    map((article, index) => Article.fold(createElement({ key: index, ...article }))),
    prop('articles')
  )
)

const Main = ReactComponent(props => <main {...props} />)
  .contramap(pick(['children']))
  .contramap(props => ({
    children: Header.concat(Blogroll).fold(createElement(props)),
    ...props,
  }))

export default Main.map(setDisplayName('Main'))
