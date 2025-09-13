import { configureStore } from '@reduxjs/toolkit';
import moodsSlice from './../slices/moodSlice';
import booksSlice from './../slices/bookSlice';

const store = configureStore({
  reducer: {
    moodsList: moodsSlice,
    booksList: booksSlice,
  },
});

export default store;
