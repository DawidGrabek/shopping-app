import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { set } = userSlice.actions

export default userSlice.reducer
