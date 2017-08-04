import {createElement} from 'react'
import {setDisplayName} from 'recompose'
import ReactComponent from './ReactComponent'

export const Div = ReactComponent(props => createElement('div', props))
  .map(setDisplayName('Div'))

export const P = ReactComponent(props => createElement('p', props))
  .map(setDisplayName('P'))

export const H1 = ReactComponent(props => createElement('h1', props))
  .map(setDisplayName('H1'))

export const H2 = ReactComponent(props => createElement('h2', props))
  .map(setDisplayName('H2'))

export const Dl = ReactComponent(props => createElement('dl', props))
  .map(setDisplayName('Dl'))

export const Dd = ReactComponent(props => createElement('dd', props))
  .map(setDisplayName('Dd'))

export const Dt = ReactComponent(props => createElement('dt', props))
  .map(setDisplayName('Dt'))

export const Ul = ReactComponent(props => createElement('ul', props))
  .map(setDisplayName('Ul'))

export const Li = ReactComponent(props => createElement('li', props))
  .map(setDisplayName('Li'))

export const Main = ReactComponent(props => createElement('main', props))
  .map(setDisplayName('Main'))

export const Article = ReactComponent(props => createElement('article', props))
  .map(setDisplayName('Article'))

export const Section = ReactComponent(props => createElement('section', props))
  .map(setDisplayName('Section'))
