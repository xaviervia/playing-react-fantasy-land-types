import { createElement } from 'react'
import { Html, of } from 'react-dream'
import { setDisplayName } from 'recompose'

const nChildren = childComponents => Wrapper => ({childProps, wrapper}) =>
  <Wrapper {...wrapper}>
    {childProps.map((child, index) =>
      createElement(childComponents[index], {key: index, ...child})
    )}
  </Wrapper>

const Title = Html.H1.name('Title')

const Summary = Html.P.style(props => ({color: 'gray'}))
  .name('Summary')

export default of(nChildren)
  .ap([
    Title,
    Summary,
    Html.P,
    Html.P
  ])
  .ap(Html.Article)
  .contramap(({title, summary, contents}) => ({
    childProps: [
      {children: title},
      {children: summary},
      ...contents.map(content => ({children: content}))
    ],
    wrapper: {}
  }))
  .map(setDisplayName('Game'))
