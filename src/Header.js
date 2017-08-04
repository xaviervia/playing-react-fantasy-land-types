import { of } from './helpers/ReactComponent'
import { compose, omit } from 'ramda'
import { withHoverProps } from '@klarna/higher-order-components'
import { listOf } from './helpers/combinators'
import Title from './Title'
import Tagline from './Tagline'

const Header = of(listOf(2))
  .ap(Title)
  .ap(Tagline)
  .contramap(({ title, tagline, ...props }) => ({
    items: [
      { children: title, ...props },
      { children: tagline, ...props }
    ]
  }))
  .name('Header')
  .map(withHoverProps({hovered: true}))

export default Header
