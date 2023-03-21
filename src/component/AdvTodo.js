<<<<<<< HEAD
import React from 'react';

export default function AdvTodo(props) {
  return (
    <div className={props.show ? 'titles' : 'title'}>
      <h3>{props.text}</h3>
      <div className="actions">
        <button
          className={props.show ? 'del' : 'del-btn'}
          onClick={props.deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
=======
import React from 'react';

export default function AdvTodo(props) {
  return (
    <div className={props.show ? 'titles' : 'title'}>
      <h3>{props.text}</h3>
      <div className="actions">
        <button
          className={props.show ? 'del' : 'del-btn'}
          onClick={props.deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
>>>>>>> e72b1e7 (Advance todo App)
