import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import React from 'react'
import { Wrapper } from './FragranceList.styles'
import data from 'data'
import { useDispatch } from 'react-redux'
import { add } from 'features/basketSlice'

const FragranceList = () => {
  const dispatch = useDispatch()
  const addToBasket = (fragrance) => dispatch(add(fragrance))
  return (
    <Wrapper>
      {data.map((props) => (
        <FragranceItem addToBasket={addToBasket} key={props.name} {...props} />
      ))}
    </Wrapper>
  )
}

export default FragranceList
