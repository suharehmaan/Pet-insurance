
import React, { useState, useEffect } from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetsIcon from "@mui/icons-material/Pets";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PolicyIcon from "@mui/icons-material/Policy";
import SupportIcon from "@mui/icons-material/Support";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";
// Import all page components
import MainDashboard from "../content/MainDashboard";
import PetsPage from "../pages/PetsPage";
import ClaimsPage from "../pages/ClaimsPage";
import PolicyPage from "../pages/PolicyPage";
import SupportPage from "../pages/SupportPage";
import SettingsPage from "../pages/SettingsPage";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  useEffect(() => {
    // Set collapsed state based on screen size
    setCollapsed(isMobile);
  }, [isMobile]);

  useEffect(() => {
    // Extract the current path from location
    const path = location.pathname.split("/")[1] || "dashboard";
    setActiveItem(path);
  }, [location]);

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return <MainDashboard />;
      case "pets":
        return <PetsPage />;
      case "claims":
        return <ClaimsPage />;
      case "policies":
        return <PolicyPage />;
      case "support":
        return <SupportPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <Box sx={{ 
        display: "flex", 
        height: "100%", 
        mt: 8, // Space for header
        width: "100%"
      }}>
        <Sidebar
          collapsed={collapsed}
          backgroundColor="#fff"
          style={{
            height: "calc(100% - 64px)",
            top: 64,
            position: "fixed",
            borderRight: "1px solid #eee",
          }}
        >
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center",
            my: 2
          }}>
            {!collapsed && (
              <Box
                component="img"
                src="/logo.webp"
                alt="Pet Insurance Logo"
                sx={{ 
                  width: 50,
                  height: 'auto'
                }}
              />
            )}
          </Box>
          <Menu>
            <MenuItem
              component={<Link to="/dashboard" />}
              active={activeItem === "dashboard"}
              icon={<DashboardIcon />}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              component={<Link to="/pets" />}
              active={activeItem === "pets"}
              icon={<PetsIcon />}
            >
              My Pets
            </MenuItem>
            <MenuItem
              component={<Link to="/claims" />}
              active={activeItem === "claims"}
              icon={<ReceiptIcon />}
            >
              Claims
            </MenuItem>
            <MenuItem
              component={<Link to="/policies" />}
              active={activeItem === "policies"}
              icon={<PolicyIcon />}
            >
              Policies
            </MenuItem>
            <MenuItem
              component={<Link to="/support" />}
              active={activeItem === "support"}
              icon={<SupportIcon />}
            >
              Support
            </MenuItem>
            <MenuItem
              component={<Link to="/settings" />}
              active={activeItem === "settings"}
              icon={<SettingsIcon />}
            >
              Settings
            </MenuItem>
          </Menu>
        </Sidebar>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: collapsed ? 7 : 20,
            mt: 0,
            transition: "margin 0.2s",
          }}
        >
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
