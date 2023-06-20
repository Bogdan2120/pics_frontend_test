import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'redux/api/shops-api';

export const fetchCategoriShop = createAsyncThunk(
  'shop/fetchCategori',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.getCategoriShop(data);
      return res;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);
