
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu, menuClasses } from "react-pro-sidebar";
import { 
  Dashboard as DashboardIcon,
  Pets as PetsIcon,
  Receipt as ReceiptIcon,
  Policy as PolicyIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Support as SupportIcon,
  ChatBubble as ChatIcon,
  QuestionAnswer as FAQIcon,
  ContactMail as ContactIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Insights as InsightsIcon,
  Assessment as ReportsIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import { IconButton, useTheme, useMediaQuery } from '@mui/material';

const CustomSidebar = ({ collapsed, setCollapsed }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavigate = (path) => {
    navigate(path);
    if (isMobile) {
      setCollapsed(true);
    }
  };

  return (
    <ProSidebar
      collapsed={collapsed}
      rootStyles={{
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        [`.${menuClasses.container}`]: {
          backgroundColor: "#1C3FEC", // Royal blue background
          color: "white",
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
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
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
        {!isMobile && (
          <IconButton onClick={toggleSidebar} style={{ color: "white", marginTop: "10px" }}>
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        )}
      </div>

      {/* Menu Items */}
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            backgroundColor: active ? "#3652E5" : "transparent",
            color: active ? "#FFD700" : "#FFFFFF", // White text, gold when active
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)", // More visible separator lines
            padding: "12px 20px",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: collapsed ? "15%" : "10%",
              width: collapsed ? "70%" : "80%",
              height: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
            "&:hover": {
              backgroundColor: "#4169E1",
              color: "#FFD700",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.1) inset"
            },
          }),
        }}
      >
        {/* Dashboard */}
        <MenuItem 
          icon={<DashboardIcon />} 
          onClick={() => handleNavigate('/dashboard')}
          active={location.pathname === '/dashboard' || location.pathname === '/'}
        >
          {!collapsed && "Dashboard"}
        </MenuItem>
        
        {/* Pets */}
        <MenuItem 
          icon={<PetsIcon />} 
          onClick={() => handleNavigate('/pets')}
          active={location.pathname === '/pets'}
        >
          {!collapsed && "Pets"}
        </MenuItem>
        
        {/* Claims */}
        <MenuItem 
          icon={<ReceiptIcon />}
          onClick={() => handleNavigate('/claims')}
          active={location.pathname === '/claims'}
        >
          {!collapsed && "Claims"}
        </MenuItem>
        
        {/* Policies */}
        <MenuItem 
          icon={<PolicyIcon />}
          onClick={() => handleNavigate('/policies')}
          active={location.pathname === '/policies'}
        >
          {!collapsed && "Policies"}
        </MenuItem>
        
        {/* Profile */}
        <MenuItem 
          icon={<PersonIcon />}
          onClick={() => handleNavigate('/profile')}
          active={location.pathname === '/profile'}
        >
          {!collapsed && "Profile"}
        </MenuItem>
        
        {/* Settings */}
        <MenuItem 
          icon={<SettingsIcon />}
          onClick={() => handleNavigate('/settings')}
          active={location.pathname === '/settings'}
        >
          {!collapsed && "Settings"}
        </MenuItem>
        
        {/* Support */}
        <SubMenu 
          label="Support" 
          icon={<SupportIcon />}
          active={location.pathname.includes('/support')}
          defaultOpen={location.pathname.includes('/support')}
          rootStyles={{
            ['& > ul']: {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <MenuItem 
            icon={<SupportIcon />}
            onClick={() => handleNavigate('/support')}
            active={location.pathname === '/support'}
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
          >
            Main Support
          </MenuItem>
          <MenuItem 
            icon={<ChatIcon />}
            onClick={() => handleNavigate('/support/chat')}
            active={location.pathname === '/support/chat'}
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
          >
            Chat
          </MenuItem>
          <MenuItem 
            icon={<FAQIcon />}
            onClick={() => handleNavigate('/support/faqs')}
            active={location.pathname === '/support/faqs'}
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
          >
            FAQs
          </MenuItem>
          <MenuItem 
            icon={<ContactIcon />}
            onClick={() => handleNavigate('/support/contact')}
            active={location.pathname === '/support/contact'}
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
          >
            Contact
          </MenuItem>
        </SubMenu>

        {/* Insights */}
        <SubMenu 
          label="Insights" 
          icon={<InsightsIcon />}
          active={location.pathname.includes('/insight')}
          defaultOpen={location.pathname.includes('/insight')}
          rootStyles={{
            ['& > ul']: {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <MenuItem 
            icon={<ReportsIcon />}
            onClick={() => handleNavigate('/insight/reports')}
            active={location.pathname === '/insight/reports'}
            style={{ 
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              position: "relative",
              paddingLeft: "35px"
            }}
          >
            Reports
          </MenuItem>
          <MenuItem 
            icon={<AnalyticsIcon />}
            onClick={() => handleNavigate('/insight/analytics')}
            active={location.pathname === '/insight/analytics'}
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
