import ReactComponent from './helpers/ReactComponent'
import { H1 } from './helpers/primitives'
import { setDisplayName } from 'recompose'

export default H1.contramap(({ hovered, ...props }) => ({
  style: { color: hovered ? 'red' : 'black' },
  ...props,
}))
  .map(setDisplayName('Title'))
  .concat(ReactComponent.empty())
