import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoComplete() {
  const complete = useSelector((state) =>
    state.todos.filter((todo) => todo.complete === true)
  );
  const uncomplete = useSelector((state) => state.todos);

  return (
    <h4 className="mt-3">
      {complete.length === uncomplete.length
        ? 'All task completed...!'
        : `Total complete task: ${complete.length} out of ${uncomplete.length}`}
    </h4>
  );
}
