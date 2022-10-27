import React from "react";
import { useTask } from "../../context/taskContext";
import { useView } from "../../context/viewContext";
import './FooterTask.css'

export function FooterTask() {
  const [message, setMessage] = useTask();
  const [view, setView] = useView();
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
    <div className='foot'>
      {count} items left
      <div className='button'>
      <button className={view == 'all' ? 'blue' : null} onClick={() => setView("all")}>All</button>
      <button className={view == 'act' ? 'blue' : null} onClick={() => setView("act")}>Active</button>
      <button className={view == 'com' ? 'blue' : null} onClick={() => setView("com")}>Completed</button>
      </div>
      <button onClick={() => removeAllDone()}>Clear Completed</button>
    </div>
  );
}

