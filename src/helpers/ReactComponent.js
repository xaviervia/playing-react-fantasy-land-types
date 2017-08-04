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
      createElementWithProps({ ...props, key: 0 })(Target),
      y.fold(createElementWithProps({ ...props, key: 1 })),
    ]),
  fold: f => f(Target),
  chain: f => f(Target),
  children: c =>
    ReactComponent(props =>
      createElementWithProps({ children: c.fold(createElementWithProps(props)), ...props })(Target)
    ),
})

ReactComponent.of = x => ({ ap: t => ReactComponent(t.fold(x)) })

ReactComponent.empty = () => ReactComponent(() => false)

export default ReactComponent
