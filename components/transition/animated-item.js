import React from 'react'

class AnimatedItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  render () {
    return null
  }

  componentDidMount () {
    this.animate(false)
    this.setState({
      isVisible: true
    })
  }

  componentDidUpdate (prevProps) {
    const { isBackwards } = this.props
    const { isBackwards: wasBackwards } = prevProps

    if (isBackwards !== wasBackwards) {
      this.animate(isBackwards)
    }
  }
}

export default AnimatedItem
