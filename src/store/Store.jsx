import { configureStore } from '@reduxjs/toolkit';
import TodoSlices from '../features/TodoSlice';

const store = configureStore({
  reducer: {
    todos: TodoSlices,
  },
});

export default store;
