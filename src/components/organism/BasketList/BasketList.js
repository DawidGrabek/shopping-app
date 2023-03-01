import { useDispatch, useSelector } from 'react-redux'
import { add } from 'features/basketSlice'
import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import { ButtonsWrapper, NewFragranceList, TotalPrice, Wrapper } from './BasketList.styles'
import Button from 'components/atoms/Button/Button'

const BasketList = () => {
  const dispatch = useDispatch()
  const addToBasket = (fragrance) => dispatch(add(fragrance))
  const basket = useSelector((state) => state.basket)
  const totalPrice = basket.reduce((acc, { price, amount }) => (acc += price * amount), 0)

  return (
    <>
      <Wrapper>
        <NewFragranceList>
          {basket.map((props) => (
            <FragranceItem
              handleBasket={addToBasket}
              key={props.name}
              {...props}
              height="50%"
              isBasketList
            />
          ))}

          <TotalPrice>
            <span>
              Total Price: <b>{totalPrice}zł</b>
            </span>
          </TotalPrice>
          <ButtonsWrapper>
            <Button isNegative isBig>
              Close
            </Button>
            <Button isBig>Proceed</Button>
          </ButtonsWrapper>
        </NewFragranceList>
      </Wrapper>
    </>
  )
}

export default BasketList
