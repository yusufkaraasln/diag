import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userDetailsReducer from './slices/userDetails';
import startDiagnoReducer from './slices/startDiagno';
import endDiagnoReducer from './slices/endDiagno';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    userDetails: userDetailsReducer,
    startDiagno: startDiagnoReducer,
    endDiagno: endDiagnoReducer
  }
});
