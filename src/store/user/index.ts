import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
    username: string
    profilePic: string
}

// Define the initial state using that type
const initialState: UserState = {
   username: '',
   profilePic: ''
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setProfilePic: (state, action) => {
      state.profilePic = action.payload
    }
  },
})

export const { setUsername, setProfilePic } = userSlice.actions

export default userSlice.reducer