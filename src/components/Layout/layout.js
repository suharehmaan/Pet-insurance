
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
import ProfilePage from "../pages/ProfilePage";

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState(isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = collapsed ? "80px" : "250px";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

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
      return <ProfilePage />;
    } else if (path === '/settings') {
      return <SettingsPage />;
    } else if (path === '/search') {
      return <div>Search Results</div>;
    } else if (path.startsWith('/insight')) {
      return <SettingsPage />;
    } else {
      return <div>Page Not Found</div>;
    }
  };

  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: theme.palette.mode === 'dark' ? 'background.default' : '#f5f7fa'
    }}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
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
          <Header sidebarWidth={sidebarWidth} onMenuClick={toggleSidebar} />
          
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
