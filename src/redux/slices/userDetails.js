import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  age: null,
  tall: null,
  sex: null,
  before_diseases: null,
  ongoing_diseases: null,
  weight: null
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setTall: (state, action) => {
      state.tall = action.payload;
    },
    setSex: (state, action) => {
      state.sex = action.payload;
    },
    setBeforeDiseases: (state, action) => {
      state.before_diseases = action.payload;
    },
    setOngoingDiseases: (state, action) => {
      state.ongoing_diseases = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    resetUserDetails: (state) => {
      state.age = 32;
      state.tall = 173;
      state.ongoing_diseases = [];
      state.before_diseases = [];
      state.weight = 80;
      state.sex = 'Male';
    }
  }
});

export const { setAge, setTall, setSex, setBeforeDiseases, setOngoingDiseases, setWeight,resetUserDetails } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
