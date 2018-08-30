import React from 'react'
import Typer from './typer'
import AnimatedPath from './animated-path'
import AnimatedPointer from './animated-pointer'
import IntroBox from './intro-box'

const Intro1 = ({ isBackwards }) => (
  <IntroBox>
    <g fill='none' fillRule='evenodd' transform='translate(-11 0)' >
      <Typer isBackwards={isBackwards} x='0' y='272' text='В МЕТОД' />
      <Typer isBackwards={isBackwards} x='9' y='118' text='УРОК 1' fill='#000' />
      <Typer isBackwards={isBackwards} x='534' y='118' text='ВВЕДЕНИЕ' />
      <Typer isBackwards={isBackwards} x='6' y='424' text='ОРГАНИЗАЦИИ' />
      <Typer isBackwards={isBackwards} x='194' y='577' text='СООБЩЕСТВА' />
      <g transform='translate(705 220)'>
        <AnimatedPath isBackwards={isBackwards} id='intro-1-path' d='M 0.0,0.0 C 319.391422,0.000133703758 493.262423,0.000200555637 521.613004,0.000200555637 C 564.138874,0.000200555637 598.612903,34.4742299 598.612903,77.0001003 C 598.612903,119.525971 564.138874,154.0 521.613004,154.0 L 459.019355,154.0' />
        <AnimatedPointer isBackwards={isBackwards} id='pointer' pathSelector='#intro-1-path'>
          <AnimatedPath isBackwards={isBackwards} id='barb-1' d='M 8.5 5 L -47 -57.5' />
          <AnimatedPath isBackwards={isBackwards} id='barb-2' d='M 8.5 -5 L -42 56.5' />
        </AnimatedPointer>
      </g>
      <AnimatedPath
        isBackwards={isBackwards}
        d='M19.5,551.5 L167.5,551.5'
        transform='translate(0, -35)'
      />
    </g>
  </IntroBox>
)

export default Intro1
