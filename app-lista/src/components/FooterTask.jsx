import React from "react";
import { useTask } from "../context/taskContext";
import { useView } from "../context/viewContext";
import styles from '../styles/FooterTask.module.css'

function FooterTask() {
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
    <div className={styles.foot}>
      {count} items left
      <div className={styles.button}>
      <button className={view == 'all' ? styles.blue : null} onClick={() => setView("all")}>All</button>
      <button className={view == 'act' ? styles.blue : null} onClick={() => setView("act")}>Active</button>
      <button className={view == 'com' ? styles.blue : null} onClick={() => setView("com")}>Completed</button>
      </div>
      <button onClick={() => removeAllDone()}>Clear Completed</button>
    </div>
  );
}
export { FooterTask };
