import React from "react";
import { useTask } from "../context/taskContext";
import { useView } from "../context/viewContext";

function RenderTask() {
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
      <tr key={message.id}>
        <td>
          <input
            type="checkbox"
            defaultChecked={message.done}
            onClick={() => cheked(message.id)}
          />
        </td>
        <td>{message.nameToDo}</td>
      </tr>
    );
  }

  return (
    <table>
      <tbody>
        {message.map((message) => {
          if (view === "all") {
            return renderAllTask(message);
          } else if (view === "act") {
            return !message.done ? renderAllTask(message) : null;
          } else {
            return message.done ? renderAllTask(message) : null;
          }
        })}
      </tbody>
    </table>
  );
}
export { RenderTask };
