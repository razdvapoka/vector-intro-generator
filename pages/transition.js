import FlexBox from '../components/flexbox'
import { lifecycle } from 'recompose'
// import anime from 'animejs'

let Intro1 = () => (
  <svg width='60%' height='60%' viewBox='0 0 1310 600'>
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
        <path id='#line' d='M459.019355,154 L521.613004,154 C564.138874,154 598.612903,119.525971 598.612903,77.0001003 C598.612903,34.4742299 564.138874,0.000200555637 521.613004,0.000200555637 C493.262423,0.000200555637 319.391422,0.000133703758 0,0' />
        <polyline points='511.06 97 455 154.002 511.06 211' />
      </g>
      <path stroke='#FFF' strokeLinecap='square' strokeWidth='16' d='M19.5,551.5 L167.5,551.5' transform='translate(0, -35)' />
    </g>
  </svg>
)

Intro1 = lifecycle({
  componentDidMount () {
    // const pathEl = document.querySelector(`#line`)
    // const offset = anime.setDashoffset(pathEl)
    // pathEl.setAttribute('stroke-dashoffset', offset)
    // anime({
    //   targets: pathEl,
    //   strokeDashoffset: [ offset, 0 ],
    //   duration: 3000,
    //   easing: 'linear',
    //   delay: 1000
    // })
  }
})(Intro1)

export default () => (
  <FlexBox align='center' justify='center' ht>
    <Intro1 />
  </FlexBox>
)
