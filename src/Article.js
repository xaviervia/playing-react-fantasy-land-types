import { Article, H2, P } from './helpers/primitives'
import { setDisplayName } from 'recompose'
import { compose, objOf, omit, prop } from 'ramda'

const Title = H2.contramap(compose(objOf('children'), prop('title')))

const Content = P.contramap(compose(objOf('children'), prop('content')))

export default Article.contramap(omit(['title', 'content']))
  .children(() => Title.concat(Content))
  .map(setDisplayName('Article'))
