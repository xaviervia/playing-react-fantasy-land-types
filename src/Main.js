import ReactComponent from './helpers/ReactComponent'
import { Main, Section } from './helpers/primitives'
import fold from './helpers/fold'
import { always, concat, compose, prop, objOf, omit, map, reduce } from 'ramda'
import createElementWithProps from './helpers/createElementWithProps'
import { setDisplayName } from 'recompose'
import Article from './Article'
import Header from './Header'

const Blogroll = Section.contramap(
  compose(
    objOf('children'),
    fold(createElementWithProps({})),
    reduce(concat, ReactComponent.empty()),
    map(article => Article.contramap(always(article))),
    prop('articles')
  )
)

export default Main.contramap(omit(['articles', 'tagline']))
  .children(Header.concat(Blogroll))
  .map(setDisplayName('Main'))
