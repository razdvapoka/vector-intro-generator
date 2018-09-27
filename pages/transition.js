import FlexBox from '../components/flexbox'
import { system } from 'pss'
import styled from 'react-emotion'
import Intro1 from '../components/transition/intro-1'
import RandomPath from '../components/transition/random-path'

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
  <FlexBox flexWrapM='wrap' align='center' justify='center' pd={1} ht>
    <Button onClick={launchBackward} pfx pabM t={10} r={10} rM='calc(100% - 150px)' tM='calc(50% + 30px)'>
      backwards
    </Button>
    <Button onClick={launchForward} pfx pabM t={60} r={10} rM='50px' tM='calc(50% + 30px)'>
      forwards
    </Button>
    <Intro1 isBackwards={isBackwards} />
    <RandomPath isBackwards={isBackwards} />
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
