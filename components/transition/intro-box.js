import { withProps } from 'recompose'
import styled from 'react-emotion'
import { system } from 'pss'

const IntroBox = withProps({
  wd: 8 / 10,
  ht: 6 / 10,
  pd: 2,
  viewBox: '0 0 1310 600'
})(styled.svg(system))

export default IntroBox
