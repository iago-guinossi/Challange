import React from "react";

const SizeContext = React.createContext()

export function useSize() {
    const context = React.useContext(SizeContext)
    if (context === undefined) {
      throw new Error(`useSize must be used within a SizeProvider`)
    }
    return context
  }

export function SizeProvider({children}){
    const [state, setState] = React.useState([])
    const value = [state, setState]
    return <SizeContext.Provider value={value}>{children}</SizeContext.Provider>
}