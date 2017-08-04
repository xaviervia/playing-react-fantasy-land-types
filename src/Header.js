import { setDisplayName } from 'recompose'
import { compose, omit } from 'ramda'
import { withHoverProps } from '@klarna/higher-order-components'
import Title from './Title'
import Tagline from './Tagline'

const Header = Title.contramap(({ title, ...props }) => ({
  children: title,
  ...props,
}))
  .contramap(omit(['tagline']))
  .concat(
    Tagline.contramap(({ tagline, ...props }) => ({
      children: tagline,
      ...props,
    })).contramap(omit(['title']))
  )

export default Header.promap(
  omit(['articles']),
  compose(setDisplayName('Header'), withHoverProps({ hovered: true }))
)
