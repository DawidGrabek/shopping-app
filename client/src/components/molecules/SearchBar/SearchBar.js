import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { Input } from 'components/atoms/Input/Input.styles'
import data from 'data'
import { useCombobox } from 'downshift'
import { add } from 'features/basketSlice'
import { toggleSearching } from 'features/searchBarSlice'
import useModal from 'hooks/useModal'

import FragranceItem from '../FragranceItem/FragranceItem'
import { SearchResult, SearchResultsItem, SearchWrapper, Wrapper } from './SearchBar.styles'

const getFragrancesFilter = (inputValue) => {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function fragrancesFilter(fragrance) {
    return !inputValue || fragrance.name.toLowerCase().includes(lowerCasedInputValue)
  }
}

const SearchBar = () => {
  const { Modal, isOpen: modalIsOpen, handleCloseModal, handleOpenModal } = useModal()
  const dispatch = useDispatch()
  const addToBasket = (fragrance) => dispatch(add(fragrance))
  const [items, setItems] = useState(data)
  const [selectedItem, setSelectedItem] = useState(null)
  const { isOpen, getLabelProps, getMenuProps, getInputProps, highlightedIndex, getItemProps } =
    useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(data.filter(getFragrancesFilter(inputValue)))
      },
      items,
      itemToString(item) {
        return item ? item.name : ''
      },
      onSelectedItemChange({ selectedItem }) {
        handleOpenModal()
        setSelectedItem(selectedItem)
      },
    })

  // const handleCloseSearchBar = () => dispatch(toggleSearching())
  const handleCloseSearchBar = () => localStorage.setItem('isShowingSearchBar', false)

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon as="label" {...getLabelProps()} onClick={handleCloseSearchBar} />
        <Input
          {...getInputProps()}
          type="text"
          name="Search"
          id="Search"
          placeholder="Search"
          autoFocus
        />
        <SearchResult isVisible={isOpen} {...getMenuProps()}>
          {(isOpen &&
            items.map(({ name }, index) => (
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({
                  item: 'Mordo',
                  index,
                })}
                key={name}
              >
                {name}
              </SearchResultsItem>
            ))) || <SearchResultsItem>There are nothing with this name</SearchResultsItem>}
        </SearchResult>
        {modalIsOpen && selectedItem ? (
          <Modal handleClose={handleCloseModal}>
            <FragranceItem
              isInModal
              addToBasket={addToBasket}
              name={selectedItem.name}
              capacity={selectedItem.capacity}
              price={selectedItem.price}
              src={selectedItem.src}
            />
          </Modal>
        ) : null}
      </SearchWrapper>
    </Wrapper>
  )
}

export default SearchBar
