import React from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu, menuClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { 
  Dashboard, 
  TableChart, 
  Insights, 
  Policy, 
  ChevronLeft, 
  ChevronRight,
  Person,
  Settings,
  Help,
  Chat,
  ContactSupport,
  QuestionAnswer
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CustomSidebar = ({ collapsed, toggleSidebar }) => {
  return (
    <ProSidebar
      collapsed={collapsed}
      rootStyles={{
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        [`.${menuClasses.container}`]: {
          backgroundColor: "#1E3A8A", // Dark blue background
          color: "black",
          height: "100%",
          width: collapsed ? "80px" : "250px",
          position: "fixed",
          top: 0,
          left: 0,
          transition: "width 0.3s ease",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          zIndex: 1100,
        },
      }}
    >
      {/* Logo and Collapse Button */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          flexShrink: 0,
          borderBottom: "1px solid white",
        }}
      >
        {collapsed ? (
          <img
            src="/logo.webp"
            alt="Logo"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain",
            }}
          />
        ) : (
          <img
            src="/logo.webp"
            alt="Logo"
            style={{
              width: "140px",
              height: "auto",
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
        )}
        <IconButton onClick={toggleSidebar} style={{ color: "white", marginTop: "10px" }}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>

      {/* Menu Items */}
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            backgroundColor: active ? "#27408B" : "transparent",
            color: active ? "#FFD700" : "#1E90FF", // Blue text, yellow when active
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // More visible separator lines
            padding: "12px 20px",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: collapsed ? "15%" : "10%",
              width: collapsed ? "70%" : "80%",
              height: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover": {
              backgroundColor: "#4169e1",
              color: "#FFD700",
            },
          }),
        }}
      >
        {/* Dashboard */}
        <MenuItem component={<Link to="/dashboard" />} icon={<Dashboard />}>
          {!collapsed && "Dashboard"}
        </MenuItem>

        {/* Policies */}
        <MenuItem component={<Link to="/policies" />} icon={<Policy />}>
          {!collapsed && "Policies"}
        </MenuItem>

        {/* Claims */}
        <MenuItem component={<Link to="/claims" />} icon={<TableChart />}>
          {!collapsed && "Claims"}
        </MenuItem>

        {/* Profile */}
        <MenuItem component={<Link to="/profile" />} icon={<Person />}>
          {!collapsed && "Profile"}
        </MenuItem>

        {/* Settings */}
        <MenuItem component={<Link to="/settings" />} icon={<Settings />}>
          {!collapsed && "Settings"}
        </MenuItem>

        {/* Support */}
        <SubMenu 
          label="Support" 
          icon={<Help />}
          rootStyles={{
            '& > ul': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <MenuItem 
            component={<Link to="/support/chat" />} 
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
            icon={<Chat />}
          >
            Live Chat
          </MenuItem>
          <MenuItem 
            component={<Link to="/support/faqs" />} 
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
            icon={<QuestionAnswer />}
          >
            FAQs
          </MenuItem>
          <MenuItem 
            component={<Link to="/support/contact" />} 
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
            icon={<ContactSupport />}
          >
            Contact Us
          </MenuItem>
        </SubMenu>

        {/* Insights - Keep if you still want it */}
        <SubMenu 
          label="Insights" 
          icon={<Insights />}
          rootStyles={{
            '& > ul': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <MenuItem 
            component={<Link to="/insight/reports" />} 
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
          >
            Reports
          </MenuItem>
          <MenuItem 
            component={<Link to="/insight/analytics" />} 
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
          >
            Analytics
          </MenuItem>
        </SubMenu>
      </Menu>

      {/* Spacer to ensure sidebar fills height */}
      <div style={{ flexGrow: 1 }}></div>
    </ProSidebar>
  );
};

export default CustomSidebar;