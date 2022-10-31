import React from "react";
import { ThemeProvider } from "../context/themeContext";
import { TaskProvider } from "../context/taskContext";
import { ViewProvider } from "../context/viewContext";
import { SizeProvider } from "../context/sizeContext";
import { Header } from "../components/Header/Header";
import { NewTask } from "../components/NewTask";
import { Task } from "../components/Task";
import { FooterTask } from "../components/FooterTask/FooterTask";

function App() {
  return (
    <ThemeProvider>
    <SizeProvider>
    <div className="container">
    <TaskProvider>
      <Header/>
      <NewTask />
      <ViewProvider>
        <Task />
        <FooterTask />
      </ViewProvider>
    </TaskProvider>
    </div>
    </SizeProvider>
    </ThemeProvider>
  );
}

export default App;
