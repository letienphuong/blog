import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

//Lay RootState va AppDispatch tu store cua chung ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//Khi o typescript thi config them

export const useAppDispatch = () => useDispatch<AppDispatch>()
