import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { Fragrance } from 'assets/types'
import { Input } from 'components/atoms/Input/Input.styles'
import data from 'data'
import { useCombobox } from 'downshift'
import { add } from 'features/basketSlice'
import { toggleSearching } from 'features/searchBarSlice'
import useModal from 'hooks/useModal'

import FragranceItem from '../../molecules/FragranceItem/FragranceItem'
import { SearchResult, SearchResultsItem, SearchWrapper, Wrapper } from './SearchBar.styles'

interface SearchingFragrance {
  fragranceName: string
  capacity: number
  price: number
  src: string
}

const getFragrancesFilter = (inputValue: string) => {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function fragrancesFilter(fragrance: SearchingFragrance) {
    return !inputValue || fragrance.fragranceName.toLowerCase().includes(lowerCasedInputValue)
  }
}

const SearchBar = () => {
  const { Modal, isOpen: modalIsOpen, handleCloseModal, handleOpenModal } = useModal()
  const dispatch = useDispatch()
  const addToBasket = (fragrance: Fragrance) => dispatch(add(fragrance))
  const [items, setItems] = useState(data)
  const [selectedItem, setSelectedItem] = useState<Fragrance | null>(null)
  const { isOpen, getLabelProps, getMenuProps, getInputProps, highlightedIndex, getItemProps } =
    useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(data.filter(getFragrancesFilter(inputValue || '')))
      },
      items,
      itemToString(item) {
        return item ? item.fragranceName : ''
      },
      onSelectedItemChange({ selectedItem }) {
        handleOpenModal()
        setSelectedItem(selectedItem as Fragrance)
      },
    })

  const handleCloseSearchBar = () => dispatch(toggleSearching())

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
            items.map((item, index) => (
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.fragranceName}
              >
                {item.fragranceName}
              </SearchResultsItem>
            ))) || <SearchResultsItem>There are nothing with this name</SearchResultsItem>}
        </SearchResult>
        {modalIsOpen && selectedItem ? (
          <Modal handleClose={handleCloseModal}>
            <FragranceItem
              isInModal
              addToBasket={addToBasket}
              fragranceName={selectedItem.fragranceName}
              capacity={selectedItem.capacity}
              price={selectedItem.price}
              src={selectedItem.src}
              data-testid="modal"
            />
          </Modal>
        ) : null}
      </SearchWrapper>
    </Wrapper>
  )
}

export default SearchBar
