import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import homeData from "../../data/homeData";
import { TVolumeInfo } from "../../types";

interface BookSelectionState {
  books: TVolumeInfo[] | null
  loading: boolean
  errors: any
}

const initialState: BookSelectionState = {
  books: [],
  loading: false,
  errors: null
}

// Actions is a process that get data from BE
export const getBookSelection = createAsyncThunk<TVolumeInfo[] | null>(
  "books/getBooks",
  async (_, thunkAPI) => {
    try {
      const response = await homeData("medieval")
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

// Reducers -> reduce to a specific state -> changes state
export const bookSelectionSlice = createSlice({
  name: 'bookSelection',
  initialState,
  reducers: {
    setBookSelection: (state, action: PayloadAction<TVolumeInfo[]>) => {
      state.books = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBookSelection.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getBookSelection.fulfilled, (state, action) => {
      state.books = action.payload,
      state.loading = false
    })
    builder.addCase(getBookSelection.rejected, (state, action) => {
      state.loading = false,
      state.errors = action.payload
    })
  }
})

export default bookSelectionSlice.reducer