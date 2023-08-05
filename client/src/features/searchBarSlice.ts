import { createSlice } from '@reduxjs/toolkit'
import { SearchBarState } from 'assets/types'

const initialState: SearchBarState = {
  isShowingSearchBar: false,
}

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    toggleSearching: (state) => {
      state.isShowingSearchBar = !state.isShowingSearchBar
    },
  },
})

export const { toggleSearching } = searchBarSlice.actions

export default searchBarSlice.reducer
