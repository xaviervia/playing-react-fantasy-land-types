import React from 'react'
import { omit } from 'ramda'
import ReactComponent from 'ReactComponent'
import { setDisplayName } from 'recompose'
import { withStyleSheetOverride } from '@klarna/higher-order-components'

const Title = ReactComponent(({ styleSheet: { root }, ...props }) => <h1 style={root} {...props} />)

export default Title.contramap(omit(['hovered']))
  .map(
    withStyleSheetOverride(
      x => x,
      ({ hovered }) => ({
        root: {
          color: hovered ? 'red' : 'black',
        },
      })
    )
  )
  .map(setDisplayName('Title'))
