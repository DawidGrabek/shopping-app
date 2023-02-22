import Button from 'components/atoms/Button/Button'
import FragranceImage from 'components/atoms/FragranceImage/FragranceImage'
import { FragranceName } from 'components/atoms/FragranceName/FragranceName'
import React from 'react'
import { StyledFragranceItem } from './FragranceItem.styles'

const FragranceItem = ({ name, capacity, price, src }) => {
  const h12 = (e) => {
    console.log(e)
  }
  return (
    <StyledFragranceItem>
      <FragranceImage src={src} />
      <FragranceName>{`${name} ${capacity}ml, ${price}zł`}</FragranceName>
      <Button onClick={h12}>ADD</Button>
    </StyledFragranceItem>
  )
}

export default FragranceItem
