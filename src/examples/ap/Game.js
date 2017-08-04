import { createElement } from 'react'
import { of } from '../../helpers/ReactComponent'
import { setDisplayName } from 'recompose'
import { Article, H1, P } from '../../helpers/primitives'

const nChildren = childComponents => Wrapper => ({childProps, wrapper}) =>
  <Wrapper {...wrapper}>
    {childProps.map((child, index) =>
      createElement(childComponents[index], {key: index, ...child})
    )}
  </Wrapper>

const Title = H1.name('Title')

const Summary = P.style(props => ({color: 'gray'}))
  .name('Summary')

export default of(nChildren)
  .ap([
    Title,
    Summary,
    P,
    P
  ])
  .ap(Article)
  .contramap(({title, summary, contents}) => ({
    childProps: [
      {children: title},
      {children: summary},
      ...contents.map(content => ({children: content}))
    ],
    wrapper: {}
  }))
  .map(setDisplayName('Game'))
