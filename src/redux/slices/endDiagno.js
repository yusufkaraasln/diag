import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  diagno: null
};

const endDiagnoSlice = createSlice({
  name: 'endDiagno',
  initialState,
  reducers: {
    setDiagno: (state, action) => {
      state.diagno = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setDiagno, setLoading } = endDiagnoSlice.actions;

export default endDiagnoSlice.reducer;
