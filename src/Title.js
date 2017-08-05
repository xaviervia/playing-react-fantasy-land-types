import { omit } from 'ramda'
import { Html } from 'react-dream'

export default Html.H1
  .contramap(omit(['hovered']))
  .style(({ hovered }) => ({ color: hovered ? 'red' : 'black' }))
  .name('Title')
