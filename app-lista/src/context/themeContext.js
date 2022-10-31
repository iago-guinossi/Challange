import React from "react";

const ThemeContext = React.createContext()

export function useTheme() {
    const context = React.useContext(ThemeContext)
    if (context === undefined) {
      throw new Error(`useTheme must be used within a ThemeProvider`)
    }
    return context
  }

export function ThemeProvider({children}){
    const [state, setState] = React.useState([])
    const value = [state, setState]
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}