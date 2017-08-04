import ReactComponent from './helpers/ReactComponent'
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
    Tagline.contramap(omit(['tagline'])).contramap(({ tagline, ...props }) => ({
      children: tagline,
      ...props,
    }))
  )
  .contramap(omit(['articles']))

export default ReactComponent(withHoverProps({ hovered: true }))
  .ap(Header)
  .map(setDisplayName('Header'))
