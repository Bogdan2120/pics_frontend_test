import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriShop } from './shops-operations';
const initialState = {
  foods: [],
  isLoading: false,
  error: null,
};

const shopsSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategoriShop.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchCategoriShop.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.foods = payload;
      })
      .addCase(fetchCategoriShop.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default shopsSlice.reducer;
