import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  start: false,
  step: null,
  bodyPart: {
    slug: 'chest',
    intensity: 2
  },
  prompt: ""
};

const userDetailsSlice = createSlice({
  name: 'startDiagno',
  initialState,
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setBodyPart: (state, action) => {
      state.bodyPart = action.payload;
    },
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    }
  }
});

export const { setStart, setStep, setBodyPart, setPrompt } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
