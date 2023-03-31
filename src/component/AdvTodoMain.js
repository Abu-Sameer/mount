import React from 'react';
import AdvTodo from './AdvTodo';
import './AdvTodo.css';
import AdvTodoDelete from './AdvTodoDelete';

export default function AdvTodoMain() {
  const [show, setshow] = React.useState(false);
  function deleteHandler() {
    setshow(true);
  }
  return (
    <div className={show ? 'MContainer' : 'container'}>
      <div>
        <h2>TODOS</h2>
        <div>
          <AdvTodo text="React" deleteHandler={deleteHandler} show={show} />
          <AdvTodo text="Angular" deleteHandler={deleteHandler} show={show} />
          <AdvTodo text="Python" deleteHandler={deleteHandler} show={show} />
        </div>
      </div>
      {show && <AdvTodoDelete setshow={setshow} />}
    </div>
  );
}
