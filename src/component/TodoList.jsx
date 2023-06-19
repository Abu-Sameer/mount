import React from 'react';
import TodoItems from './TodoItems';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  // const orderedTodo = todos
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <ul className="list-group w-50">
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          id={todo.id}
          todo={todo.title}
          complete={todo.complete}
        />
      ))}
    </ul>
  );
}
