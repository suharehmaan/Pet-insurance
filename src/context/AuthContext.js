
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Mock API call and authentication
      setLoading(true);
      
      // For demo, we'll just simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would validate credentials with an API
      if (email === 'demo@example.com' && password === 'password') {
        const mockUser = {
          id: '12345',
          name: 'Demo User',
          email: 'demo@example.com',
          role: 'customer',
          avatar: 'https://i.pravatar.cc/150?img=32'
        };
        
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Invalid email or password'
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Authentication failed'
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock registration success
      const mockUser = {
        id: Math.random().toString(36).substring(2, 10),
        name: name,
        email: email,
        role: 'customer',
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
      };
      
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
