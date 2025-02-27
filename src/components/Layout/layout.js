import React, { useState, useEffect } from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import MainDashboard from "../content/MainDashboard";
import PetsPage from "../pages/PetsPage";
import ClaimsPage from "../pages/ClaimsPage";
import PolicyPage from "../pages/PolicyPage";
import SupportPage from "../pages/SupportPage";
import SettingsPage from "../pages/SettingsPage";

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openSidebar, setOpenSidebar] = useState(!isMobile);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenSidebar(!isMobile);
  }, [isMobile]);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  const renderContent = () => {
    switch (pathname) {
      case "/dashboard":
        return <MainDashboard />;
      case "/pets":
        return <PetsPage />;
      case "/claims":
        return <ClaimsPage />;
      case "/policy":
        return <PolicyPage />;
      case "/support":
        return <SupportPage />;
      case "/settings":
        return <SettingsPage />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Header 
        openSidebar={openSidebar} 
        handleSidebarToggle={handleSidebarToggle} 
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${openSidebar ? 240 : 0}px)` },
          ml: { md: openSidebar ? "240px" : 0 },
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Box sx={{ mt: 8, mb: 2 }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;