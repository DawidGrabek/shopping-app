import React from 'react'

import { StyledButton } from './Button.styles'

type ButtonType = 'button' | 'submit' | 'reset'

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
