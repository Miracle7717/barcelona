import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todoSlice';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.list);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <a href={`/todo/${todo.id}`}>Detail</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;