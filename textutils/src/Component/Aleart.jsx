import React from "react";

function Aleart(props) {
    console.log(props);
    return (

    props.alert &&
    <div>
      <div class={`alert alert-${props.aleart.type} alert-dismissible fade show`} role='alert'>
        <strong>{props.aleart.type}</strong>{props.aleart.message}
        <button
          type='button'
          class='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'></button>
      </div>
    </div>
  );
}

export default Aleart;
