
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
  Analytics as AnalyticsIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { IconButton, useTheme, useMediaQuery, SwipeableDrawer, Box } from '@mui/material';

const CustomSidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
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
      setMobileOpen(false);
    }
  };

  const sidebarContent = (
    <>
      {/* Logo and Collapse Button */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          flexShrink: 0,
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          justifyContent: isMobile ? "space-between" : "center",
          alignItems: "center"
        }}
      >
        {collapsed && !isMobile ? (
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
          <>
            <img
              src="/logo.webp"
              alt="Logo"
              style={{
                width: isMobile ? "120px" : "140px",
                height: "auto",
                maxHeight: "60px",
                objectFit: "contain",
              }}
            />
            {isMobile && (
              <IconButton onClick={() => setMobileOpen(false)} style={{ color: "white" }}>
                <CloseIcon />
              </IconButton>
            )}
          </>
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
            backgroundColor: active ? "#27408B" : "transparent",
            color: active ? "#FFD700" : "#1E90FF", 
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)", 
            padding: "12px 20px",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: collapsed && !isMobile ? "15%" : "10%",
              width: collapsed && !isMobile ? "70%" : "80%",
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
        <MenuItem 
          icon={<DashboardIcon />} 
          onClick={() => handleNavigate('/dashboard')}
          active={location.pathname === '/dashboard' || location.pathname === '/'}
        >
          {(!collapsed || isMobile) && "Dashboard"}
        </MenuItem>
        
        {/* Pets */}
        <MenuItem 
          icon={<PetsIcon />} 
          onClick={() => handleNavigate('/pets')}
          active={location.pathname === '/pets'}
        >
          {(!collapsed || isMobile) && "Pets"}
        </MenuItem>
        
        {/* Claims */}
        <MenuItem 
          icon={<ReceiptIcon />}
          onClick={() => handleNavigate('/claims')}
          active={location.pathname === '/claims'}
        >
          {(!collapsed || isMobile) && "Claims"}
        </MenuItem>
        
        {/* Policies */}
        <MenuItem 
          icon={<PolicyIcon />}
          onClick={() => handleNavigate('/policies')}
          active={location.pathname === '/policies'}
        >
          {(!collapsed || isMobile) && "Policies"}
        </MenuItem>
        
        {/* Profile */}
        <MenuItem 
          icon={<PersonIcon />}
          onClick={() => handleNavigate('/profile')}
          active={location.pathname === '/profile'}
        >
          {(!collapsed || isMobile) && "Profile"}
        </MenuItem>
        
        {/* Settings */}
        <MenuItem 
          icon={<SettingsIcon />}
          onClick={() => handleNavigate('/settings')}
          active={location.pathname === '/settings'}
        >
          {(!collapsed || isMobile) && "Settings"}
        </MenuItem>
        
        {/* Support */}
        <SubMenu 
          label={(!collapsed || isMobile) ? "Support" : ""}
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
          label={(!collapsed || isMobile) ? "Insights" : ""}
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
    </>
  );

  return isMobile ? (
    <SwipeableDrawer
      anchor="left"
      open={mobileOpen}
      onOpen={() => setMobileOpen(true)}
      onClose={() => setMobileOpen(false)}
      swipeAreaWidth={30}
      hysteresis={0.3}
      disableBackdropTransition={false}
      ModalProps={{
        keepMounted: true, 
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: '280px',
          backgroundColor: "#1E3A8A",
          color: "white"
        },
      }}
    >
      {sidebarContent}
    </SwipeableDrawer>
  ) : (
    <ProSidebar
      collapsed={collapsed}
      rootStyles={{
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        [`.${menuClasses.container}`]: {
          backgroundColor: "#1E3A8A", 
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
      {sidebarContent}
    </ProSidebar>
  );
};

export default CustomSidebar;