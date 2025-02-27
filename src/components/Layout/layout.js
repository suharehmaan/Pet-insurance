import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import Header from './Header';
import CustomSidebar from '../sidebar/sideBar';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState(isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = collapsed ? "80px" : "250px";

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
          width: { xs: '100%', md: `calc(100% - ${mobileOpen ? sidebarWidth : "0px"})` },
          transition: "width 0.3s ease, margin-left 0.3s ease",
        }}
      >
        {/* Header */}
        <Header sidebarWidth={sidebarWidth} onMenuClick={toggleSidebar} />

        {/* Main Content */}
        <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;