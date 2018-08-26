import FlexItem from './flexitem'
import Circle from './circle'
import { withProps } from 'recompose'

const ArchBox = withProps({
  prl: true,
  ovh: true,
  wd: '27px',
  minWd: '27px',
  ht: '27px'
})(FlexItem)

const Arch = ({ align, ...props }) => (
  <ArchBox align={align}>
    <Circle pab {...props} />
  </ArchBox>
)

export default Arch
