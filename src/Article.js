import React from 'react'
import ReactComponent from './ReactComponent'
import createElement from './createElement'

const Title = ReactComponent(props => <h2 {...props} />).contramap(({ title }) => ({
  children: title,
}))

const Content = ReactComponent(props => <p {...props} />).contramap(({ content }) => ({
  children: content,
}))

const Article = ReactComponent(props => <article {...props} />).contramap(props => ({
  children: Title.concat(Content).fold(createElement(props)),
}))

export default Article
