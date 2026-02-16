import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches: (state, action) => {
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

export const { setMatches, setLoading, setError } = matchesSlice.actions;
export default matchesSlice.reducer;
