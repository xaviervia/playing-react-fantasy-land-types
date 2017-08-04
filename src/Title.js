import { omit } from 'ramda'
import { H1 } from './helpers/primitives'

export default H1
  .contramap(omit(['hovered']))
  .style(({ hovered }) => ({ color: hovered ? 'red' : 'black' }))
  .name('Title')
