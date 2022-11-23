import { createSlice } from "@reduxjs/toolkit";
import { TBookId } from "../../types";

interface WishlistState {
  wishlist: TBookId[]
}
const initialState:WishlistState = {
  wishlist: []
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: {payload: string}) => {
      // state.wishlist?.push({ ...action.payload.id })
      let updatedWishlist = [...state.wishlist]
      if (!state.wishlist.some((wishlistItem) => { //to remove use findTheIndex() instead of some() and use splice() to remove smthg from the array
        return wishlistItem.id === action.payload
      })) {
        updatedWishlist = [...state.wishlist, {id:action.payload}]
      }
      return { //immutable way
        ...state,
        wishlist: updatedWishlist
      }
    },
    removeFromWishlist: (state, action: { payload: string }) => {
      const cleanedWishlist = [...state.wishlist]
      const indexToRemove = cleanedWishlist.findIndex((wishlistItem) => {
        return wishlistItem.id === action.payload
      })
      if (indexToRemove >= 0) {
        cleanedWishlist.splice(indexToRemove, 1)
      }
      return { //immutable way
        ...state,
        wishlist: cleanedWishlist
      }
    },
    toggleWishlist: (state, action: { payload: string }) => {
      let updatedWishlist = [...state.wishlist]

      if (!state.wishlist.some((wishlistItem) => {
        return wishlistItem.id === action.payload
      })) {
        updatedWishlist = [...state.wishlist, {id:action.payload}]
      } else {
        const indexToRemove = updatedWishlist.findIndex((wishlistItem) => {
          return wishlistItem.id === action.payload
        })
        updatedWishlist.splice(indexToRemove, 1)
      }
      return { //immutable way
        ...state,
        wishlist: updatedWishlist
      }
    }
  }

  //add toggle reducer
})

export const wishlistReducer = wishlistSlice.reducer
export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist
} = wishlistSlice.actions