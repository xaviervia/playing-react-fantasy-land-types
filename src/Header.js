import { setDisplayName } from 'recompose'
import { compose, omit } from 'ramda'
import { withHoverProps } from '@klarna/higher-order-components'
import Title from './Title'
import Tagline from './Tagline'

const Header = Title.contramap(omit(['tagline']))
  .contramap(({ title, ...props }) => ({
    children: title,
    ...props,
  }))
  .concat(
    Tagline.contramap(omit(['title'])).contramap(({ tagline, ...props }) => ({
      children: tagline,
      ...props,
    }))
  )

export default Header.promap(
  omit(['articles']),
  compose(setDisplayName('Header'), withHoverProps({ hovered: true }))
)
