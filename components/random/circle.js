import Box from '../box'
import { withProps } from 'recompose'

const Circle = withProps(({
  isSquared,
  bdc = 'white'
}) => ({
  wd: '54px',
  ht: '54px',
  bd: '4px solid',
  // some may argue that a squared circle is not a circle at all
  // but think about it for a while and the fog will disperse
  radius: isSquared ? 0 : 9999,
  bdc
}))(Box)

export default Circle
