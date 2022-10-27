// import '../styles/globals.css';
import React from "react";
import { TaskProvider } from "../context/taskContext";
import { ViewProvider } from "../context/viewContext";
import { NewTask } from "../components/NewTask";
import { Task } from "../components/Task";
import { FooterTask } from "../components/FooterTask/FooterTask";

function App() {
  return (
    <TaskProvider>
      <NewTask />
      <ViewProvider className='box'>
        <Task />
        <FooterTask />
      </ViewProvider>
    </TaskProvider>
  );
}

export default App;
