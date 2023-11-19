import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userDetailsReducer from './slices/userDetails';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userDetails: userDetailsReducer
  }
});
