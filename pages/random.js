import React from 'react'
import FlexBox from '../components/flexbox'
import Intro from '../components/random/intro'

import {
  DASH,
  TEXT,
  LINE,
  CIRCLE,
  ARCH,
  ARROW,
  TYPES
} from '../components/consts'

export default () => (
  <FlexBox
    mgx='auto'
    maxWd='site'
    align='center'
    justify='space-around'
    wrap='wrap'
    mgt='50px'
    ht
  >
    <Intro />
    <Intro types={TYPES.without([ TEXT, DASH ])} isSquared />
    <Intro types={TYPES.without([ LINE, CIRCLE ])} maxWordLength={2} />
    <Intro types={TYPES.without([ ARCH, CIRCLE ])} />
    <Intro types={TYPES.without([ CIRCLE, DASH, TEXT, ARROW ])} />
    <Intro types={TYPES.without([ DASH, TEXT, ARROW ])} />
  </FlexBox>
)
