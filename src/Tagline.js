import { P } from './helpers/primitives'
import { setDisplayName } from 'recompose'

export default P.contramap(({ hovered, ...props }) => ({
  style: { color: hovered ? 'red' : 'black' },
  ...props,
})).map(setDisplayName('Tagline'))
