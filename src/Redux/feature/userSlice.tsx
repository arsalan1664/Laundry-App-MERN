import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: true
  },
  reducers: {
    login: state => {
      state.isLogin = true
    },
    logout: state => {
        state.isLogin = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer