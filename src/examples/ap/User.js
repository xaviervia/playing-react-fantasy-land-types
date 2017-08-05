import React from 'react'
import { Html, of } from 'react-dream'
import { setDisplayName } from 'recompose'

const twoChildren = North => South => Wrapper => ({north, south, wrapper}) =>
  <Wrapper {...wrapper}>
    <North {...north} />
    <South {...south} />
  </Wrapper>

const Name = of(setDisplayName('Name'))
  .ap(Html.Dt)

const CharacterClass = of(setDisplayName('CharacterClass'))
  .ap(Html.Dd)

export default of(twoChildren)
  .ap(Name)
  .ap(CharacterClass)
  .ap(Html.Dl)
  .contramap(({name, characterClass}) => ({
    north: {children: name},
    south: {children: characterClass}
  }))
  .map(setDisplayName('User'))
