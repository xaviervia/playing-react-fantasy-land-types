import { Html, of } from 'react-dream'
import { setDisplayName } from 'recompose'
import { compose, objOf, omit, prop } from 'ramda'

import { twoChildren } from './helpers/combinators'

const Title = Html.H2.name('Title')

const Content = Html.P.name('Content')

export default of(twoChildren)
  .ap(Title)
  .ap(Content)
  .ap(Html.Article)
  .contramap(({title, content}) => ({
    north: { children: title },
    south: { children: content }
  }))
  .name('BlogPost')
