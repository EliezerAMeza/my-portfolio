import React from "react";

function Toast({ _state, _title }) {
  if (_state === false) return <div></div>;

  return (
    <div className="toast">
      <h5 className="toast__title">{_title}</h5>
    </div>
  );
}

export default Toast;
