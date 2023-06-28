import React from 'react'

import { StyledButton } from './Button.styles'

enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface Props {
  isBig?: boolean
  isNegative?: boolean
  children: string
  onClick?: () => void
  type?: ButtonType
}

const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props} />
}

export default Button
