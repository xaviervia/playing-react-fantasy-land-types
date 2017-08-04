import { compose, prop, objOf } from 'ramda'
import { H1, H2 } from './helpers/primitives'

export const Title = H1
  .contramap(compose(objOf('children'), prop('title')))
  .name('Title')

export const Subtitle = H2
  .contramap(compose(objOf('children'), prop('subtitle')))
  .name('Subtitle')

export default Title.concat(Subtitle)



// props => [
//   <Title {...props} />
//   <Subtitle {...props} />
// ]

// contramap : (b -> a) -> f a -> f b
//
// // inc : Int -> Int
// const inc = x => x + 1
//
// // parseString : String -> Int
// const parseString = str => parseInt(str)
//
// // incString : String -> Int
// const incString = inc.contramap(str => parseInt(str))
//
// function Title({label, ...props}) {
//   return <h1 {...props}>{label}</h1>
// }
//
// const filterDontUse = ({dontUseThisProp, ...props}) => props
//
// const filterDontUseHigherOrder = Target => ({dontUseThisProp, ...props}) => React.createElement(Target, props)
//
// <Title label='hola' dontUseThisProp='asdfads' />
//
//
//
//
//
