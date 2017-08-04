import createElementWithProps from './createElementWithProps'

export default Component => props => Component.fold(createElementWithProps(props))
