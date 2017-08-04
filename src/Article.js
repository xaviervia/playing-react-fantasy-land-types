import React from 'react'
import { compose, objOf, prop } from 'ramda'
import ReactComponent from './ReactComponent'
import createElement from './createElement'

const Title = ReactComponent(props => <h2 {...props} />).contramap(
  compose(objOf('children'), prop('title'))
)

const Content = ReactComponent(props => <p {...props} />).contramap(
  compose(objOf('children'), prop('content'))
)

const Article = ReactComponent(props => <article {...props} />).contramap(props => ({
  children: Title.concat(Content).fold(createElement(props)),
}))

export default Article
