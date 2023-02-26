import { useState } from 'react'
import Button from 'components/atoms/Button/Button'
import FragranceImage from 'components/atoms/FragranceImage/FragranceImage'
import { FragranceName } from 'components/atoms/FragranceName/FragranceName'
import { AmountSelect, ButtonAndInputWrapper, Wrapper } from './FragranceItem.styles'

const arrayFrom0ToN = (N) => Array.from({ length: N + 1 }, (_, i) => i)

const FragranceItem = ({ name, capacity, price, src, handleBasket, height, isBasketList }) => {
  const [amount, setAmount] = useState(1)

  const handleInput = (e) => setAmount(+e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    handleBasket({ name, capacity, price, src, amount })
  }

  return (
    <Wrapper height={height} isBasketList={isBasketList}>
      <FragranceImage src={src} alt={`${name} fragrance`} />
      <FragranceName>{`${name} ${capacity}ml, ${price}zł`}</FragranceName>
      <ButtonAndInputWrapper as="form" onSubmit={(e) => handleSubmit(e)}>
        {!isBasketList && <Button>ADD</Button>}

        <AmountSelect value={amount} onChange={(e) => handleInput(e)}>
          {arrayFrom0ToN(10).map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </AmountSelect>
      </ButtonAndInputWrapper>
    </Wrapper>
  )
}

export default FragranceItem
