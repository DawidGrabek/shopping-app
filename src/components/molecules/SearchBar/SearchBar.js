import Input from 'components/atoms/Input/Input'
import React from 'react'
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { Wrapper } from './SearchBar.styles'

const SearchBar = (props) => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input {...props} />
    </Wrapper>
  )
}

export default SearchBar
