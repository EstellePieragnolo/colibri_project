import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../components/BookSelection/BookSelectionSlice'
import { wishlistReducer } from '../components/Wishlist/WishlistSlice'

export const store = configureStore({
  reducer: {
    bookSelection: bookReducer,
    wishlist: wishlistReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
