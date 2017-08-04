import { setDisplayName } from 'recompose'
import { omit } from 'ramda'
import { withHoverProps } from '@klarna/higher-order-components'
import Title from './Title'
import Tagline from './Tagline'

const Header = Title.contramap(omit(['tagline']))
  .contramap(({ title, ...props }) => ({
    children: title,
    ...props,
  }))
  .concat(
    Tagline.contramap(omit(['tagline'])).contramap(({ title, tagline, ...props }) => ({
      children: tagline,
      ...props,
    }))
  )
  .contramap(omit(['articles']))

export default Header.map(withHoverProps({ hovered: true })).map(setDisplayName('Header'))
