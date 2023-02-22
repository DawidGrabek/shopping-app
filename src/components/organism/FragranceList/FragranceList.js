import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import React from 'react'
import { StyledFragranceList } from './FragranceList.styles'
import data from 'data'

const FragranceList = () => {
  return (
    <StyledFragranceList>
      {data.map((props) => (
        <FragranceItem key={props.name} {...props} />
      ))}
    </StyledFragranceList>
  )
}

export default FragranceList
