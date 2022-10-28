import React from "react";
import { useTask } from "../../context/taskContext";
import { useView } from "../../context/viewContext";
import "./Task.css";

export function Task() {
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
      <div key={message.id} className="todo">
        <button
          type="checkbox"
          onClick={() => cheked(message.id)}
          className={`checkMark ${message.done ? "check" : ""}`}
        />
        <span className="nameTodo">{message.nameToDo}</span>
      </div>
    );
  }

  return (
    <div className="tabela">
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
