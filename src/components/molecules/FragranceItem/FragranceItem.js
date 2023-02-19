import Button from 'components/atoms/Button/Button'
import FragranceImage from 'components/atoms/FragranceImage/FragranceImage'
import FragranceName from 'components/atoms/FragranceName/FragranceName'
import React from 'react'
import { StyledFragranceItem } from './FragranceItem.styles'

const FragranceItem = () => {
  return (
    <StyledFragranceItem>
      <FragranceImage />
      <FragranceName />
      <Button />
    </StyledFragranceItem>
  )
}

export default FragranceItem
