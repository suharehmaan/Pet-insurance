
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Collapse, 
  Box, 
  IconButton, 
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
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
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Insights as InsightsIcon,
  Assessment as ReportsIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';

const CustomSidebar = ({ collapsed, setCollapsed }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  
  // State for nested menu items
  const [open, setOpen] = useState({
    support: location.pathname.includes('/support'),
    insights: location.pathname.includes('/insight')
  });

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleNested = (section) => {
    setOpen({
      ...open,
      [section]: !open[section]
    });
  };

  const handleNavigate = (path) => {
    navigate(path);
    if (isMobile) {
      setCollapsed(true);
    }
  };

  const mainMenuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Pets', icon: <PetsIcon />, path: '/pets' },
    { text: 'Claims', icon: <ReceiptIcon />, path: '/claims' },
    { text: 'Policies', icon: <PolicyIcon />, path: '/policies' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  const drawerWidth = collapsed ? 64 : 240;

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={!isMobile || !collapsed}
      onClose={isMobile ? () => setCollapsed(true) : undefined}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: collapsed ? 'center' : 'flex-end',
        padding: 1
      }}>
        {!isMobile && (
          <IconButton onClick={handleToggleCollapse}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Box>
      <Divider />
      
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {mainMenuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              onClick={() => handleNavigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: collapsed ? 'center' : 'initial',
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 3, justifyContent: 'center' }}>
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
          ))}

          {/* Support Submenu */}
          <ListItem 
            button 
            onClick={() => handleToggleNested('support')}
            selected={location.pathname.includes('/support') && location.pathname === '/support'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: collapsed ? 'center' : 'initial',
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 3, justifyContent: 'center' }}>
              <SupportIcon />
            </ListItemIcon>
            {!collapsed && (
              <>
                <ListItemText primary="Support" />
                {open.support ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </>
            )}
          </ListItem>

          <Collapse in={open.support && !collapsed} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem 
                button 
                onClick={() => handleNavigate('/support')}
                selected={location.pathname === '/support'}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <SupportIcon />
                </ListItemIcon>
                <ListItemText primary="Main Support" />
              </ListItem>
              <ListItem 
                button 
                onClick={() => handleNavigate('/support/chat')}
                selected={location.pathname === '/support/chat'}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="Chat" />
              </ListItem>
              <ListItem 
                button 
                onClick={() => handleNavigate('/support/faqs')}
                selected={location.pathname === '/support/faqs'}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <FAQIcon />
                </ListItemIcon>
                <ListItemText primary="FAQs" />
              </ListItem>
              <ListItem 
                button 
                onClick={() => handleNavigate('/support/contact')}
                selected={location.pathname === '/support/contact'}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <ContactIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Collapse>

          {/* Insights Submenu */}
          <ListItem 
            button 
            onClick={() => handleToggleNested('insights')}
            selected={location.pathname.includes('/insight') && location.pathname === '/insight'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: collapsed ? 'center' : 'initial',
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 3, justifyContent: 'center' }}>
              <InsightsIcon />
            </ListItemIcon>
            {!collapsed && (
              <>
                <ListItemText primary="Insights" />
                {open.insights ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </>
            )}
          </ListItem>

          <Collapse in={open.insights && !collapsed} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem 
                button 
                onClick={() => handleNavigate('/insight/reports')}
                selected={location.pathname === '/insight/reports'}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <ReportsIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
              <ListItem 
                button 
                onClick={() => handleNavigate('/insight/analytics')}
                selected={location.pathname === '/insight/analytics'}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default CustomSidebar;
