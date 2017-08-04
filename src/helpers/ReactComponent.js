import createElementWithProps from './createElementWithProps'

const ReactComponent = Target => ({
  Target,
  map: hoc => ReactComponent(hoc(Target)),
  contramap: propsPreprocessor =>
    ReactComponent(props => createElementWithProps(propsPreprocessor(props))(Target)),
  promap: (propsPreprocessor, hoc) =>
    ReactComponent(hoc(props => createElementWithProps(propsPreprocessor(props))(Target))),
  concat: y =>
    ReactComponent(props => [
      createElementWithProps({ key: 0, ...props })(Target),
      y.fold(createElementWithProps({ key: 1, ...props })),
    ]),
  fold: f => f(Target),
  chain: f => f(Target),
})

ReactComponent.of = x => ({ ap: t => ReactComponent(t.fold(x)) })

ReactComponent.empty = () => ReactComponent(() => false)

export default ReactComponent
