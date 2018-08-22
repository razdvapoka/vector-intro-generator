import Dash from './dash'
// import {
//   LEFT_MARGIN,
//   RIGHT_MARGIN
// } from './consts'
import { compose, withProps } from 'recompose'

// const marginProp = ({ margin }) => {
//   switch (margin) {
//     case LEFT_MARGIN: return { mgl: 1, mgr: 0 }
//     case RIGHT_MARGIN: return { mgl: 0, mgr: 1 }
//     default: return {}
//   }
// }

const Line = compose(
  // withProps(marginProp),
  withProps({ flex: 1 })
)(Dash)

export default Line
