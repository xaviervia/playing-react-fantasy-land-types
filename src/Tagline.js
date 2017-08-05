import { Html } from 'react-dream'
import { omit } from 'ramda'

export default Html.P
  .contramap(omit(['hovered']))
  .style(({ hovered }) => ({ color: hovered ? 'red' : 'black' }))
  .name('Tagline')
