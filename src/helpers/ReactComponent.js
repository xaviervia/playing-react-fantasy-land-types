import compose from 'recompose/compose'
import createElementWithProps from './createElementWithProps'
import isReferentiallyTransparentFunctionComponent from 'recompose/isReferentiallyTransparentFunctionComponent'
import getDisplayName from 'recompose/getDisplayName'
import setDisplayName from 'recompose/setDisplayName'

// doMap : (Component -> Component) -> Component -> Component
const doMap = higherOrderComponent => Component =>
  higherOrderComponent(Component)

// doContramap : (a -> Props) -> Component -> Component
const doContramap = propsPreprocessor => Component => {
  if (isReferentiallyTransparentFunctionComponent(Component)) {
    const composition = compose(Component, propsPreprocessor)
    composition.displayName = getDisplayName(Component)
    return composition
  } else {
    return props => createElementWithProps(propsPreprocessor(props))(Component)
  }
}

// doPromap : ((a -> Props), (Component -> Component)) -> Component -> Component
const doPromap = (propsPreprocessor, higherOrderComponent) =>
  compose(doMap(higherOrderComponent), doContramap(propsPreprocessor))

// doConcat : Component -> Component -> Component
const doConcat = Component => OtherComponent => props => [
  createElementWithProps({ ...props, key: 0 })(Component),
  OtherComponent.fork(createElementWithProps({ ...props, key: 1 }))
]

// doChildren : Component -> (Props -> ReactComponent) -> Component
const doChildren = Component => childrenFromProps => props =>
  createElementWithProps({
    children: childrenFromProps(props)
      .fork(createElementWithProps(props)),
    ...props
  })(Component)

// promap : Component -> ((a -> Props), (Component -> Component)) -> ReactComponent
const promap = Component => (propsPreprocessor, higherOrderComponent) =>
  ReactComponent(doPromap(propsPreprocessor, higherOrderComponent)(Component))

// map : Component -> (Component -> Component) -> ReactComponent
const map = Component => higherOrderComponent =>
  ReactComponent(doMap(higherOrderComponent)(Component))

// contramap : Component -> (a -> Props) -> ReactComponent
const contramap = Component => propsPreprocessor =>
  ReactComponent(doContramap(propsPreprocessor)(Component))

// concat : Component -> Component -> ReactComponent
const concat = Component => OtherComponent =>
  ReactComponent(doConcat(Component)(OtherComponent))
    .map(
      setDisplayName(`${getDisplayName(Component)} + ${OtherComponent.fork(getDisplayName)}`)
    )

// children : Component -> (Props -> ReactComponent) -> ReactComponent
const children = Component => childrenFromProps =>
  ReactComponent(doChildren(Component)(childrenFromProps))
    .map(setDisplayName(`${getDisplayName(Component)} > children`))

// ReactComponent : Component -> ReactComponent
const ReactComponent = Target => ({
  Target,
  map: map(Target),
  contramap: contramap(Target),
  promap: promap(Target),
  concat: concat(Target),
  fork: f => f(Target),
  chain: f => f(Target),
  ap: t => ReactComponent(t.fork(Target)),
  children: children(Target),
  style: propsToStyle => contramap(Target)(props => ({
    ...props,
    style: propsToStyle(props)
  })),
  name: name => map(Target)(setDisplayName(name))
})

// of : (a -> Component) -> ReactComponent
export const of = ReactComponent.of = ReactComponent

// empty : () -> ReactComponent
ReactComponent.empty = () => ReactComponent(setDisplayName('Empty')(() => false))

export default ReactComponent
