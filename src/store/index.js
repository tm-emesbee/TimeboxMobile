import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../slices/auth.slice';
import userSlice from '../slices/user.slice';

export const store = configureStore({
    reducer: {
      auth: rootReducer,
      user : userSlice
    },
  });