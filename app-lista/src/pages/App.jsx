// import '../styles/globals.css';
import React from "react";
import { TaskProvider } from "../context/taskContext";
import { ViewProvider } from "../context/viewContext";
import { NewTask } from "../components/NewTask";
import { RenderTask } from "../components/RenderTask";
import { RenderFooterTask } from "../components/RenderFooterTask";
function App() {
  return (
    <TaskProvider>
      <NewTask />
      <ViewProvider>
        <RenderTask />
        <RenderFooterTask />
      </ViewProvider>
    </TaskProvider>
  );
}

export default App;
