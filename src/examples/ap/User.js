import React from 'react'
import { of } from '../../helpers/ReactComponent'
import { setDisplayName } from 'recompose'
import { Dt, Dl, Dd } from '../../helpers/primitives'

const twoChildren = North => South => Wrapper => ({north, south, wrapper}) =>
  <Wrapper {...wrapper}>
    <North {...north} />
    <South {...south} />
  </Wrapper>

const Name = of(setDisplayName('Name'))
  .ap(Dt)

const CharacterClass = of(setDisplayName('CharacterClass'))
  .ap(Dd)

export default of(twoChildren)
  .ap(Name)
  .ap(CharacterClass)
  .ap(Dl)
  .contramap(({name, characterClass}) => ({
    north: {children: name},
    south: {children: characterClass}
  }))
  .map(setDisplayName('User'))
