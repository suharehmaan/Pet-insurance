
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout/layout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Main application routes (protected) */}
            <Route path="/" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/pets" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/claims" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/policies" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            
            {/* Support routes with nested paths */}
            <Route path="/support" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/support/chat" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/support/faqs" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/support/contact" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            
            {/* Search route */}
            <Route path="/search" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            
            {/* Insight routes */}
            <Route path="/insight/reports" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            <Route path="/insight/analytics" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            } />
            
            {/* Redirect any unknown routes to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
