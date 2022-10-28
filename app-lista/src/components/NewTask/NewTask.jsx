import './NewTask.css'
import React from "react";
import { useTask } from "../../context/taskContext";

export function NewTask() {
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
        <button type="submit" className='butSub1'/>
      ) : (
        <button type="submit" className='butSub' disabled={true} />
      )}
      <input
      className='newtodo'
        value={name}
        onChange={handleChange}
        id="name"
        placeholder="New Task..."
      />
    </form>
  );
}