import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    // login logic here
    setIsAuthenticated(true)
  }

  const logout = () => {
    // logout logic here
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
