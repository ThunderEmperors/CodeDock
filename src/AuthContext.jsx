import { createContext, useContext, useState, useEffect } from 'react';
import auth from './components/app/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    return await auth.login(email, password);
  };

  const logout = async () => {
    await auth.logout();
    setUser(null);
  };

  const register = async (userData) => {
    console.log(userData);
    return await auth.register(userData);
  }

  const value = {
    user,
    loading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
