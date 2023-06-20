import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopsReducer from './shops/shopsSlice';
import basketReduser from './basket/basketSlice.js';

const persistConfig = {
  key: 'basket',
  storage,
  whitelist: ['foods'],
};

const persistedBasketReducer = persistReducer(persistConfig, basketReduser);

const rootReducer = combineReducers({
  shops: shopsReducer,
  basket: persistedBasketReducer,
});

export default rootReducer;
