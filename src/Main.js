import { of } from './helpers/ReactComponent'
import { twoChildren, nChildren } from './helpers/combinators'
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

export default of(twoChildren)
  .ap(Header)
  .ap(Blogroll)
  .ap(Main)
  .contramap(({ title, tagline, articles }) => ({
    north: { title, tagline },
    south: { articles }
  }))
  .name('Main')
