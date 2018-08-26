import FlexBox from '../components/flexbox'
import anime from 'animejs'
import { system } from 'pss'
import styled from 'react-emotion'
import {
  withProps,
  compose,
  withState,
  lifecycle,
  withHandlers,
  withStateHandlers
} from 'recompose'

const DURATION = 1000
const EASING = 'easeInQuad'
const DEFAULT_OPTIONS = {
  duration: DURATION,
  easing: EASING
}
const REVERSE_DEFAULT_OPTIONS = {
  ...DEFAULT_OPTIONS,
  direction: 'reverse'
}

const Svg = styled.svg(system)
const Pointer = styled.g({
  opacity: 0
})

const Path = styled.path({
  opacity: 0
})

let Typer = ({
  text,
  letterCount,
  x,
  y,
  ...rest
}) => (
  <tspan x={x} y={y}>
    {text.slice(0, letterCount)}
  </tspan>
)
Typer = compose(
  withState('letterCount', 'setLetterCount', 0),
  withProps(({ text }) => ({
    interval: DURATION / text.length
  })),
  withHandlers({
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
  }),
  withHandlers({
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
  }),
  lifecycle({
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
  })
)(Typer)

let Intro1 = ({ isBackwards }) => (
  <Svg wd='80%' ht='60%' pd={2} viewBox='0 0 1310 600'>
    <g fill='none' fillRule='evenodd' transform='translate(-11 0)'>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <Typer isBackwards={isBackwards} x='0' y='272' text='В МЕТОД' />
      </text>
      <text fill='#191919' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <Typer isBackwards={isBackwards} x='9' y='118' text='УРОК 1' />
      </text>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <Typer isBackwards={isBackwards} x='534' y='118' text='ВВЕДЕНИЕ' />
      </text>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <Typer isBackwards={isBackwards} x='6' y='424' text='ОРГАНИЗАЦИИ' />
      </text>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <Typer isBackwards={isBackwards} x='194' y='577' text='СООБЩЕСТВА' />
      </text>
      <g stroke='#FFF' strokeWidth='16' transform='translate(705 220)'>
        <Path id='line' d='M 0.0,0.0 C 319.391422,0.000133703758 493.262423,0.000200555637 521.613004,0.000200555637 C 564.138874,0.000200555637 598.612903,34.4742299 598.612903,77.0001003 C 598.612903,119.525971 564.138874,154.0 521.613004,154.0 L 459.019355,154.0' />
        <Pointer id='pointer'>
          <path id='barb-1' d='M 8.5 5 L -47 -57.5' />
          <path id='barb-2' d='M 8.5 -5 L -42 56.5' />
        </Pointer>
      </g>
      <Path id='dash' stroke='#FFF' strokeLinecap='square' strokeWidth='16' d='M19.5,551.5 L167.5,551.5' transform='translate(0, -35)' />
    </g>
  </Svg>
)

const animatePath = (selector, options, initialLength) => {
  const path = document.querySelector(selector)
  const offset = anime.setDashoffset(path) - initialLength

  const isReverse = options.direction === 'reverse'
  path.setAttribute('stroke-dashoffset', isReverse ? 0 : offset)
  return anime({
    targets: path,
    strokeDashoffset: [ offset, 0 ],
    autoplay: false,
    offset: 0,
    ...options
  })
}

const show = (selector) => anime({
  targets: selector,
  opacity: 1,
  offset: 100,
  autoplay: false
})

const followPath = (targetSelector, pathSelector, options) => {
  const path = anime.path(pathSelector)
  return anime({
    targets: targetSelector,
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    offset: 0,
    autoplay: false,
    ...options
  })
}

const play = (isBackwards) => {
  const options = isBackwards ? REVERSE_DEFAULT_OPTIONS : DEFAULT_OPTIONS
  const barbOptions = { ...options, duration: options.duration * 0.8 }

  animatePath('#line', options, 0).play()
  animatePath('#dash', options, 0).play()
  animatePath('#barb-1', barbOptions, 0).play()
  animatePath('#barb-2', barbOptions, 0).play()
  followPath('#pointer', '#line', options).play()
}

Intro1 = lifecycle({
  componentDidUpdate (prevProps) {
    const { isBackwards } = this.props
    if (isBackwards && !prevProps.isBackwards) {
      play(true)
    }
    if (!isBackwards && prevProps.isBackwards) {
      play(false)
    }
  },
  componentDidMount () {
    play(false)
    show('#line, #dash').play()
    show('#pointer').play()
  }
})(Intro1)

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
