import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.list = (action.payload || []).map(player => ({ ...player }));
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addPlayer: (state, action) => {
      state.list.push(action.payload);
    },
    updatePlayer: (state, action) => {
      const index = state.list.findIndex(player => player.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
    deletePlayer: (state, action) => {
      state.list = state.list.filter(player => player.id !== action.payload);
    },
  },
});

export const { setPlayers, setLoading, setError, addPlayer, updatePlayer, deletePlayer } = playersSlice.actions;
export default playersSlice.reducer;
