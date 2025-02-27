
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tab,
  Tabs
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaymentIcon from '@mui/icons-material/Payment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import EmailIcon from '@mui/icons-material/Email';

const SettingsPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    pushNotifications: true,
    marketingEmails: false,
  });
  
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiry: '05/25',
      isPrimary: true
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '5555',
      expiry: '08/24',
      isPrimary: false
    }
  ]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationChange = (name) => (event) => {
    setNotifications({
      ...notifications,
      [name]: event.target.checked
    });
  };

  const handleSetPrimaryPayment = (id) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isPrimary: method.id === id
    })));
  };

  const renderTabContent = () => {
    switch(tabValue) {
      case 0: // Profile
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ width: 100, height: 100, mb: 2, bgcolor: '#1E3A8A' }} 
                    alt={`${profileData.firstName} ${profileData.lastName}`}
                  >
                    {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
                  </Avatar>
                  <Typography variant="h6">
                    {profileData.firstName} {profileData.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {profileData.email}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    size="small" 
                    startIcon={<EditIcon />}
                    sx={{ mt: 2 }}
                  >
                    Change Photo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Personal Information</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      margin="normal"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                
                <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>Address</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      name="address"
                      value={profileData.address}
                      onChange={handleProfileChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={profileData.city}
                      onChange={handleProfileChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="State"
                      name="state"
                      value={profileData.state}
                      onChange={handleProfileChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="ZIP Code"
                      name="zip"
                      value={profileData.zip}
                      onChange={handleProfileChange}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  <Button variant="outlined" sx={{ mr: 1 }}>
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      backgroundColor: '#1E3A8A',
                      '&:hover': { backgroundColor: '#152C6B' }
                    }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );
        
      case 1: // Security
        return (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Password</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type="password"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  type="password"
                  margin="normal"
                />
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>Two-Factor Authentication</Typography>
            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Enable two-factor authentication"
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Adding an extra layer of security will help protect your account.
              </Typography>
            </Box>
            
            <Button 
              variant="contained" 
              sx={{ 
                mt: 2,
                backgroundColor: '#1E3A8A',
                '&:hover': { backgroundColor: '#152C6B' }
              }}
            >
              Set Up Two-Factor Authentication
            </Button>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>Login Sessions</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MobileFriendlyIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="iPhone 13 - New York, USA" 
                  secondary="Active now (This device)" 
                />
                <Button size="small" color="error">Sign Out</Button>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ComputerIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Windows PC - Chicago, USA" 
                  secondary="Last active: November 20, 2023" 
                />
                <Button size="small" color="error">Sign Out</Button>
              </ListItem>
            </List>
          </Paper>
        );
        
      case 2: // Notifications
        return (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Notification Preferences</Typography>
            
            <List>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Email Notifications" 
                  secondary="Receive updates about your pet insurance policy" 
                />
                <Switch 
                  checked={notifications.email} 
                  onChange={handleNotificationChange('email')} 
                  color="primary"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              
              <ListItem>
                <ListItemIcon>
                  <MobileFriendlyIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="SMS Notifications" 
                  secondary="Get text messages for important updates" 
                />
                <Switch 
                  checked={notifications.sms} 
                  onChange={handleNotificationChange('sms')} 
                  color="primary"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Push Notifications" 
                  secondary="Allow browser notifications when logged in" 
                />
                <Switch 
                  checked={notifications.pushNotifications} 
                  onChange={handleNotificationChange('pushNotifications')} 
                  color="primary"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              
              <ListItem>
                <ListItemIcon>
                  <MailOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Marketing Emails" 
                  secondary="Receive promotional offers and newsletters" 
                />
                <Switch 
                  checked={notifications.marketingEmails} 
                  onChange={handleNotificationChange('marketingEmails')} 
                  color="primary"
                />
              </ListItem>
            </List>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#1E3A8A',
                  '&:hover': { backgroundColor: '#152C6B' }
                }}
              >
                Save Preferences
              </Button>
            </Box>
          </Paper>
        );
        
      case 3: // Payment Methods
        return (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Payment Methods</Typography>
            
            <Grid container spacing={3} sx={{ mb: 3 }}>
              {paymentMethods.map((method) => (
                <Grid item xs={12} sm={6} md={4} key={method.id}>
                  <Card sx={{ height: '100%' }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: '#1E3A8A' }}>
                          <CreditCardIcon />
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }
                      title={`${method.type} ending in ${method.last4}`}
                      subheader={`Expires ${method.expiry}`}
                    />
                    <CardContent>
                      {method.isPrimary && (
                        <Chip 
                          label="Primary" 
                          size="small" 
                          color="primary" 
                          sx={{ mb: 2 }} 
                        />
                      )}
                      {!method.isPrimary && (
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={() => handleSetPrimaryPayment(method.id)}
                        >
                          Set as Primary
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              
              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '2px dashed #e0e0e0'
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <IconButton 
                      sx={{ 
                        mb: 1, 
                        border: '1px solid #e0e0e0', 
                        p: 1.5,
                        color: '#1E3A8A' 
                      }}
                    >
                      <AddIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="body1">
                      Add New Payment Method
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>Billing Address</Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Same as profile address"
            />
            
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street Address"
                  disabled
                  value={profileData.address}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="City"
                  disabled
                  value={profileData.city}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="State"
                  disabled
                  value={profileData.state}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="ZIP Code"
                  disabled
                  value={profileData.zip}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        );
        
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Account Settings
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab 
            icon={<PersonIcon />} 
            label="Profile" 
            iconPosition="start" 
          />
          <Tab 
            icon={<SecurityIcon />} 
            label="Security" 
            iconPosition="start" 
          />
          <Tab 
            icon={<NotificationsIcon />} 
            label="Notifications" 
            iconPosition="start" 
          />
          <Tab 
            icon={<PaymentIcon />} 
            label="Payment Methods" 
            iconPosition="start" 
          />
        </Tabs>
      </Box>
      
      {renderTabContent()}
    </Box>
  );
};

const ComputerIcon = () => <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
  <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
</svg>;

const MailOutlineIcon = () => <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
  <path fill="currentColor" d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z" />
</svg>;

const AddIcon = () => <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
  <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
</svg>;

const Checkbox = ({ defaultChecked }) => <input type="checkbox" defaultChecked={defaultChecked} />;

const Chip = ({ label, size, color, sx }) => (
  <Box 
    sx={{ 
      display: 'inline-flex',
      alignItems: 'center',
      bgcolor: '#E3F2FD',
      color: '#1E3A8A',
      borderRadius: '16px',
      fontSize: size === 'small' ? '0.75rem' : '0.875rem',
      padding: '0 12px',
      height: size === 'small' ? '24px' : '32px',
      ...sx 
    }}
  >
    {label}
  </Box>
);

export default SettingsPage;
