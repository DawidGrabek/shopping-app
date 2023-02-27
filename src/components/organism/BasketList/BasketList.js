import { useDispatch, useSelector } from 'react-redux'
import { add } from 'features/basketSlice'
import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import { ButtonsWrapper, NewFragranceList, TotalPrice, Wrapper } from './BasketList.styles'
import Button from 'components/atoms/Button/Button'

const BasketList = ({ basketIsOpen }) => {
  const dispatch = useDispatch()
  const addToBasket = (fragrance) => dispatch(add(fragrance))
  const basket = useSelector((state) => state.basket)
  const totalPrice = basket.reduce((acc, { price, amount }) => (acc += price * amount), 0)

  return (
    <>
      {basketIsOpen ? (
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

            <ButtonsWrapper>
              <Button isNegative isBig>
                Close
              </Button>
              <Button isBig>Proceed</Button>
            </ButtonsWrapper>

            <TotalPrice>
              <span>
                Total Price: <b>{totalPrice}zł</b>
              </span>
            </TotalPrice>
          </NewFragranceList>
        </Wrapper>
      ) : null}
    </>
  )
}

export default BasketList
