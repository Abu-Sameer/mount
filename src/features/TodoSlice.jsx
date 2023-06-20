const { createSlice, nanoid } = require('@reduxjs/toolkit');

const TodoSlices = createSlice({
  name: 'todo',
  initialState: [
    { id: nanoid(), title: 'Todo1', complete: false },
    { id: nanoid(), title: 'Todo2', complete: true },
    { id: nanoid(), title: 'Todo3', complete: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        complete: false,
      };
      state.push(newTodo);
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].complete = action.payload.complete;
    },
    updateTodo(state, action) {
      const { id } = action.payload;
      const todos = state.filter((todo) => todo.id !== id);
      return [...todos, action.payload];
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, updateTodo } =
  TodoSlices.actions;
export default TodoSlices.reducer;
