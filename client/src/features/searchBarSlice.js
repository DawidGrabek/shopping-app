import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShowingSearchBar: localStorage.getItem('isShowingSearchBar') ? true : false,
}

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    toggleSearching: (state) => {
      localStorage.getItem('isShowingSearchBar')
        ? localStorage.setItem('isShowingSearchBar', false)
        : localStorage.setItem('isShowingSearchBar', true)
      state.isShowingSearchBar = !state.isShowingSearchBar
    },
  },
})

export const { toggleSearching } = searchBarSlice.actions

export default searchBarSlice.reducer
