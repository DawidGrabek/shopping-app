import { Input } from 'components/atoms/Input/Input.styles'
import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { SearchResult, SearchResultsItem, SearchWrapper, Wrapper } from './SearchBar.styles'
import { useCombobox } from 'downshift'
import data from 'data'

const getFragrancesFilter = (inputValue) => {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function fragrancesFilter(fragrance) {
    return !inputValue || fragrance.name.toLowerCase().includes(lowerCasedInputValue)
  }
}

const SearchBar = () => {
  const [items, setItems] = useState(data)
  const { isOpen, getLabelProps, getMenuProps, getInputProps, highlightedIndex, getItemProps } =
    useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(data.filter(getFragrancesFilter(inputValue)))
      },
      items,
      itemToString(item) {
        return item ? item.name : ''
      },
    })

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon as="label" {...getLabelProps()} />
        <Input {...getInputProps()} type="text" name="Search" id="Search" placeholder="Search" />
        <SearchResult isVisible={isOpen} {...getMenuProps()}>
          {(isOpen &&
            items.length > 1 &&
            items.map(({ name }, index) => (
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item: 'Mordo', index })}
                key={name}
              >
                {name}
              </SearchResultsItem>
            ))) || <SearchResultsItem>There are nothing with this name</SearchResultsItem>}
        </SearchResult>
      </SearchWrapper>
    </Wrapper>
  )
}

export default SearchBar
