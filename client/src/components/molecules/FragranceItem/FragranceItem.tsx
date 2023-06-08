import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'app/store'
import Button from 'components/atoms/Button/Button'
import { FragranceImage } from 'components/atoms/FragranceImage/FragranceImage.styles'
import { FragranceName } from 'components/atoms/FragranceName/FragranceName.styles'
import { Fragrance, deleteItem } from 'features/basketSlice'
import PropTypes from 'prop-types'

import { AmountSelect, ButtonAndSelectWrapper, Wrapper } from './FragranceItem.styles'

const arrayFrom0ToN = (N: number) => Array.from({ length: N + 1 }, (_, i) => i)

interface FragranceItemProps {
  fragranceName: string
  capacity: number
  price: number
  src: string
  amount?: number
  addToBasket?: (fragrance: Fragrance) => void
  editAmount?: (fragrance: Fragrance) => void
  height?: string
  isBasketList?: boolean
  openFragranceDetails?: (fragrance: Fragrance) => void
  isInModal?: boolean
  setCurrentFragrance?: (fragrance: Fragrance) => void
}

const FragranceItem: React.FC<FragranceItemProps> = ({
  fragranceName,
  capacity,
  price,
  src,
  amount,
  addToBasket,
  editAmount,
  height,
  isBasketList,
  openFragranceDetails,
  isInModal = false,
  setCurrentFragrance,
}) => {
  const dispatch = useDispatch()
  const [listAmount, setListAmount] = useState(1)
  const [editableAmount, setEditableAmount] = useState(amount)
  const { basket } = useSelector((state: RootState) => state.basket)

  useEffect(() => {
    setEditableAmount(amount)
  }, [basket, amount])

  useEffect(() => {
    if (editableAmount === 0) {
      dispatch(deleteItem())
    }
  }, [editableAmount, dispatch])

  const handleBasketInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (editAmount) {
      editAmount({ fragranceName, capacity, price, src, amount: +e.target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (addToBasket) {
      addToBasket({ fragranceName, capacity, price, src, amount: listAmount })
    }
  }
  const handleOpenFragranceDetails = () => {
    if (openFragranceDetails) {
      openFragranceDetails({
        fragranceName,
        capacity,
        price,
        src,
        amount: listAmount,
      })
    }
  }

  const handleClick = () => {
    if (setCurrentFragrance) {
      setCurrentFragrance({
        fragranceName,
        capacity,
        price,
        src,
        amount: listAmount,
      })
    }
  }

  return (
    <Wrapper
      height={height}
      isBasketList={isBasketList}
      isInModal={isInModal}
      onClick={handleClick}
    >
      <FragranceImage
        src={src}
        alt={`${fragranceName} fragrance`}
        onClick={handleOpenFragranceDetails}
      />
      <FragranceName>{`${fragranceName} ${capacity}ml, ${price}zł`}</FragranceName>
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

FragranceItem.propTypes = {
  fragranceName: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  amount: PropTypes.number,
  addToBasket: PropTypes.func,
  editAmount: PropTypes.func,
  height: PropTypes.string,
  isBasketList: PropTypes.bool,
  openFragranceDetails: PropTypes.func,
  isInModal: PropTypes.bool,
  setCurrentFragrance: PropTypes.func,
}

export default FragranceItem
