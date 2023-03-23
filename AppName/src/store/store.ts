import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './user';
import { tasksReducer } from './tasks';
import { filterReducer } from './filters/slice';

export const rootReducers = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
