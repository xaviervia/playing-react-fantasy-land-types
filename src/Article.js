import { Article, H2, P } from './helpers/primitives'
import { setDisplayName } from 'recompose'
import { compose, objOf, prop } from 'ramda'
import render from './helpers/render'

const Title = H2.contramap(compose(objOf('children'), prop('title')))

const Content = P.contramap(compose(objOf('children'), prop('content')))

export default Article.contramap(props => ({
  children: render(Title.concat(Content))(props),
})).map(setDisplayName('Article'))
