import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from 'components/atoms/Button/Button'
import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import { add, edit } from 'features/basketSlice'

import { ButtonsWrapper, NewFragranceList, TotalPrice, Wrapper } from './BasketList.styles'

const BasketList = () => {
  const dispatch = useDispatch()
  const addToBasket = (fragrance) => dispatch(add(fragrance))
  const editAmount = (fragrance) => dispatch(edit(fragrance))
  const { basket } = useSelector((state) => state.basket)
  const totalPrice = basket.reduce((acc, { price, amount }) => (acc += price * amount), 0)

  return (
    <>
      <Wrapper>
        <NewFragranceList>
          {basket.map((props) => (
            <FragranceItem
              addToBasket={addToBasket}
              editAmount={editAmount}
              key={props.name}
              {...props}
              height="50%"
              isBasketList
            />
          ))}

          <TotalPrice>
            <span>
              Total Price: <b>{totalPrice.toFixed(2)}zł</b>
            </span>
          </TotalPrice>
          <ButtonsWrapper>
            <Link to="/">
              <Button isNegative isBig>
                Close
              </Button>
            </Link>
            <Button isBig>Proceed</Button>
          </ButtonsWrapper>
        </NewFragranceList>
      </Wrapper>
    </>
  )
}

export default BasketList
