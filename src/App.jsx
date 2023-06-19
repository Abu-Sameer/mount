import React from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import TodoComplete from './component/TodoComplete';

export default function App() {
  return (
    <div className="container">
      <TodoForm />
      <TodoList />
      <TodoComplete />
    </div>
  );
}
