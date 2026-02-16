import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  selectedNews: null,
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
      state.loading = false;
    },
    setSelectedNews: (state, action) => {
      state.selectedNews = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setNews, setSelectedNews, setLoading, setError } = newsSlice.actions;
export default newsSlice.reducer;
