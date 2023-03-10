import { useEffect, useState } from 'react'
import Button from 'components/atoms/Button/Button'
import FragranceImage from 'components/atoms/FragranceImage/FragranceImage'
import { FragranceName } from 'components/atoms/FragranceName/FragranceName'
import { AmountSelect, ButtonAndSelectWrapper, Wrapper } from './FragranceItem.styles'
import { useSelector } from 'react-redux'

const arrayFrom0ToN = (N) => Array.from({ length: N + 1 }, (_, i) => i)

const FragranceItem = ({
  name,
  capacity,
  price,
  src,
  amount,
  addToBasket,
  editAmount,
  height,
  isBasketList,
}) => {
  const [listAmount, setListAmount] = useState(1)
  const [editableAmount, setEditableAmount] = useState(amount)
  const { basket } = useSelector((state) => state.basket)

  useEffect(() => {
    setEditableAmount(amount)
  }, [basket])

  // useEffect(() => {
  //   // if (editableAmount === 0) console.log('delete')
  //   // DELETE
  // }, [editableAmount])

  const handleBasketInput = (e) => {
    editAmount({ name, capacity, price, src, amount: +e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addToBasket({ name, capacity, price, src, amount: listAmount })
  }

  return (
    <Wrapper height={height} isBasketList={isBasketList}>
      <FragranceImage src={src} alt={`${name} fragrance`} />
      <FragranceName>{`${name} ${capacity}ml, ${price}zł`}</FragranceName>
      <ButtonAndSelectWrapper as="form" onSubmit={(e) => handleSubmit(e)}>
        {isBasketList ? (
          <AmountSelect value={editableAmount} onChange={(e) => handleBasketInput(e)}>
            {arrayFrom0ToN(10).map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </AmountSelect>
        ) : (
          <>
            <Button>ADD</Button>
            <AmountSelect value={listAmount} onChange={(e) => setListAmount(+e.target.value)}>
              {arrayFrom0ToN(10)
                .filter((i) => i > 0)
                .map((i) => (
                  <option value={i} key={i}>
                    {i}
                  </option>
                ))}
            </AmountSelect>
          </>
        )}
      </ButtonAndSelectWrapper>
    </Wrapper>
  )
}

export default FragranceItem
