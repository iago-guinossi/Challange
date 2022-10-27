import React from "react";
import { useTask } from "../context/taskContext";
import { useView } from "../context/viewContext";
import styles from '../styles/Task.module.css'

function Task() {
  const [message, setMessage] = useTask();
  const [view] = useView();
  const cheked = (id) => {
    const changeDone = message.map((message) => {
      if (message.id === id) {
        return { ...message, done: !message.done };
      }
      return message;
    });
    setMessage(changeDone);
  };
  function renderAllTask(message) {
    return (
      <div key={message.id} className={styles.todoo}>
          <input
            type="checkbox"
            defaultChecked={message.done}
            onClick={() => cheked(message.id)}
            className={styles.butCheck}
          /><span className={styles.checkMark}></span>{message.nameToDo}
      </div>
    );
  }

  return (
    <div className={styles.tabela}>
        {message.map((message) => {
          if (view === "all") {
            return renderAllTask(message);
          } else if (view === "act") {
            return !message.done ? renderAllTask(message) : null;
          } else {
            return message.done ? renderAllTask(message) : null;
          }
        })}
    </div>
  );
}
export { Task };
