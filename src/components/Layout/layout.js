
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
    } else if (path.startsWith('/insight')) {
      return <div>Insights Page</div>; // Placeholder for Insights
    } else {
      return <div>Page Not Found</div>; // Placeholder, consider a dedicated 404 page
    }
  };

  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden"
    }}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <Box 
          sx={{ 
            width: { xs: mobileOpen ? sidebarWidth : '0px', md: sidebarWidth }, 
            flexShrink: 0,
            transition: "width 0.3s ease",
            height: "100vh",
            position: "fixed",
            zIndex: theme.zIndex.drawer + 1
          }}
        >
          <CustomSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </Box>

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { xs: '100%', md: `calc(100% - ${sidebarWidth})` },
            marginLeft: { xs: 0, md: sidebarWidth },
            transition: "margin-left 0.3s ease, width 0.3s ease",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "auto"
          }}
        >
          {/* Header - now positioned at the top of the main content area */}
          <Header sidebarWidth={sidebarWidth} onMenuClick={toggleSidebar} />
          
          {/* Content Area */}
          <Box sx={{ 
            p: { xs: 1, sm: 2, md: 3 },
            flexGrow: 1,
            overflowY: "auto"
          }}>
            {renderContent()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
