import React from 'react'
import AnimatedPath from './animated-path'
import IntroBox from './intro-box'
import { compose, withState, lifecycle } from 'recompose'

const tap = x => { console.log(x); return x }

const randomPath = () => `M ${Array.from(Array(130).keys())
  .map((_, i) => `${Math.random() * 1310},${Math.random() * 600}`)
  .join(' L ')}`

const randomSign = () => Math.random() > 0.5 ? 1 : -1
const randomPoint = (maxX, maxY) => ({
  x: Math.random() * maxX,
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
  return pointsToCurve(cp1, cp2, dest)
}

const pointsToCurve = (cp1, cp2, dest) => `C ${[ cp1, cp2, dest ].map(pointToStr).join(' ')}`

const pointToLine = p => `L ${pointToStr(p)}`

const randomCurvedPath = () => `M 0,0 ${Array.from(Array(3).keys()).map(_ => {
  const p = randomPoint(1310, 600)
  // const c = randomCurve(p)
  const p1 = randomPoint(1310, 600)
  const p2 = randomPoint(1310, 600)
  const p3 = randomPoint(1310, 600)
  return `${pointToLine(p)} C ${pointToStr(p1)} ${pointToStr(p2)} ${pointToStr(p3)}`
}).map(tap).join(' ')}`

// const randomCurvedPath = () => {
//   const p1 = randomPoint(1310, 600)
//   const c1 = randomCurve(p1)
//   const p2 = randomPoint(1310, 600)
//   const c2 = randomCurve(p2)
//   const p3 = randomPoint(1310, 600)
//   return `M 0,0 ${pointToLine(p1)} ${c1} ${pointToLine(p2)} ${c2} ${pointToLine(p3)}`
// }

const RandomPath = ({ isBackwards, path }) => (
  <IntroBox minWd={320}>
    <g fill='none' fillRule='evenodd'>
      {path && <AnimatedPath isBackwards={isBackwards} d={path} />}
    </g>
  </IntroBox>
)

export default compose(
  withState('path', 'setPath', null),
  lifecycle({
    componentDidMount () {
      const { setPath, isCurved } = this.props
      setPath(isCurved ? randomCurvedPath() : randomPath())
    }
  })
)(RandomPath)
