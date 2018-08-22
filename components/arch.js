import FlexItem from './flexitem'
import Box from './box'
import { withProps } from 'recompose'

const ArchBox = withProps({
  prl: true,
  ovh: true,
  wd: '27px',
  minWd: '27px',
  ht: '27px'
})(FlexItem)

const Circle = withProps(({ isSquared }) => ({
  pab: true,
  wd: '54px',
  ht: '54px',
  bd: '4px solid',
  bdc: 'white',
  radius: isSquared ? 0 : 9999
}))(Box)

const Arch = ({ align, ...props }) => (
  <ArchBox align={align}>
    <Circle {...props} />
  </ArchBox>
)

export default Arch
