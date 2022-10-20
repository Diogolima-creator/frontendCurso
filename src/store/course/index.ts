import { createSlice } from '@reduxjs/toolkit'

interface PostsType {
  username: string,
  level: string,
  profilePic: string,
  imgUrlPost: string,
  captionPost: string,
  Comments: string
}

// Define a type for the slice state
interface CourseState {
    menuSelected: number,
    classType: string,
    classNow: string,
    videoClassNow: string,
    moduleNow: string,
    lastModule: string,
    lastClass: string,
    firstOpen: string,
    posts: PostsType[]  
}

// Define the initial state using that type
const initialState: CourseState = {
    menuSelected:0,
    classType:'JavaScript',
    classNow:'',
    videoClassNow:'',
    moduleNow:'',
    lastModule:'',
    lastClass: '',
    firstOpen: '',
    posts: []
}

export const courseSlice = createSlice({
  name: 'course',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMenuSelected: (state, action) => {
      state.menuSelected = action.payload
    },
    setClassType: (state, action) => {
      state.classType = action.payload
    },
    setClassNow: (state, action) => {
      state.classNow = action.payload
    },
    setVideoClassNow: (state, action) => {
      state.videoClassNow = action.payload
    },
    setModuleNow: (state, action) => {
      state.moduleNow = action.payload
    },
    setLastModule: (state, action) => {
      state.lastModule = action.payload
    },
    setLastClass: (state, action) => {
      state.lastClass = action.payload
    },
    setFirstOpen: (state, action) => {
      state.firstOpen = action.payload
    }
    
  },
})

export const { setMenuSelected,
  setClassType,
  setClassNow,
  setVideoClassNow,
  setModuleNow,
  setLastModule,
  setLastClass,
  setFirstOpen } = courseSlice.actions

export default courseSlice.reducer