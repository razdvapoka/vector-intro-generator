import anime from 'animejs'
import AnimatedItem from './animated-item'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import {
  DEFAULT_OPTIONS,
  REVERSE_DEFAULT_OPTIONS
} from '../consts'

const movePointerAlongPath = (pointerEl, pathEl, options) => {
  const path = anime.path(pathEl)
  return anime({
    targets: pointerEl,
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    offset: 0,
    autoplay: false,
    ...options
  })
}

const PointerBox = styled.g(({ isVisible }) => ({
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 200ms ease'
}))

class AnimatedPointer extends AnimatedItem {
  render () {
    return (
      <PointerBox
        isVisible={this.state.isVisible}
        {...this.props}
      />
    )
  }

  animate = (isReverse) => {
    const { pathSelector } = this.props
    const pathEl = document.querySelector(pathSelector)
    const pointerEl = ReactDOM.findDOMNode(this)
    const animation = movePointerAlongPath(
      pointerEl,
      pathEl,
      isReverse
        ? REVERSE_DEFAULT_OPTIONS
        : DEFAULT_OPTIONS
    )
    animation.play()
  }
}

export default AnimatedPointer
