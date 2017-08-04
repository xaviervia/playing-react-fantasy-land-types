import React from 'react'
import { omit } from 'ramda'
import ReactComponent from 'ReactComponent'
import { setDisplayName } from 'recompose'
import { withStyleSheetOverride } from '@klarna/higher-order-components'

const Tagline = ReactComponent(({ styleSheet: { root }, ...props }) =>
  <p style={root} {...props} />
)

export default Tagline.contramap(omit(['hovered']))
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
  .map(setDisplayName('Tagline'))
