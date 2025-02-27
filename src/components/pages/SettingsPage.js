
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Tabs, 
  Tab, 
  TextField, 
  Button, 
  Grid, 
  Switch,
  FormControlLabel,
  Divider,
  Card,
  CardContent,
  Alert,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';

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

  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      cardNumber: '**** **** **** 4567',
      expiryDate: '09/2024',
      isDefault: true,
      cardType: 'visa'
    },
    {
      id: 2,
      type: 'Credit Card',
      cardNumber: '**** **** **** 8901',
      expiryDate: '12/2023',
      isDefault: false,
      cardType: 'mastercard'
    }
  ];

  const securityOptions = [
    {
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account by requiring both your password and a verification code.',
      enabled: false
    },
    {
      title: 'Login Notifications',
      description: 'Receive an email alert when there is a new login to your account.',
      enabled: true
    },
    {
      title: 'Password Reset Protection',
      description: 'Require additional verification when requesting a password reset.',
      enabled: true
    }
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Account Settings
      </Typography>
      
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab 
            icon={<PersonIcon />} 
            label="Profile" 
            id="settings-tab-0" 
            aria-controls="settings-tabpanel-0"
          />
          <Tab 
            icon={<PaymentIcon />} 
            label="Payment Methods" 
            id="settings-tab-1" 
            aria-controls="settings-tabpanel-1" 
          />
          <Tab 
            icon={<SecurityIcon />} 
            label="Security" 
            id="settings-tab-2" 
            aria-controls="settings-tabpanel-2" 
          />
          <Tab 
            icon={<NotificationsIcon />} 
            label="Notifications" 
            id="settings-tab-3" 
            aria-controls="settings-tabpanel-3" 
          />
        </Tabs>
      </Paper>
      
      <Box role="tabpanel" hidden={tabValue !== 0} id="settings-tabpanel-0" aria-labelledby="settings-tab-0">
        {tabValue === 0 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Personal Information
            </Typography>
            
            <Grid container spacing={3}>
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
                  type="email"
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
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Address Information
            </Typography>
            
            <Grid container spacing={3}>
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
              <Grid item xs={12} sm={6} md={4}>
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
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel id="state-label">State</InputLabel>
                  <Select
                    labelId="state-label"
                    id="state"
                    name="state"
                    value={profileData.state}
                    onChange={handleProfileChange}
                    label="State"
                  >
                    <MenuItem value="AL">Alabama</MenuItem>
                    <MenuItem value="AK">Alaska</MenuItem>
                    <MenuItem value="AZ">Arizona</MenuItem>
                    <MenuItem value="AR">Arkansas</MenuItem>
                    <MenuItem value="CA">California</MenuItem>
                    <MenuItem value="CO">Colorado</MenuItem>
                    <MenuItem value="CT">Connecticut</MenuItem>
                    {/* Add more states as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<SaveIcon />}
              >
                Save Changes
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
      
      <Box role="tabpanel" hidden={tabValue !== 1} id="settings-tabpanel-1" aria-labelledby="settings-tab-1">
        {tabValue === 1 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Payment Methods
            </Typography>
            
            <Alert severity="info" sx={{ mb: 3 }}>
              Your payment method is used for automatic monthly premium payments.
            </Alert>
            
            <Grid container spacing={3}>
              {paymentMethods.map((method) => (
                <Grid item xs={12} sm={6} key={method.id}>
                  <Card variant={method.isDefault ? "outlined" : "elevation"} 
                    sx={{ 
                      borderColor: method.isDefault ? 'primary.main' : 'inherit',
                      position: 'relative'
                    }}
                  >
                    {method.isDefault && (
                      <Box 
                        sx={{ 
                          position: 'absolute', 
                          top: 10, 
                          right: 10, 
                          bgcolor: 'primary.main',
                          color: 'white',
                          fontSize: '0.75rem',
                          py: 0.5,
                          px: 1,
                          borderRadius: 1
                        }}
                      >
                        Default
                      </Box>
                    )}
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CreditCardIcon sx={{ mr: 1 }} />
                        <Typography variant="h6">
                          {method.cardType.toUpperCase()}
                        </Typography>
                      </Box>
                      <Typography variant="body1" gutterBottom>
                        {method.cardNumber}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Expires: {method.expiryDate}
                      </Typography>
                      
                      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                        {!method.isDefault && (
                          <Button size="small" variant="outlined">
                            Set as Default
                          </Button>
                        )}
                        <Button size="small" variant="outlined" color="error">
                          Remove
                        </Button>
                        <Button size="small" variant="outlined">
                          Edit
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              
              <Grid item xs={12} sm={6}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    border: '1px dashed #ccc'
                  }}
                >
                  <CreditCardIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="body1" gutterBottom align="center">
                    Add a new payment method
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary"
                    sx={{ mt: 1 }}
                  >
                    Add Payment Method
                  </Button>
                </Card>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Billing History
            </Typography>
            
            <Alert severity="info" sx={{ mb: 3 }}>
              Your next payment of $42.99 will be processed on June 15, 2023.
            </Alert>
            
            <Button variant="outlined">
              View Billing History
            </Button>
          </Paper>
        )}
      </Box>
      
      <Box role="tabpanel" hidden={tabValue !== 2} id="settings-tabpanel-2" aria-labelledby="settings-tab-2">
        {tabValue === 2 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Security Settings
            </Typography>
            
            <Grid container spacing={3}>
              {securityOptions.map((option, index) => (
                <Grid item xs={12} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {option.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {option.description}
                          </Typography>
                        </Box>
                        <Switch 
                          checked={option.enabled} 
                          color="primary"
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Password
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            
            <Button 
              variant="contained" 
              color="primary"
              sx={{ mt: 3 }}
            >
              Update Password
            </Button>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Account Access
            </Typography>
            
            <Button 
              variant="outlined" 
              color="error"
              sx={{ mt: 1 }}
            >
              Log Out of All Devices
            </Button>
          </Paper>
        )}
      </Box>
      
      <Box role="tabpanel" hidden={tabValue !== 3} id="settings-tabpanel-3" aria-labelledby="settings-tab-3">
        {tabValue === 3 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Notification Preferences
            </Typography>
            
            <Alert severity="info" sx={{ mb: 3 }}>
              Choose how you want to receive notifications from us.
            </Alert>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
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
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                      Receive email notifications about your policy, claims, and account updates.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
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
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                      Receive text message alerts for important updates and reminders.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
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
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                      Receive push notifications on your mobile device.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
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
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                      Receive promotional offers, newsletters, and updates about new services.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined">
                  Reset to Defaults
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<SaveIcon />}
                >
                  Save Preferences
                </Button>
              </Stack>
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default SettingsPage;
