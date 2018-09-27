import React from 'react'
import Typer from './typer'
import AnimatedPath from './animated-path'
import AnimatedPointer from './animated-pointer'
import IntroBox from './intro-box'

const tap = x => { console.log(x); return x }

const randomPath = () => `M ${Array.from(Array(130).keys())
  .map((_, i) => `${Math.random() * 1310},${Math.random() * 600}`)
  .join(' L ')}`

const randomSign = () => Math.random() > 0.5 ? 1 : -1
const randomPoint = (maxX, maxY) => ({
  x: Math.random() * maxY,
  y: Math.random() * maxY
})
const pointToStr = p => `${p.x},${p.y}`

const randomCurve = (prevPoint) => {
  const cp1 = {
    x: prevPoint.x + Math.random() * 50 * randomSign(),
    y: prevPoint.x + Math.random() * 50 * randomSign()
  }
  const dest = randomPoint(1310, 600)
  const cp2 = {
    x: dest.x + Math.random() * 50 * randomSign(),
    y: dest.x + Math.random() * 50 * randomSign()
  }
  return curveToString(cp1, cp2, dest)
}

const curveToString = (cp1, cp2, dest) => `C ${[ cp1, cp2, dest ].map(pointToStr).join(' ')}`

const randomCurvedPath = () => {
  const p1 = randomPoint(1310, 600)
  const c1 = randomCurve(p1)
  const p2 = randomPoint(1310, 600)
  const c2 = randomCurve(p2)
  const p3 = randomPoint(1310, 600)
  return `M 0,0 L ${pointToStr(p1)} ${c1} L ${pointToStr(p2)} ${c2} L ${p3}`
}

const Intro1 = ({ isBackwards }) => (
  <IntroBox minWd={320}>
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

// const Intro1 = ({ isBackwards }) => (
//   <IntroBox>
//     <g fill='none' fillRule='evenodd'>
//       <AnimatedPath isBackwards={isBackwards} d={randomCurvedPath()} />
//     </g>
//   </IntroBox>
// )

export default Intro1
