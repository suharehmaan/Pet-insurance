import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  InputBase,
  alpha,
  styled,
  Box,
  Tooltip,
  Badge,
  Switch,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Person as ProfileIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useThemeContext } from "../../context/ThemeContext";
import "./header.css";

// Styled search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ sidebarWidth, onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme(); // Added useTheme hook

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate('/login');
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center' }}>
        <Avatar src={user?.avatar} sx={{ mr: 1 }}>
          {user?.name?.charAt(0) || 'P'}
        </Avatar>
        <Box>
          <Typography variant="subtitle1">{user?.name || 'User'}</Typography>
          <Typography variant="body2" color="textSecondary">{user?.email || ''}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
      <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>Profile</MenuItem>
      <MenuItem onClick={() => { handleMenuClose(); navigate('/settings'); }}>Settings</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        width: "100%",
        marginLeft: 0,
        transition: "margin-left 0.3s, width 0.3s",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      className="header"
    >
      <Toolbar>
        {/* Sidebar Toggle Button */}
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

        {/* Spacer to maintain layout after removing logo and title */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Search Bar */}
        <Tooltip title="Search policies and claims">
          <Search
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                navigate(`/search?q=${searchQuery}`);
              }
            }}
            sx={{
              position: "relative",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              marginRight: theme.spacing(2),
              marginLeft: 0,
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search policies..."
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
        </Tooltip>


        {/* Dark Mode Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
          <Tooltip title="Toggle Dark/Light Mode">
            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              size="large"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* User Profile and Notifications */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Tooltip title="Notifications">
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Profile">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                src={user?.avatar}
                sx={{ width: 32, height: 32 }}
              >
                {user?.name?.charAt(0) || 'P'}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        {renderMenu}
      </Toolbar>
    </AppBar>
  );
};

export default Header;