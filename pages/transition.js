import FlexBox from '../components/flexbox'
import { system } from 'pss'
import styled from 'react-emotion'
import Intro1 from '../components/transition/intro-1'

import {
  withProps,
  withStateHandlers
} from 'recompose'

const Button = withProps({
  bd: 2,
  bdc: 'white',
  pd: 1
})(styled.button(system))

const Transition = ({ isBackwards, launchForward, launchBackward }) => (
  <FlexBox align='center' justify='center' pd={1} ht>
    <Button onClick={launchBackward} pfx t={10} r={10}>
      backwards
    </Button>
    <Button onClick={launchForward} pfx t={60} r={10}>
      forwards
    </Button>
    <Intro1 isBackwards={isBackwards} />
  </FlexBox>
)

export default withStateHandlers(
  () => ({
    isBackwards: false
  }),
  {
    launchForward: () => () => ({
      isBackwards: false
    }),
    launchBackward: () => () => ({
      isBackwards: true
    })
  }
)(Transition)
