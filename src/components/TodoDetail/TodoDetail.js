import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTodo } from '../../redux/todoSlice';
import './TodoDetail.css';

const TodoDetail = ({ todoId }) => {
  const todos = useSelector((state) => state.todos.list);
  const selectedTodo = useSelector((state) => state.todos.selectedTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    const todo = todos.find(t => t.id === parseInt(todoId));
    if (todo) {
      dispatch(setSelectedTodo(todo));
    }
  }, [todoId, todos, dispatch]);

  if (!selectedTodo) return <p>Loading...</p>;

  return (
    <div className="todo-detail">
      <h2>Todo Detail</h2>
      <h3>{selectedTodo.title}</h3>
      <p>{selectedTodo.description}</p>
    </div>
  );
};

export default TodoDetail;