import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {
    setStandings: (state, action) => {
      state.list = action.payload;
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

export const { setStandings, setLoading, setError } = standingsSlice.actions;
export default standingsSlice.reducer;
