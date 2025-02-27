
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Typography } from "@mui/material";
import Layout from "./components/Layout/layout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/content/dashboard";
import PetsPage from "./components/pages/PetsPage";
import ClaimsPage from "./components/pages/ClaimsPage";
import PolicyPage from "./components/pages/PolicyPage";
import SettingsPage from "./components/pages/SettingsPage";
import SupportPage from "./components/pages/SupportPage";
import MainDashboard from "./components/content/MainDashboard"; 
import SearchResults from "./components/search/SearchResults";
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
                <Layout>
                  <MainDashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout>
                  <MainDashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/pets" element={
              <ProtectedRoute>
                <Layout>
                  <PetsPage />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/claims" element={
              <ProtectedRoute>
                <Layout>
                  <ClaimsPage />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/policies" element={
              <ProtectedRoute>
                <Layout>
                  <PolicyPage />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Layout>
                  <PetsPage />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout>
                  <SettingsPage />
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Support routes with nested paths */}
            <Route path="/support" element={
              <ProtectedRoute>
                <Layout>
                  <SupportPage />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/support/chat" element={
              <ProtectedRoute>
                <Layout>
                  <SupportPage />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/support/faqs" element={
              <ProtectedRoute>
                <Layout>
                  <SupportPage />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/support/contact" element={
              <ProtectedRoute>
                <Layout>
                  <SupportPage />
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Search route */}
            <Route path="/search" element={
              <ProtectedRoute>
                <Layout>
                  <SearchResults />
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Insight routes */}
            <Route path="/insight/reports" element={
              <ProtectedRoute>
                <Layout>
                  <Typography variant="h4" sx={{ p: 3 }}>Reports Dashboard</Typography>
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/insight/analytics" element={
              <ProtectedRoute>
                <Layout>
                  <Typography variant="h4" sx={{ p: 3 }}>Analytics Dashboard</Typography>
                </Layout>
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
