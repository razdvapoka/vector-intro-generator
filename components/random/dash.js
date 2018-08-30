import FlexItem from '../flexitem'
import { withProps } from 'recompose'

const getProps = () => ({
  ht: 4,
  wd: 30,
  bg: 'white'
})

const Dash = withProps(getProps)(FlexItem.withComponent('span'))

export default Dash
