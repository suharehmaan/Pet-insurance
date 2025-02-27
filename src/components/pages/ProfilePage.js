
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Divider,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Tabs,
  Tab,
  useTheme,
  Chip
} from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Home as HomeIcon,
  Cake as CakeIcon,
  Pets as PetsIcon,
  Receipt as ReceiptIcon,
  ContactPhone as ContactPhoneIcon,
  LocationOn as LocationIcon,
  Security as SecurityIcon
} from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProfilePage = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  
  // Mock user data
  const userData = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Pet Street, Dogville, NY 10001",
    dob: "1985-05-15",
    occupation: "Software Developer",
    memberSince: "2022-03-10",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    pets: [
      { id: 1, name: "Max", species: "Dog", breed: "Labrador", age: 3 },
      { id: 2, name: "Whiskers", species: "Cat", breed: "Maine Coon", age: 2 }
    ],
    recentClaims: [
      { id: "CL-1001", date: "2023-11-15", amount: 350, status: "Approved", petName: "Max" },
      { id: "CL-1002", date: "2023-12-20", amount: 210, status: "Pending", petName: "Whiskers" }
    ],
    emergencyContacts: [
      { id: 1, name: "Jane Doe", relation: "Spouse", phone: "+1 (555) 987-6543" },
      { id: 2, name: "Dr. Smith", relation: "Veterinarian", phone: "+1 (555) 456-7890" }
    ]
  };

  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    dob: userData.dob,
    occupation: userData.occupation
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEditToggle = () => {
    if (editMode) {
      // Save changes logic would go here
    }
    setEditMode(!editMode);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    setFormData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      dob: userData.dob,
      occupation: userData.occupation
    });
    setEditMode(false);
  };

  const getStatusChipColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'success';
      case 'pending':
        return 'warning';
      case 'rejected':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Profile
      </Typography>

      <Grid container spacing={3}>
        {/* Main Profile Content */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={userData.profileImage}
                  alt={userData.name}
                  sx={{ width: 100, height: 100, mr: 3 }}
                />
                <Box>
                  <Typography variant="h5" fontWeight="bold">{userData.name}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Member since {new Date(userData.memberSince).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
              <Box>
                {!editMode ? (
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEditToggle}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<SaveIcon />}
                      onClick={handleEditToggle}
                      color="primary"
                    >
                      Save
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange} 
                  aria-label="profile tabs"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Personal Details" />
                  <Tab label="Pets" />
                  <Tab label="Claims" />
                  <Tab label="Emergency Contacts" />
                </Tabs>
              </Box>

              {/* Personal Details Tab */}
              <TabPanel value={tabValue} index={0}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      disabled={!editMode}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      disabled={!editMode}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      disabled={!editMode}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Date of Birth"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleFormChange}
                      disabled={!editMode}
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      disabled={!editMode}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleFormChange}
                      disabled={!editMode}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </TabPanel>

              {/* Pets Tab */}
              <TabPanel value={tabValue} index={1}>
                <Grid container spacing={3}>
                  {userData.pets.map(pet => (
                    <Grid item xs={12} sm={6} key={pet.id}>
                      <Card variant="outlined">
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                              <PetsIcon />
                            </Avatar>
                          }
                          title={
                            <Typography variant="h6">{pet.name}</Typography>
                          }
                          subheader={`${pet.breed} (${pet.species})`}
                          action={
                            <IconButton>
                              <EditIcon />
                            </IconButton>
                          }
                        />
                        <CardContent>
                          <Typography variant="body1">Age: {pet.age} years</Typography>
                          <Box sx={{ mt: 2 }}>
                            <Button variant="outlined" color="primary" size="small" sx={{ mr: 1 }}>
                              View Details
                            </Button>
                            <Button variant="outlined" color="secondary" size="small">
                              Health Records
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      startIcon={<PetsIcon />}
                      sx={{ mt: 2 }}
                    >
                      Add New Pet
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>

              {/* Claims Tab */}
              <TabPanel value={tabValue} index={2}>
                <List>
                  {userData.recentClaims.map(claim => (
                    <Paper 
                      elevation={0} 
                      variant="outlined" 
                      key={claim.id}
                      sx={{ mb: 2, p: 2 }}
                    >
                      <Grid container alignItems="center">
                        <Grid item xs={12} sm={4}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ bgcolor: theme.palette.secondary.main, mr: 2 }}>
                              <ReceiptIcon />
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle1">{claim.id}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {new Date(claim.date).toLocaleDateString()}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Typography variant="body1">
                            <PetsIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                            {claim.petName}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                          <Typography variant="body1">
                            ${claim.amount.toFixed(2)}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'left', sm: 'right' }, mt: { xs: 1, sm: 0 } }}>
                          <Chip 
                            label={claim.status} 
                            color={getStatusChipColor(claim.status)} 
                            size="small" 
                          />
                          <Button 
                            variant="text" 
                            color="primary" 
                            size="small"
                            sx={{ ml: 1 }}
                          >
                            Details
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<ReceiptIcon />}
                >
                  View All Claims
                </Button>
              </TabPanel>

              {/* Emergency Contacts Tab */}
              <TabPanel value={tabValue} index={3}>
                <List>
                  {userData.emergencyContacts.map(contact => (
                    <ListItem 
                      key={contact.id}
                      secondaryAction={
                        <IconButton edge="end">
                          <EditIcon />
                        </IconButton>
                      }
                      sx={{ 
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                        borderRadius: 1,
                        mb: 2
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <ContactPhoneIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={contact.name} 
                        secondary={
                          <React.Fragment>
                            <Typography variant="body2" component="span">
                              {contact.relation}
                            </Typography>
                            <br />
                            <Typography variant="body2" component="span">
                              {contact.phone}
                            </Typography>
                          </React.Fragment>
                        } 
                      />
                    </ListItem>
                  ))}
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<ContactPhoneIcon />}
                >
                  Add Emergency Contact
                </Button>
              </TabPanel>
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar Content */}
        <Grid item xs={12} md={4}>
          {/* Contact Information Card */}
          <Card sx={{ mb: 3 }}>
            <CardHeader title="Contact Information" />
            <CardContent>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={userData.email} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      <PhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary={userData.phone} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      <HomeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={userData.address} />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Account Security Card */}
          <Card sx={{ mb: 3 }}>
            <CardHeader title="Account Security" />
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  fullWidth 
                  startIcon={<SecurityIcon />}
                  sx={{ mb: 1 }}
                >
                  Change Password
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  fullWidth
                >
                  Two-Factor Authentication
                </Button>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Last login: Yesterday at 2:30 PM
              </Typography>
            </CardContent>
          </Card>

          {/* Account Statistics */}
          <Card>
            <CardHeader title="Account Statistics" />
            <CardContent>
              <List dense>
                <ListItem>
                  <ListItemText primary="Member Since" secondary={new Date(userData.memberSince).toLocaleDateString()} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Total Pets" secondary={userData.pets.length} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Active Policies" secondary="2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Total Claims" secondary="5" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
