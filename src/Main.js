import { Main, Section } from './helpers/primitives'
import { compose, pick, prop, objOf, map } from 'ramda'
import render from './helpers/render'
import { setDisplayName } from 'recompose'
import Article from './Article'
import Header from './Header'

const Blogroll = Section.contramap(
  compose(
    objOf('children'),
    map(compose((article, index) => ({ key: index, ...article }), render(Article))),
    prop('articles')
  )
)

export default Main.contramap(pick(['children']))
  .contramap(props => ({
    children: render(Header.concat(Blogroll))(props),
    ...props,
  }))
  .map(setDisplayName('Main'))
