import { compose } from 'recompose'
import createElementWithProps from './createElementWithProps'

const ReactComponent = Target => ({
  Target,
  map: hoc => ReactComponent(hoc(Target)),
  contramap: f => ReactComponent(compose(Target, f)),
  concat: y =>
    ReactComponent(props => [
      createElementWithProps({ key: 0, ...props })(Target),
      y.fold(createElementWithProps({ key: 1, ...props })),
    ]),
  fold: f => f(Target),
  chain: f => f(Target),
  ap: t => ReactComponent(t.fold(Target)),
})

export default ReactComponent
