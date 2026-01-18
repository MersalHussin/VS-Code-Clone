import { configureStore } from '@reduxjs/toolkit'
import fileTreeSlice from './features/fileTreeSlice'

export const store = configureStore({
  reducer: {
    fileTree: fileTreeSlice,
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
