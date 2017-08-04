import ReactComponent from './helpers/ReactComponent'
import { Main, Section } from './helpers/primitives'
import { always, concat, compose, prop, omit, map, reduce } from 'ramda'
import { setDisplayName } from 'recompose'
import Article from './Article'
import Header from './Header'

const Blogroll = Section
  .contramap(omit(['tagline', 'articles']))
  .children(
    compose(
      reduce(concat, ReactComponent.empty()),
      map(article => Article.contramap(always(article))),
      prop('articles')
    )
  )
  .map(setDisplayName('Blogroll'))

export default Main.contramap(omit(['articles', 'tagline']))
  .children(() => Header.concat(Blogroll))
  .map(setDisplayName('Main'))
