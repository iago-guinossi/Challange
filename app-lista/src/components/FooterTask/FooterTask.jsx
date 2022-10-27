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
      <span>{count} items left</span>
      
      <div className='filter-actions'>
        <button className={`button ${view == 'all' ? 'blue' : ''}`} onClick={() => setView("all")}>All</button>
        <button className={`button ${view == 'act' ? 'blue' : ''}`} onClick={() => setView("act")}>Active</button>
        <button className={`button ${view == 'com' ? 'blue' : ''}`} onClick={() => setView("com")}>Completed</button>
      </div>

      <button className="button" onClick={() => removeAllDone()}>Clear Completed</button>
    </div>
  );
}

