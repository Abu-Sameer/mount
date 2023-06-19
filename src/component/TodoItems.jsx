import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../features/TodoSlice';

export default function TodoItems({ id, todo, complete }) {
  const dispatch = useDispatch();
  function handleComplete() {
    dispatch(toggleComplete({ id: id, complete: !complete }));
  }
  return (
    <li
      className={`list-group-item py-0 ${
        complete && 'list-group-item-success'
      }`}
    >
      <div className="my-3 d-flex justify-content-between">
        <span>
          <input
            type="checkbox"
            className="me-3"
            checked={complete}
            onChange={handleComplete}
          />
          {todo}
        </span>
        <button
          onClick={() => dispatch(removeTodo(id))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
