import anime from 'animejs'
import AnimatedItem from './animated-item'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import { withProps } from 'recompose'
import {
  DEFAULT_OPTIONS,
  REVERSE_DEFAULT_OPTIONS
} from '../consts'

const animatePath = (pathEl, options, initialLength = 0) => {
  const offset = anime.setDashoffset(pathEl)

  return anime({
    targets: pathEl,
    strokeDashoffset: [ offset, 0 ],
    autoplay: false,
    offset: 0,
    ...options
  })
}

const Path = withProps({
  stroke: '#FFF',
  strokeWidth: '16'
})(styled.path(({ isVisible }) => ({
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 200ms ease'
})))

class AnimatedPath extends AnimatedItem {
  render () {
    return (
      <Path
        isVisible={this.state.isVisible}
        {...this.props}
      />
    )
  }

  animate = (isReverse) => {
    const pathEl = ReactDOM.findDOMNode(this)
    const animation = animatePath(
      pathEl,
      isReverse
        ? REVERSE_DEFAULT_OPTIONS
        : DEFAULT_OPTIONS
    )
    animation.play()
  }
}

export default AnimatedPath
