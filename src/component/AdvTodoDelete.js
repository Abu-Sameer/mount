<<<<<<< HEAD
import React from 'react';

export default function AdvTodoDelete(props) {
  return (
    <div className="confirm-card">
      <p>Are you sure ?</p>
      <div className="confirm-action">
        <button className="cancle" onClick={() => props.setshow(false)}>
          Cancle
        </button>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
}
=======
import React from 'react';

export default function AdvTodoDelete(props) {
  return (
    <div className="confirm-card">
      <p>Are you sure ?</p>
      <div className="confirm-action">
        <button className="cancle" onClick={() => props.setshow(false)}>
          Cancle
        </button>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
}
>>>>>>> e72b1e7 (Advance todo App)
