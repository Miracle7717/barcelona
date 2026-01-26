import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Robert Lewandowski', club: 'Barcelona', position: 'Forward' },
    { id: 2, name: 'Pedri', club: 'Barcelona', position: 'Midfielder' },
    { id: 3, name: 'Marc-André ter Stegen', club: 'Barcelona', position: 'Goalkeeper' },
  ],
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
});

export default playersSlice.reducer;
