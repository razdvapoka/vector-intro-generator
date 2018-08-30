import {
  compose,
  withState,
  lifecycle,
  withProps,
  withHandlers
} from 'recompose'

import { DURATION } from '../consts'

const Text = withProps({
  fill: '#FFF',
  fontFamily: 'Fugue-Regular, Fugue',
  fontSize: 155.2,
  letterSpacing: 2
})('text')

const Typer = ({
  text,
  letterCount,
  x,
  y,
  fill
}) => (
  <Text>
    <tspan x={x} y={y} fill={fill}>
      {text.slice(0, letterCount)}
    </tspan>
  </Text>
)

const propsCreator = ({ text }) => ({
  interval: DURATION / text.length
})

const utilHandlers = {
  typeNextLetter: ({
    text,
    letterCount,
    setLetterCount
  }) => () =>
    letterCount === text.length ||
    setLetterCount(letterCount + 1),
  detypeNextLetter: ({
    text,
    letterCount,
    setLetterCount
  }) => () =>
    letterCount === 0 ||
    setLetterCount(letterCount - 1)
}

const mainHandlers = {
  type: ({
    typeNextLetter,
    interval
  }) => function type () {
    setTimeout(() => {
      const done = typeNextLetter()
      if (!done) {
        type()
      }
    }, interval)
  },
  detype: ({
    detypeNextLetter,
    interval
  }) => function detype () {
    setTimeout(() => {
      const done = detypeNextLetter()
      if (!done) {
        detype()
      }
    }, interval)
  }
}

const lifecycleSpec = {
  componentDidMount () {
    this.props.type()
  },
  componentDidUpdate (prevProps) {
    const { isBackwards, type, detype } = this.props

    if (isBackwards && !prevProps.isBackwards) {
      detype()
    }

    if (!isBackwards && prevProps.isBackwards) {
      type()
    }
  }
}

const withTyping = compose(
  withState('letterCount', 'setLetterCount', 0),
  withProps(propsCreator),
  withHandlers(utilHandlers),
  withHandlers(mainHandlers),
  lifecycle(lifecycleSpec)
)

export default withTyping(Typer)
