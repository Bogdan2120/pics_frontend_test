import { createSlice } from '@reduxjs/toolkit';
import { addFood, addAmountFood, addCart } from './basket-operations';
const initialState = {
  amountFood: [],
  foods: [],
  isLoading: false,
  error: null,
  status: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addFood.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(addFood.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.foods.push(payload);
      })
      .addCase(addFood.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addAmountFood.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(addAmountFood.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.amountFood = payload;
      })
      .addCase(addAmountFood.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addCart.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(addCart.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.status = payload.status;
        store.amountFood = [];
        store.foods = [];
      })
      .addCase(addCart.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default basketSlice.reducer;
