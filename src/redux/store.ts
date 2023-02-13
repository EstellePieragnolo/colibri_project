import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { bookSelectionReducer } from '../components/BookSelection/BookSelectionSlice'
import { wishlistReducer } from '../components/Wishlist/WishlistSlice'
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
}
const reducers = combineReducers({ bookSelection: bookSelectionReducer, wishlist: wishlistReducer })
const persistedReducer = persistReducer(persistConfig, reducers)

//create an object to combine reducers
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
