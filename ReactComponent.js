import compose from 'ramda/src/compose'

const createElement = props => Component => <Component {...props />

const ReactComponent = Target => ({
  Target,
  map: hoc => hoc(Target),
  concat: y => ReactComponent(props => [Target.fold(createElement(props)), y.fold(createElement(props))],
  fold: f => f(Target)
})

const Title = ReactComponent((styleSheet: {root}, ...props) => <h1 style={root} {...props} />)
  .map(withStyleSheetOverride(({hovered}) => ({hovered}), ({hovered})
const Tagline = ReactComponent((styleSheet: {root}, ...props) =>  => <p style={root} {...props} />)

const Header = Title.concat(Tagline)

Header
  .map(withHoverProps({hovered: true})
  .map(setDisplayName('Header'))
                                         