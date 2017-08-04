import React from 'react'
import ReactComponent from './ReactComponent'

export const Div = ReactComponent(props => <div {...props} />)
export const P = ReactComponent(props => <p {...props} />)
export const H1 = ReactComponent(props => <h1 {...props} />)
export const H2 = ReactComponent(props => <h2 {...props} />)
export const Main = ReactComponent(props => <main {...props} />)
export const Article = ReactComponent(props => <article {...props} />)
export const Section = ReactComponent(props => <section {...props} />)
