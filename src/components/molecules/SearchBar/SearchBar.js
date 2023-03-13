import { Input } from 'components/atoms/Input/Input.styles'
import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { SearchResult, SearchResultsItem, SearchWrapper } from './SearchBar.styles'
import { useCombobox } from 'downshift'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`

export const SearchBarWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`

const books = [
  { author: 'Harper Lee', title: 'To Kill a Mockingbird' },
  { author: 'Lev Tolstoy', title: 'War and Peace' },
  { author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
  { author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
  { author: 'George Orwell', title: '1984' },
  { author: 'Jane Austen', title: 'Pride and Prejudice' },
  { author: 'Marcus Aurelius', title: 'Meditations' },
  { author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov' },
  { author: 'Lev Tolstoy', title: 'Anna Karenina' },
  { author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
]
function getBooksFilter(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function booksFilter(book) {
    return (
      !inputValue ||
      book.title.toLowerCase().includes(lowerCasedInputValue) ||
      book.author.toLowerCase().includes(lowerCasedInputValue)
    )
  }
}

const SearchBar = () => {
  const [items, setItems] = React.useState(books)
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(books.filter(getBooksFilter(inputValue)))
    },
    items,
    itemToString(item) {
      return item ? item.title : ''
    },
  })

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon as="label" {...getLabelProps()} />
        <Input {...getInputProps()} type="text" name="Search" id="Search" placeholder="Search" />
        <SearchResult isVisible={isOpen} {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item: 'Mordo', index })}
                key={item.title}
              >
                {item.title}
              </SearchResultsItem>
            ))}
        </SearchResult>
      </SearchWrapper>
    </Wrapper>
  )
}

export default SearchBar
