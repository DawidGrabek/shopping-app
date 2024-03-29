import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { RootState } from 'app/store'
import Button from 'components/atoms/Button/Button'
import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import { add, edit } from 'features/basketSlice'
import { Fragrance } from 'helpers/types'

import { ButtonsWrapper, NewFragranceList, TotalPrice, Wrapper } from './BasketList.styles'

const BasketList: React.FC = () => {
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToBasket = (fragrance: Fragrance) => dispatch(add(fragrance))
  const editAmount = (fragrance: Fragrance) => dispatch(edit(fragrance))
  const { basket } = useSelector((state: RootState) => state.basket)
  const totalPrice = basket.reduce((acc, { price, amount }) => (acc += price * amount), 0)

  const handleGoProceed = () => {
    basket.length ? navigate('/order') : setError('Basket is empty!')
  }

  return (
    <Wrapper>
      <NewFragranceList>
        {basket.length ? (
          basket.map((props) => (
            <FragranceItem
              key={props.name}
              name={props.name}
              capacity={props.capacity}
              price={props.price}
              src={props.src}
              amount={props.amount}
              addToBasket={addToBasket}
              editAmount={editAmount}
              height="50%"
              isBasketList
              isInModal
            />
          ))
        ) : (
          <h1>There is nothing in basket</h1>
        )}

        <TotalPrice>
          <span>
            Total Price: <b>{totalPrice.toFixed(2)}zł</b>
          </span>
        </TotalPrice>
        <ButtonsWrapper>
          <Button isBig onClick={handleGoProceed}>
            Proceed
          </Button>
          <Link to="/">
            <Button isNegative isBig>
              Close
            </Button>
          </Link>
        </ButtonsWrapper>
        {error && <h2>{error}</h2>}
      </NewFragranceList>
    </Wrapper>
  )
}

export default BasketList
