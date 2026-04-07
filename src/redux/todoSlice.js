import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  selectedTodo: null,
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
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

export const { setTodos, addTodo, updateTodo, deleteTodo, setSelectedTodo, setLoading, setError } = todoSlice.actions;
export default todoSlice.reducer;