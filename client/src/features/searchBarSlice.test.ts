import { SearchBarState } from 'assets/types'

import searchBarReducer, { toggleSearching } from './searchBarSlice'

describe('searchBarSlice', () => {
  let initialState: SearchBarState

  beforeEach(() => {
    initialState = {
      isShowingSearchBar: false,
    }
  })

  it('Should toggle the value of isShowingSearchBar to true', () => {
    const newState = searchBarReducer(initialState, toggleSearching())

    expect(newState.isShowingSearchBar).toBe(true)
  })

  it('Should toggle the value of isShowingSearchBar to false', () => {
    const stateWithSearchBarVisible = {
      isShowingSearchBar: true,
    }

    const newState = searchBarReducer(stateWithSearchBarVisible, toggleSearching())

    expect(newState.isShowingSearchBar).toBe(false)
  })
})
