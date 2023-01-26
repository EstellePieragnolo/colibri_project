import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { bookSelectionReducer } from '../components/BookSelection/BookSelectionSlice'
import { wishlistReducer } from '../components/Wishlist/WishlistSlice'

//create an object to combine reducers
export const store = configureStore({
  reducer: {
    bookSelection: bookSelectionReducer,
    wishlist: wishlistReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
