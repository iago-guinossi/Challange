import React from "react";
import { useTask } from "../context/taskContext";
import { useView } from "../context/viewContext";

function RenderFooterTask() {
  const [message, setMessage] = useTask();
  const [, setView] = useView();

  const [count, setCount] = React.useState(0);

  const removeAllDone = () => {
    setMessage(message.filter((message) => !message.done));
  };

  React.useEffect(() => {
    setCount(0);
    message.map((message) => {
      if (!message.done) {
        return setCount((c) => c + 1);
      }
      return {};
    });
  }, [message]);
  return (
    <div>
      {count} items left
      <button onClick={() => setView("all")}>All</button>
      <button onClick={() => setView("act")}>Active</button>
      <button onClick={() => setView("com")}>Completed</button>
      <button onClick={() => removeAllDone()}>Clear Completed</button>
    </div>
  );
}
export { RenderFooterTask };
