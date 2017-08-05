import { render } from 'react-dom'
import { createElementWithProps } from 'react-dream'
import Movies from './Movies'

render(
  Movies.fork(
    createElementWithProps({
      movies: ['Casablanca', 'Double Indemnity']
    })
  ),
  document.getElementById('root')
)
