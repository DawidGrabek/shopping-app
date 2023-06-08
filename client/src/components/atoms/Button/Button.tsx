import React from 'react'

import { StyledButton } from './Button.styles'

interface Props {
  isBig?: boolean
  isNegative?: boolean
  children: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props} />
}

export default Button
