import React from "react";
import { useTask } from "../context/taskContext";

const [message, setMessage] = useTask();

function RenderTask() {
  const cheked = (id) => {
    const changeDone = message.map((message) => {
      if (message.id === id) {
        return { ...message, done: !message.done };
      }
      return message;
    });
    setMessage(changeDone);
  };

  return (
    <table>
      <tbody>
        {message.map((message) => {
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
        })}
      </tbody>
    </table>
  );
}
export { RenderTask };
