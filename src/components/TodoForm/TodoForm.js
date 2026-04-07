import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../redux/todoSlice';
import './TodoForm.css';

const TodoForm = ({ todoId }) => {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const todo = todos.find(t => t.id === todoId);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(updateTodo({ id: todo.id, title, description }));
    } else {
      const newTodo = {
        id: Date.now(),
        title,
        description,
      };
      dispatch(addTodo(newTodo));
    }
    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-form">
      <h2>{todo ? 'Update Todo' : 'Add Todo'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{todo ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default TodoForm;