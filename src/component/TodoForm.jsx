import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';

export default function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function onsubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue('');
  }
  return (
    <form onSubmit={onsubmit} className="form-control my-4 w-50">
      <h2 className="text-center mb-4">My Todo App</h2>
      <input
        type="text"
        className="form-control mb-2 me-ms-2"
        placeholder="Add Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
