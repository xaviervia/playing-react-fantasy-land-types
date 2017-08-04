import {curry} from 'ramda'

export default curry((f, y) => y.fork(f))
