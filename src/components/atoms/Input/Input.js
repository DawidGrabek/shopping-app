import React from 'react'
import { StyledInput } from './Input.styles'

const Input = ({ type, placeHolder, isBig }) => {
  return <StyledInput type={type} placeholder={placeHolder} isBig={isBig} />
}

export default Input
