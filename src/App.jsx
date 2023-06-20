import React from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

export default function App() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <TodoForm />
      <TodoList />
    </div>
  );
}
