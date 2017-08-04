import { compose } from 'recompose'
import createElement from './createElement'

const ReactComponent = Target => ({
  Target,
  map: hoc => ReactComponent(hoc(Target)),
  contramap: f => ReactComponent(compose(Target, f)),
  concat: y =>
    ReactComponent(props => [
      createElement({ key: 0, ...props })(Target),
      y.fold(createElement({ key: 1, ...props })),
    ]),
  fold: f => f(Target),
  chain: f => f(Target),
})

export default ReactComponent
