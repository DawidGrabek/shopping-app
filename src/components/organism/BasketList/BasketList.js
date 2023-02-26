import { useDispatch, useSelector } from 'react-redux'
import { add } from 'features/basketSlice'
import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import { NewFragranceList, Wrapper } from './BasketList.styles'

const BasketList = () => {
  const dispatch = useDispatch()
  const addToBasket = (fragrance) => dispatch(add(fragrance))
  const basket = useSelector((state) => state.basket)
  // TODO REMOVE FROM BASKET
  // PASS PROPER AMOUNT

  return (
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
      </NewFragranceList>
    </Wrapper>
  )
}

export default BasketList
