import { P } from './helpers/primitives'
import { omit } from 'ramda'

export default P
  .contramap(omit(['hovered']))
  .style(({ hovered }) => ({ color: hovered ? 'red' : 'black' }))
  .name('Tagline')
