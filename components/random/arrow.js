import FlexItem from '../flexitem'
import Box from '../box'
import { withProps } from 'recompose'
import styled from 'react-emotion'
import { flips, rotation } from '../../style-props'

const ArrowBox = withProps({
  wd: '30px',
  minWd: '30px',
  ht: '4px',
  position: 'relative'
})(styled(FlexItem)(flips))

const Barb = withProps({
  wd: '21px',
  ht: '4px',
  l: '-4px',
  bg: 'white',
  pab: true
})(styled(Box)(rotation))

const Arrow = (props) => (
  <ArrowBox bg='white' {...props} >
    <Barb rotate={-45} t='-6px' />
    <Barb rotate={45} b='-6px' />
  </ArrowBox>
)

export default Arrow
