import React from "react";

const ViewContext = React.createContext()

function useView() {
    const context = React.useContext(ViewContext)
    if (context === undefined) {
      throw new Error(`useView must be used within a ViewProvider`)
    }
    return context
  }

function ViewProvider({children}){
    const [state, setState] = React.useState('all')
    const value = [state, setState]
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
}

export {useView, ViewProvider}