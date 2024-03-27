import { createContext, useContext, useState, useEffect } from 'react'
import { cookies } from '../Js/Cookie.js'

export const AuthProviderContext = createContext()

export const useAuthProviderContext = () => {
  const context = useContext(AuthProviderContext)
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un authProvider")
  }
  return context
}


function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    cookies(setIsAuthenticated)
  }, [])

  return (
    <AuthProviderContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthProviderContext.Provider>
  )
}

export default AuthProvider
