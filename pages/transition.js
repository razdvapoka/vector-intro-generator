import FlexBox from '../components/flexbox'
import { lifecycle } from 'recompose'
import anime from 'animejs'
import { system } from 'pss'
import styled from 'react-emotion'

const Svg = styled.svg(system)
const Pointer = styled.g({
  opacity: 0
})

const Path = styled.path({
  opacity: 0
})

let Intro1 = () => (
  <Svg wd='80%' ht='60%' pd={2} viewBox='0 0 1310 600'>
    <g fill='none' fillRule='evenodd' transform='translate(-11 0)'>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <tspan x='0' y='272'>В МЕТОД</tspan>
      </text>
      <text fill='#191919' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <tspan x='9' y='118'>УРОК 1</tspan>
      </text>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <tspan x='534' y='118'>ВВЕДЕНИЕ</tspan>
      </text>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <tspan x='6' y='424'>ОРГАНИЗАЦИИ</tspan>
      </text>
      <text fill='#FFF' fontFamily='Fugue-Regular, Fugue' fontSize='155.2' letterSpacing='2'>
        <tspan x='194' y='577'>СООБЩЕСТВА</tspan>
      </text>
      <g stroke='#FFF' strokeWidth='16' transform='translate(705 220)'>
        <Path id='line' d='M 0.0,0.0 C 319.391422,0.000133703758 493.262423,0.000200555637 521.613004,0.000200555637 C 564.138874,0.000200555637 598.612903,34.4742299 598.612903,77.0001003 C 598.612903,119.525971 564.138874,154.0 521.613004,154.0 L 459.019355,154.0' />
        <Pointer id='pointer'>
          <path id='barb-1' d='M 8.5 5 L -47 -57.5' />
          <path id='barb-2' d='M 8.5 -5 L -42 56.5' />
        </Pointer>
      </g>
      <path stroke='#FFF' strokeLinecap='square' strokeWidth='16' d='M19.5,551.5 L167.5,551.5' transform='translate(0, -35)' />
    </g>
  </Svg>
)

const animatePath = (selector, options, initialLength) => {
  const path = document.querySelector(selector)
  const offset = anime.setDashoffset(path) - initialLength
  path.setAttribute('stroke-dashoffset', offset)

  anime({
    targets: path,
    strokeDashoffset: [ offset, 0 ],
    ...options
  })
}

Intro1 = lifecycle({
  componentDidMount () {
    const DURATION = 2000
    const EASING = 'easeInQuad'

    const DEFAULT_OPTIONS = {
      duration: DURATION,
      easing: EASING
    }

    const BARB_OPTIONS = {
      duration: DURATION * 0.8,
      easing: EASING
    }

    animatePath('#line', DEFAULT_OPTIONS, 0)
    animatePath('#barb-1', BARB_OPTIONS, 15)
    animatePath('#barb-2', BARB_OPTIONS, 15)
    anime({
      targets: '#line',
      opacity: 1,
      offset: 100
    })

    const path = anime.path('#line')
    const pointerTimeline = anime.timeline()
    pointerTimeline.add({
      targets: '#pointer',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: EASING,
      duration: DURATION,
      offset: 0
    }).add({
      targets: '#pointer',
      opacity: 1,
      offset: 100
    })
  }
})(Intro1)

export default () => (
  <FlexBox align='center' justify='center' pd={1} ht>
    <Intro1 />
  </FlexBox>
)
