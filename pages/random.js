import React from 'react'
import FlexBox from '../components/flexbox'
import Intro from '../components/intro'

import {
  NO_LINES,
  NO_TEXTS,
  NO_ARCHES
} from '../components/consts'

export default () => (
  <FlexBox
    mgx='auto'
    maxWd='site'
    align='center'
    justify='space-around'
    wrap='wrap'
    ht
  >
    <Intro />
    <Intro types={NO_TEXTS} isSquared />
    <Intro types={NO_LINES} />
    <Intro types={NO_ARCHES} />
  </FlexBox>
)
