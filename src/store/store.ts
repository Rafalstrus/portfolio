import themeSlice from './themeSlice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  themeState: themeSlice.reducer
});

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type StoreState = ReturnType<typeof reducer>