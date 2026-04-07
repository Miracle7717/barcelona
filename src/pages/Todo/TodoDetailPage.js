import React from 'react';
import { useParams } from 'react-router-dom';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import TodoForm from '../../components/TodoForm/TodoForm';
import './TodoDetailPage.css';

const TodoDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="todo-detail-page">
      <TodoDetail todoId={id} />
      <TodoForm todoId={parseInt(id)} />
    </div>
  );
};

export default TodoDetailPage;