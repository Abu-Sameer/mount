import React from 'react';
import TodoItems from './TodoItems';
import { useSelector } from 'react-redux';
import TodoComplete from './TodoComplete';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      {todos < 1 ? (
        <h1>Your List Is Empty...!</h1>
      ) : (
        <>
          <ul className="list-group mt-4">
            {todos.map((todo) => (
              <TodoItems
                key={todo.id}
                id={todo.id}
                todo={todo.title}
                complete={todo.complete}
              />
            ))}
          </ul>
          <TodoComplete />
        </>
      )}
    </>
  );
}
