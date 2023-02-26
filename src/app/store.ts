import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { clockReducer } from '../features/clock/clockSlice'

export const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})

export type AppRootStateType = ReturnType<typeof store.getState>
