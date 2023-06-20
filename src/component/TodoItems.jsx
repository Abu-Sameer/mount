import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete, updateTodo } from '../features/TodoSlice';

export default function TodoItems({ id, todo, complete }) {
  const [value, setValue] = useState(todo);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  function handleComplete() {
    dispatch(toggleComplete({ id: id, complete: !complete }));
  }

  function editTodo(e) {
    e.preventDefault();
    if (cansave) {
      dispatch(updateTodo({ value, id, complete }));
      setEdit(false);
    }
    if (value === '') {
      dispatch(removeTodo(id));
    }
  }

  const cansave = [value].every(Boolean);

  return (
    <li
      className={`list-group-item py-0 ${
        complete && 'list-group-item-success'
      }`}
    >
      {edit ? (
        <form onSubmit={editTodo} className="d-flex align-items-center py-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo..."
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            disabled={!cansave}
            onClick={editTodo}
            className="btn btn-primary ms-2"
          >
            Save
          </button>
        </form>
      ) : (
        <div className="my-3 d-flex justify-content-between">
          <span className="me-5">
            <input
              type="checkbox"
              className="me-3"
              checked={complete}
              onChange={handleComplete}
            />
            {value}
          </span>
          <span>
            <button
              onClick={() => dispatch(removeTodo(id))}
              className="btn btn-danger me-2"
            >
              Delete
            </button>
            <button onClick={() => setEdit(true)} className="btn btn-info">
              Edit
            </button>
          </span>
        </div>
      )}
    </li>
  );
}
