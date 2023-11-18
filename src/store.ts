import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.slice'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

//Lay RootState va AppDispatch tu store cua chung ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
