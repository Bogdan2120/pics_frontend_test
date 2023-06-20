import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'redux/api/bascet-api';

export const addFood = createAsyncThunk(
  'basket/addFood',
  async (data, { rejectWithValue }) => {
    try {
      return data;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);

export const addAmountFood = createAsyncThunk(
  'basket/addAmountFood',
  async (data, { rejectWithValue }) => {
    try {
      return data;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);

export const addCart = createAsyncThunk(
  'basket/pushCart',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addCart(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
