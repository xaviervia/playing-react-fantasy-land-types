import { Html, of } from 'react-dream'
import { always, concat, compose, prop, omit, map, reduce } from 'ramda'
import { setDisplayName } from 'recompose'
import Article from './Article'
import Header from './Header'

import { nChildren, listOf, withChildren, withChild } from './helpers/combinators'

const Blogroll = of(nChildren)
  .ap(Article)
  .ap(Html.Section)
  .contramap(({articles}) => ({
    items: articles,
    wrapper: {}
  }))
  .name('Blogroll')

export default withChildren(Header, Blogroll)(Html.Main)
  .contramap(({ title, tagline, articles }) => ({
    child: {
      items: [
        { title, tagline },
        { articles }
      ]
    }
  }))
  .name('Main')
