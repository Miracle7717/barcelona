import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './playersSlice';
import newsReducer from './newsSlice';
import matchesReducer from './matchesSlice';
import standingsReducer from './standingsSlice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    news: newsReducer,
    matches: matchesReducer,
    standings: standingsReducer,
  },
});
