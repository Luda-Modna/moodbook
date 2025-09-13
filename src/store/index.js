import { configureStore } from '@reduxjs/toolkit';
import moodsSlice from './../slices/moodSlice';

const store = configureStore({
  reducer: {
    moodsList: moodsSlice,
  },
});

export default store;
