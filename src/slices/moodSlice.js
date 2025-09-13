import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  positiveMoods: [],
  negativeMoods: [],
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    togglePositiveMood: (state, action) => {
      state.negativeMoods = [];
      const mood = action.payload;

      if (state.positiveMoods.includes(mood)) {
        state.positiveMoods = state.positiveMoods.filter(m => m !== mood);
      } else {
        state.positiveMoods.push(mood);
      }
    },
    toggleNegativeMood: (state, action) => {
      state.positiveMoods = [];
      const mood = action.payload;

      if (state.negativeMoods.includes(mood)) {
        state.negativeMoods = state.negativeMoods.filter(m => m !== mood);
      } else {
        state.negativeMoods.push(mood);
      }
    },
  },
});

const { reducer, actions } = moodSlice;

export const { togglePositiveMood, toggleNegativeMood } = actions;
export default reducer;
