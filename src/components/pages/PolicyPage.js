import React from "react";
import { Box, Typography, Grid, Paper, Card, CardContent } from "@mui/material";
import PolicyIcon from '@mui/icons-material/Policy';

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
                      Monthly Premium
                    </Typography>
                    <Typography variant="h5" fontWeight={600} color="#1E3A8A">
                      $35.99
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
                      Dec 15
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PolicyPage;
import React from "react";
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
  // Sample policy data
  const policy = {
    id: "POL-2023-001",
    type: "Comprehensive Pet Insurance",
    startDate: "2023-01-15",
    renewalDate: "2024-01-15",
    status: "Active",
    premium: 39.99,
    paymentFrequency: "Monthly",
    pet: {
      name: "Max",
      type: "Dog",
      breed: "Labrador Retriever",
      age: 3
    },
    benefits: [
      { name: "Accident Coverage", limit: "$3,000", covered: true },
      { name: "Illness Coverage", limit: "$3,000", covered: true },
      { name: "Emergency Care", limit: "$1,000", covered: true },
      { name: "Surgery", limit: "$2,500", covered: true },
      { name: "Medication", limit: "$500", covered: true },
      { name: "Wellness Care", limit: "$300", covered: false },
      { name: "Dental Care", limit: "$500", covered: true },
      { name: "Behavioral Therapy", limit: "$250", covered: false }
    ],
    deductible: 250,
    annualLimit: 5000,
    reimbursement: 80
  };

  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Policy Details
      </Typography>

      {/* Policy Overview Card */}
      <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ReceiptIcon sx={{ fontSize: 32, color: '#1E3A8A', mr: 2 }} />
              <Typography variant="h5" fontWeight={600}>{policy.type}</Typography>
              <Chip 
                label={policy.status} 
                color="success" 
                size="small" 
                sx={{ ml: 2 }} 
              />
            </Box>
            
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Policy ID: {policy.id}
            </Typography>
            
            <Grid container sx={{ mt: 3 }}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CalendarMonthIcon color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">Start Date</Typography>
                    <Typography variant="body1">{new Date(policy.startDate).toLocaleDateString()}</Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CalendarMonthIcon color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">Renewal Date</Typography>
                    <Typography variant="body1">{new Date(policy.renewalDate).toLocaleDateString()}</Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccountBalanceIcon color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">Premium</Typography>
                    <Typography variant="body1">${policy.premium} {policy.paymentFrequency}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 2 }} />
            
            <Grid container>
              <Grid item xs={12} sm={4}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Annual Deductible</Typography>
                  <Typography variant="h6">${policy.deductible}</Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Annual Limit</Typography>
                  <Typography variant="h6">${policy.annualLimit}</Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Reimbursement</Typography>
                  <Typography variant="h6">{policy.reimbursement}%</Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button variant="contained" sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}>
                View Documents
              </Button>
              <Button variant="outlined">Modify Coverage</Button>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#f0f7ff', height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PetsIcon sx={{ mr: 1, color: '#1E3A8A' }} />
                  <Typography variant="h6">Insured Pet</Typography>
                </Box>
                
                <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 1, mb: 2 }}>
                  <Typography variant="h5" gutterBottom>{policy.pet.name}</Typography>
                  <Typography variant="body1">{policy.pet.breed}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {policy.pet.type}, {policy.pet.age} years old
                  </Typography>
                </Box>
                
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Pet Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Coverage Details */}
      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Coverage Details
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <List>
              {policy.benefits.map((benefit, index) => (
                <React.Fragment key={benefit.name}>
                  <ListItem>
                    <ListItemIcon>
                      {benefit.covered ? 
                        <CheckCircleIcon color="success" /> : 
                        <CancelIcon color="error" />
                      }
                    </ListItemIcon>
                    <ListItemText 
                      primary={benefit.name} 
                      secondary={benefit.covered ? `Covered up to ${benefit.limit}` : 'Not Covered'} 
                    />
                  </ListItem>
                  {index < policy.benefits.length - 1 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HealthAndSafetyIcon sx={{ mr: 1, color: '#1E3A8A' }} />
                <Typography variant="h6">Wellness Tips</Typography>
              </Box>
              <Typography variant="body2" paragraph>
                Regular check-ups can help catch issues early. Schedule your pet's next check-up today!
              </Typography>
              <Button 
                variant="text" 
                color="primary"
                sx={{ mt: 1 }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalHospitalIcon sx={{ mr: 1, color: '#1E3A8A' }} />
                <Typography variant="h6">Need Help?</Typography>
              </Box>
              <Typography variant="body2" paragraph>
                Our support team is available 24/7 to assist you with any questions about your policy.
              </Typography>
              <Button 
                variant="contained" 
                fullWidth
                sx={{ mt: 1, bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PolicyPage;
