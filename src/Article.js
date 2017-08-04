import { of } from './helpers/ReactComponent'
import { twoChildren } from './helpers/combinators'
import { Article, H2, P } from './helpers/primitives'
import { setDisplayName } from 'recompose'
import { compose, objOf, omit, prop } from 'ramda'

const Title = H2.name('Title')

const Content = P.name('Content')

export default of(twoChildren)
  .ap(Title)
  .ap(Content)
  .ap(Article)
  .contramap(({title, content}) => ({
    north: { children: title },
    south: { children: content }
  }))
  .name('BlogPost')
