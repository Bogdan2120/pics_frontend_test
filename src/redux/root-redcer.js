import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commentsReduser from './comments/commentsSlice';

const persistConfig = {
  key: 'textComment',
  storage,
  whitelist: ['commentText'],
};

const persistedCommentsReduser = persistReducer(persistConfig, commentsReduser);

const rootReducer = combineReducers({
  comments: persistedCommentsReduser,
});

export default rootReducer;
