
import React, { useState, useEffect } from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import CustomSidebar from "../sidebar/sideBar";
import MainDashboard from "../content/MainDashboard";
import PetsPage from "../pages/PetsPage";
import ClaimsPage from "../pages/ClaimsPage";
import PolicyPage from "../pages/PolicyPage";
import SettingsPage from "../pages/SettingsPage";
import SupportPage from "../pages/SupportPage";
import Dashboard from "../content/dashboard";

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState(isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = collapsed ? "80px" : "250px";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-collapse sidebar on mobile
    setCollapsed(isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  // Render content based on current path
  const renderContent = () => {
    const path = location.pathname;
    
    if (path === '/' || path === '/dashboard') {
      return <MainDashboard />;
    } else if (path === '/pets') {
      return <PetsPage />;
    } else if (path === '/claims') {
      return <ClaimsPage />;
    } else if (path === '/policies') {
      return <PolicyPage />;
    } else if (path === '/settings') {
      return <SettingsPage />;
    } else if (path.includes('/support')) {
      return <SupportPage />;
    } else if (path.includes('/profile')) {
      return <PetsPage />; // Using PetsPage for now as per the App.js route
    } else if (path.includes('/insight')) {
      return <Dashboard />; // Using Dashboard for Insights
    } else {
      return <MainDashboard />; // Default fallback
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Sidebar - Hidden by default on mobile, shown when toggled */}
      <Box 
        sx={{ 
          width: { xs: '0px', md: sidebarWidth }, 
          flexShrink: 0,
          transition: "width 0.3s ease",
          position: { xs: 'fixed', md: 'static' },
          zIndex: theme.zIndex.drawer + 1,
          height: '100%',
          display: { xs: mobileOpen ? 'block' : 'none', md: 'block' }
        }}
      >
        <CustomSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Box>

      {/* Header and Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: `calc(100% - ${sidebarWidth})` },
          transition: "width 0.3s ease, margin-left 0.3s ease",
        }}
      >
        {/* Header */}
        <Header sidebarWidth={sidebarWidth} onMenuClick={toggleSidebar} />

        {/* Main Content */}
        <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
