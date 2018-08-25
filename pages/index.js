import FlexBox from '../components/flexbox'
import { text } from 'pss'
import styled from 'react-emotion'

const Big = styled.h1(text)

export default () => (
  <FlexBox
    maxWd='site'
    align='center'
    justify='center'
    ht
  >
    <Big size={100} transform='uppercase'>
      hey!
    </Big>
  </FlexBox>
)
