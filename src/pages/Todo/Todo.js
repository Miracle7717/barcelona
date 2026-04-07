import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from '../../redux/todoSlice';
import TodoList from '../../components/TodoList/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import './Todo.css';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Mock data
    const mockTodos = [
      { id: 1, title: 'Learn React', description: 'Study React hooks and components' },
      { id: 2, title: 'Build Todo App', description: 'Create a Todo application with CRUD operations' },
    ];
    dispatch(setTodos(mockTodos));
  }, [dispatch]);

  return (
    <div className="todo-page">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;