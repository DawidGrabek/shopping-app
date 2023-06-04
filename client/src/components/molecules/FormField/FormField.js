import React from 'react'

import { Input } from 'components/atoms/Input/Input.styles'
import { Label } from 'components/atoms/Label/Label.styles'

import { Wrapper } from './FormField.styles'

const FormField = React.forwardRef((props, ref) => {
  const { id, labelText, type, placeholder, value, handleChange, error } = props
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
      {error && <span>{error}</span>}
    </Wrapper>
  )
})

export default FormField
