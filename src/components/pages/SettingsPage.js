import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Switch, 
  FormControlLabel,
  Tabs,
  Tab,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Chip
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaymentIcon from '@mui/icons-material/Payment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import EmailIcon from '@mui/icons-material/Email';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcon from '@mui/icons-material/Add';


const SettingsPage = () => {
  const [tabValue, setTabValue] = useState(0);

  // Mock profile data
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345'
  });

  // Mock notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationChange = (setting) => (e) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: e.target.checked
    });
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
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Personal Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleProfileChange}
                        margin="normal"
                        variant="outlined"
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
                        variant="outlined"
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
                        variant="outlined"
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
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Typography variant="h6" gutterBottom>
                    Address
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Street Address"
                        name="address"
                        value={profileData.address}
                        onChange={handleProfileChange}
                        margin="normal"
                        variant="outlined"
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
                        variant="outlined"
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
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Zip Code"
                        name="zipCode"
                        value={profileData.zipCode}
                        onChange={handleProfileChange}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Box>
                </CardContent>
              </Card>
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
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Notification Preferences
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.emailNotifications}
                        onChange={handleNotificationChange('emailNotifications')}
                        color="primary"
                      />
                    }
                    label="Email Notifications"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    Receive updates about your policy, claims, and account via email
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.smsNotifications}
                        onChange={handleNotificationChange('smsNotifications')}
                        color="primary"
                      />
                    }
                    label="SMS Notifications"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    Receive text message alerts for important updates
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.pushNotifications}
                        onChange={handleNotificationChange('pushNotifications')}
                        color="primary"
                      />
                    }
                    label="Push Notifications"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    Receive notifications in your browser
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.marketingEmails}
                        onChange={handleNotificationChange('marketingEmails')}
                        color="primary"
                      />
                    }
                    label="Marketing Emails"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    Receive promotional offers and newsletters
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary">
                  Save Preferences
                </Button>
              </Box>
            </CardContent>
          </Card>
        );

      case 3: // Payment Methods
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

        const handleSetPrimaryPayment = (id) => {
          setPaymentMethods(paymentMethods.map(method => ({
            ...method,
            isPrimary: method.id === id
          })));
        };
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
                  value={profileData.zipCode}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        );

      default:
        return (
          <Box sx={{ p: 2 }}>
            <Typography>Content for tab {tabValue} is under development</Typography>
          </Box>
        );
    }
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


  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
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

export default SettingsPage;
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  TextField, 
  Button, 
  Switch, 
  FormControlLabel, 
  Divider, 
  Avatar, 
  IconButton,
  Tab,
  Tabs,
  Alert
} from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LanguageIcon from '@mui/icons-material/Language';
import { useThemeContext } from "../../context/ThemeContext";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeContext();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  // Mock user data
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zipCode: "12345"
  };

  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Settings
      </Typography>

      {/* Success Alert */}
      {showSuccess && (
        <Alert 
          severity="success" 
          sx={{ mb: 3 }}
          onClose={() => setShowSuccess(false)}
        >
          Settings saved successfully!
        </Alert>
      )}

      {/* Settings Tabs */}
      <Paper elevation={2} sx={{ mb: 3, borderRadius: 2 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '& .MuiTab-root': { minHeight: 64 }
          }}
        >
          <Tab 
            label="Profile" 
            icon={<Avatar sx={{ bgcolor: '#1E3A8A', width: 24, height: 24, fontSize: 14 }}>P</Avatar>} 
            iconPosition="start" 
          />
          <Tab 
            label="Security" 
            icon={<SecurityIcon fontSize="small" />} 
            iconPosition="start" 
          />
          <Tab 
            label="Notifications" 
            icon={<NotificationsIcon fontSize="small" />} 
            iconPosition="start" 
          />
          <Tab 
            label="Payment Methods" 
            icon={<CreditCardIcon fontSize="small" />} 
            iconPosition="start" 
          />
          <Tab 
            label="Preferences" 
            icon={<LanguageIcon fontSize="small" />}
            iconPosition="start" 
          />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        {/* Profile Tab */}
        {activeTab === 0 && (
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Avatar 
                sx={{ 
                  width: 100, 
                  height: 100, 
                  bgcolor: '#1E3A8A',
                  fontSize: 36
                }}
              >
                {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
              </Avatar>
              <Box sx={{ ml: 2, position: 'relative' }}>
                <Typography variant="h6">
                  {userData.firstName} {userData.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {userData.email}
                </Typography>
                <IconButton 
                  sx={{ 
                    position: 'absolute', 
                    bottom: -10, 
                    left: 0,
                    bgcolor: '#1E3A8A',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#152c69'
                    }
                  }}
                  size="small"
                >
                  <PhotoCameraIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mb: 2 }}>Personal Information</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  defaultValue={userData.firstName}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  defaultValue={userData.lastName}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  defaultValue={userData.email}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  defaultValue={userData.phone}
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ mb: 2 }}>Address Information</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Street Address"
                  defaultValue={userData.address}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="City"
                  defaultValue={userData.city}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="State"
                  defaultValue={userData.state}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Zip Code"
                  defaultValue={userData.zipCode}
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="outlined" 
                sx={{ mr: 2 }}
              >
                Cancel
              </Button>
              <Button 
                variant="contained"
                onClick={handleSave} 
                sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        )}

        {/* Security Tab */}
        {activeTab === 1 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 3 }}>Password Settings</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Current Password"
                  type="password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="New Password"
                  type="password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm New Password"
                  type="password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ mb: 2 }}>Two-Factor Authentication</Typography>

            <FormControlLabel
              control={<Switch color="primary" />}
              label="Enable two-factor authentication"
            />

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
              Two-factor authentication adds an extra layer of security to your account.
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="contained"
                onClick={handleSave} 
                sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        )}

        {/* Notifications Tab */}
        {activeTab === 2 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 3 }}>Notification Preferences</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked color="primary" />}
                  label="Email Notifications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                  Receive updates about your policy, claims, and important account information
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked color="primary" />}
                  label="SMS Notifications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                  Get text alerts for urgent updates and claim status changes
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Push Notifications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                  Receive notifications on your mobile device
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked color="primary" />}
                  label="Marketing Communications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                  Stay informed about new services, promotions, and pet health tips
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="contained"
                onClick={handleSave} 
                sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        )}

        {/* Preferences Tab */}
        {activeTab === 4 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 3 }}>Application Preferences</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch 
                      checked={darkMode} 
                      onChange={toggleDarkMode} 
                      color="primary" 
                    />
                  }
                  label="Dark Mode"
                />
                <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                  Switch between light and dark theme
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked color="primary" />}
                  label="Show Policy Reminders"
                />
                <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                  Display reminders about upcoming policy renewals and payments
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked color="primary" />}
                  label="Auto-save Form Data"
                />
                <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                  Automatically save your progress when filling out forms
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="contained"
                onClick={handleSave} 
                sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Save Preferences
              </Button>
            </Box>
          </Box>
        )}

        {/* Payment Methods Tab */}
        {activeTab === 3 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 3 }}>Payment Methods</Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Manage your payment methods and billing preferences
            </Typography>

            <Button 
              variant="contained" 
              sx={{ mb: 3, bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
            >
              Add Payment Method
            </Button>

            <Typography variant="body1" sx={{ mt: 3, fontStyle: 'italic', color: 'text.secondary' }}>
              No payment methods added yet.
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default SettingsPage;