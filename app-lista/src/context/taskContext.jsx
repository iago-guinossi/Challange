import React from "react";

const TaskContext = React.createContext()

function useTask() {
    const context = React.useContext(TaskContext)
    if (context === undefined) {
      throw new Error(`useTask must be used within a TaskProvider`)
    }
    return context
  }

function TaskProvider({children}){
    const [state, setState] = React.useState([])
    const value = [state, setState]
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export {useTask, TaskProvider}