import { Input } from 'components/atoms/Input/Input.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`

export const SearchWrapper = styled.div`
  position: relative;
  padding: 5px 10px;
  height: 70px;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${Input} {
    margin-left: 10px;
  }

  svg {
    width: 60px;
  }
`

export const SearchResult = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 65px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`

export const SearchResultsItem = styled.li`
  font-weight: bold;
  color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colors.black : theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colors.lightGrey : theme.colors.white};
  width: 100%;
  padding: 20px 5px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`
