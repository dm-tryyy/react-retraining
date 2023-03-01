import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './user';

export const rootReducers = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
