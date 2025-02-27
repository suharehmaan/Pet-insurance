
import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Card, 
  CardContent, 
  Grid, 
  Divider, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const PolicyPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Policy Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Active Policy
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ backgroundColor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h6" fontSize={14} color="text.secondary" gutterBottom>
                      Policy Number
                    </Typography>
                    <Typography variant="h5" fontWeight={600} color="#1E3A8A">
                      POL-123456
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ backgroundColor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h6" fontSize={14} color="text.secondary" gutterBottom>
                      Coverage Type
                    </Typography>
                    <Typography variant="h5" fontWeight={600} color="#1E3A8A">
                      Comprehensive
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ backgroundColor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h6" fontSize={14} color="text.secondary" gutterBottom>
                      Status
                    </Typography>
                    <Typography variant="h5" fontWeight={600} color="#1E3A8A">
                      <Chip 
                        label="Active" 
                        color="success" 
                        size="small" 
                        sx={{ fontWeight: 600 }} 
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ backgroundColor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h6" fontSize={14} color="text.secondary" gutterBottom>
                      Next Payment
                    </Typography>
                    <Typography variant="h5" fontWeight={600} color="#1E3A8A">
                      Jun 15, 2023
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarMonthIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" fontWeight={600}>
                        Policy Period
                      </Typography>
                    </Box>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Start Date</Typography>
                        <Typography variant="body1" fontWeight={500}>June 15, 2022</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">End Date</Typography>
                        <Typography variant="body1" fontWeight={500}>June 14, 2023</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <ReceiptIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" fontWeight={600}>
                        Payment Information
                      </Typography>
                    </Box>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Monthly Premium</Typography>
                        <Typography variant="body1" fontWeight={500}>$42.99</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Payment Method</Typography>
                        <Typography variant="body1" fontWeight={500}>VISA ****4567</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PetsIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" fontWeight={600}>
                        Covered Pets
                      </Typography>
                    </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                          <Typography variant="subtitle1" fontWeight={600}>Max</Typography>
                          <Typography variant="body2" color="text.secondary">Golden Retriever, 3 years</Typography>
                          <Chip size="small" label="Comprehensive Coverage" color="primary" sx={{ mt: 1 }} />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                          <Typography variant="subtitle1" fontWeight={600}>Bella</Typography>
                          <Typography variant="body2" color="text.secondary">Siamese Cat, 2 years</Typography>
                          <Chip size="small" label="Comprehensive Coverage" color="primary" sx={{ mt: 1 }} />
                        </Paper>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Coverage Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <HealthAndSafetyIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Annual Deductible" 
                      secondary="$250 per pet"
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemIcon>
                      <LocalHospitalIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Reimbursement" 
                      secondary="90% after deductible"
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemIcon>
                      <AccountBalanceIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Annual Maximum" 
                      secondary="$10,000 per pet"
                    />
                  </ListItem>
                </List>

                <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 2 }}>
                  What's Covered
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Accidents" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Illnesses" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Emergency Care" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Surgery" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Prescription Medications" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Hospitalization" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Specialist Care" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Diagnostic Tests" />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>

                <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 2 }}>
                  What's Not Covered
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CancelIcon color="error" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Pre-existing Conditions" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CancelIcon color="error" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Cosmetic Procedures" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CancelIcon color="error" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Breeding Costs" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CancelIcon color="error" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Routine Dental Cleaning" />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText',
                    borderRadius: 2
                  }}
                >
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    Wellness Add-On
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Enhance your pet's coverage with our Wellness Add-On package for just $15/month per pet.
                  </Typography>
                  
                  <List dense sx={{ mb: 2 }}>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon sx={{ color: 'primary.contrastText' }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Annual Wellness Exams" 
                        primaryTypographyProps={{ color: 'primary.contrastText' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon sx={{ color: 'primary.contrastText' }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Vaccinations" 
                        primaryTypographyProps={{ color: 'primary.contrastText' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon sx={{ color: 'primary.contrastText' }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Dental Cleanings" 
                        primaryTypographyProps={{ color: 'primary.contrastText' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon sx={{ color: 'primary.contrastText' }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Flea, Tick & Heartworm Prevention" 
                        primaryTypographyProps={{ color: 'primary.contrastText' }}
                      />
                    </ListItem>
                  </List>
                  
                  <Button 
                    variant="contained" 
                    color="secondary"
                    fullWidth
                  >
                    Add Wellness Coverage
                  </Button>
                </Paper>

                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    mt: 3,
                    borderRadius: 2,
                    border: '1px solid #e0e0e0'
                  }}
                >
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Need Assistance?
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Our pet insurance experts are available to help you understand your coverage.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined">
                      View Policy Documents
                    </Button>
                    <Button variant="contained">
                      Contact Support
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PolicyPage;
