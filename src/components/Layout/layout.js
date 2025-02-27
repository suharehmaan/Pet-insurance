import React, { useState, useEffect } from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./Header";
// Import all page components
import MainDashboard from "../content/MainDashboard";
import PetsPage from "../pages/PetsPage";
import ClaimsPage from "../pages/ClaimsPage";
import PolicyPage from "../pages/PolicyPage";
import SupportPage from "../pages/SupportPage";
import SettingsPage from "../pages/SettingsPage";

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState(isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = collapsed ? "80px" : "250px";
  const location = useLocation();

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

  // Function to render the appropriate content based on the current route
  const renderContent = () => {
    const path = location.pathname;

    if (path === '/dashboard' || path === '/') {
      return <MainDashboard />;
    } else if (path.startsWith('/support')) {
      return <SupportPage />;
    } else if (path === '/pets') {
      return <PetsPage />;
    } else if (path === '/claims') {
      return <ClaimsPage />;
    } else if (path === '/policies') {
      return <PolicyPage />;
    } else if (path === '/profile') {
      return <div>Profile Page</div>; // Placeholder, needs a ProfilePage component
    } else if (path === '/settings') {
      return <SettingsPage />;
    } else if (path === '/search') {
      return <div>Search Results</div>; // Placeholder, needs a SearchResults component
    } else {
      return <div>Page Not Found</div>; // Placeholder, consider a dedicated 404 page
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
        {/* CustomSidebar component would go here */}
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