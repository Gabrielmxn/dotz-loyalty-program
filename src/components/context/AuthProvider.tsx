import { createContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router';
import { queryClient } from '../../lib/react-query';

export interface AuthContextProps {
  isAuthenticated: boolean
  logout: () => void
}
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const route = useLocation()

  useEffect(() => {
    const userid = localStorage.getItem('userId');

    if (userid) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      window.location.href = '/login'
    }
  }, [route.pathname]);



  function logout() {
    localStorage.removeItem('userId');
    queryClient.clear()
    setIsAuthenticated(false);
    window.location.href = "/login"
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );

}