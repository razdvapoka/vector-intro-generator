import styled from 'react-emotion'
import { propStylesInTheme, space, colors } from 'pss'
import { withProps } from 'recompose'

const Text = styled.span(
  propStylesInTheme('textStyles', 'ts'),
  space,
  colors
)

export default withProps({ ts: 'heading', pdt: '7px', mgx: 1 })(Text)
