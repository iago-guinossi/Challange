import React from "react";
import { useTask } from "./context/taskContext";

function NewTask() {
  const [message, setMessage] = useTask();
  const newMessage = (name) => {
    setMessage([
      ...message,
      { id: Math.random(), nameToDo: name, done: false },
    ]);
  };

  const [name, setName] = React.useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    newMessage(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {name ? (
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </button>
      ) : (
        <input type="checkbox" disabled={true} />
      )}
      <input
        value={name}
        onChange={handleChange}
        id="name"
        placeholder="New Task..."
      />
    </form>
  );
}

export { NewTask };
