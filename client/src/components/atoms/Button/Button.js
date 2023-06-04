import React from 'react'

import { StyledButton } from './Button.styles'

const Button = React.forwardRef((props, ref) => {
  return <StyledButton {...props} ref={ref} />
})

export default Button
