import { of } from './helpers/ReactComponent'
import { nChildren, listOf, withChildren, withChild } from './helpers/combinators'
import { Main, Section } from './helpers/primitives'
import { always, concat, compose, prop, omit, map, reduce } from 'ramda'
import { setDisplayName } from 'recompose'
import Article from './Article'
import Header from './Header'

const Blogroll = of(nChildren)
  .ap(Article)
  .ap(Section)
  .contramap(({articles}) => ({
    items: articles,
    wrapper: {}
  }))
  .name('Blogroll')

export default withChildren(Header, Blogroll)(Main)
  .contramap(({ title, tagline, articles }) => ({
    child: {
      items: [
        { title, tagline },
        { articles }
      ]
    }
  }))
  .name('Main')
