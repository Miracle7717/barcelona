import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './playersSlice';
import newsReducer from './newsSlice';
import matchesReducer from './matchesSlice';
import standingsReducer from './standingsSlice';
import authReducer from './authSlice';
import todoReducer from './todoSlice';
import authMiddleware from './authMiddleware';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    news: newsReducer,
    matches: matchesReducer,
    standings: standingsReducer,
    auth: authReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
