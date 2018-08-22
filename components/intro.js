import Box from './box'
import FlexBox from './flexbox'
import Dash from './dash'
import Line from './line'
import Text from './text'
import Arrow from './arrow'
import Arch from './arch'
import generateIntro from '../generateIntro'

import {
  DASH,
  LINE,
  TEXT,
  ARROW,
  ARCH,
  TYPES
} from './consts'

import {
  compose,
  lifecycle,
  withState,
  withHandlers,
  defaultProps
} from 'recompose'

const ITEM_TYPES = {
  [DASH]: Dash,
  [LINE]: Line,
  [TEXT]: Text,
  [ARROW]: Arrow,
  [ARCH]: Arch
}

const Row = ({ items, isSquared }) => (
  <FlexBox
    align='center'
    justify='space-between'
    ht={50}
  >
    {items.map(({ type, ...rest }, itemIndex) => {
      const Item = ITEM_TYPES[type] || Dash
      return (
        <Item key={itemIndex} {...rest} isSquared={isSquared} />
      )
    })}
  </FlexBox>
)

const Intro = ({ intro, isSquared }) => (
  <Box
    wd='40%'
    minWd='300px'
    maxWd='500px'
    pd={2}
    mgb={3}
  >
    {intro.map((rowItems, rowIndex) => (
      <Row
        key={rowIndex}
        items={rowItems}
        isSquared={isSquared}
      />
    ))}
  </Box>
)

export default compose(
  defaultProps({
    rowCount: 7,
    itemCount: 5,
    interval: 1000,
    types: TYPES
  }),
  withState('intro', 'setIntro', []),
  withState('intervalId', 'setIntervalId', null),
  withHandlers({
    start: ({
      setIntro,
      setIntervalId,
      interval,
      rowCount,
      itemCount,
      types
    }) => () => {
      const regen = () => setIntro(generateIntro(rowCount, itemCount, types))
      setIntervalId(setInterval(regen, interval))
    },
    stop: ({ intervalId, setIntervalId }) => () => {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }),
  withHandlers({
    handleKeyDown: ({
      start,
      stop,
      intervalId
    }) => (e) => {
      if (e.which === 32) {
        if (intervalId) {
          stop()
        } else {
          start()
        }
      }
    }
  }),
  lifecycle({
    componentDidMount () {
      const { start, handleKeyDown } = this.props
      start()
      window.addEventListener('keydown', handleKeyDown)
    },
    componentWillUnmount () {
      const { handleKeyDown } = this.props
      window.removeEventListener('keydown', handleKeyDown)
    }
  })
)(Intro)
