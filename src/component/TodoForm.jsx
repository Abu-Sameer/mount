import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';

export default function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function onsubmit(e) {
    e.preventDefault();
    if (cansave) {
      dispatch(addTodo({ title: value }));
      setValue('');
    }
  }

  const cansave = [value].every(Boolean);
  return (
    <form onSubmit={onsubmit} className="form-control w-50 my-4">
      <h2 className="text-center mb-4">Task App</h2>
      <input
        type="text"
        className="form-control mb-2 me-ms-2"
        placeholder="Add Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!cansave} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
