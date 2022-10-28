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

  const size = React.usewindow

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
      
      {/* {isMobbile ? <div className='filter-actions'>
        <button className={`butto ${view === 'all' ? 'blue' : ''}`} onClick={() => setView("all")}>All</button>
        <button className={`butto ${view === 'act' ? 'blue' : ''}`} onClick={() => setView("act")}>Active</button>
        <button className={`butto ${view === 'com' ? 'blue' : ''}`} onClick={() => setView("com")}>Completed</button>
      </div> : null} */}

      <button className="butto" onClick={() => removeAllDone()}>Clear Completed</button>
    </div>
  );
}

