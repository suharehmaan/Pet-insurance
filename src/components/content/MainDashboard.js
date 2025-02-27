
import React, { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  Divider, 
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
  useTheme,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import PetsIcon from '@mui/icons-material/Pets';
import ArticleIcon from '@mui/icons-material/Article';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useAuth } from "../../context/AuthContext";
import { useThemeContext } from "../../context/ThemeContext";

const MainDashboard = ({ onChatClick }) => {
  const [policyData, setPolicyData] = useState(null);
  const [petsData, setPetsData] = useState([]);
  const [claimsData, setClaimsData] = useState([]);
  const [insightsData, setInsightsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const theme = useTheme();
  const { darkMode } = useThemeContext();

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const [policies, pets, claims, insights] = await Promise.all([
          fetchPolicies(user?.id),
          fetchPets(user?.id),
          fetchClaims(user?.id),
          fetchInsights()
        ]);

        setPolicyData(policies[0]);
        setPetsData(pets);
        setClaimsData(claims);
        setInsightsData(insights);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const currentPet = policyData ? petsData.find(pet => pet.id === policyData.petId) : null;

  const fetchPolicies = async (userId) => {
    return [{
      id: 1,
      petId: 1,
      policyNumber: 'POL-123456',
      status: 'Active',
      coverageType: 'Premium',
      premium: 49.99,
      coverageLimit: 10000,
      deductible: 250,
      startDate: '2023-03-15',
      endDate: '2024-03-14'
    }];
  };

  const fetchPets = async (userId) => {
    return [{
      id: 1,
      name: 'Max',
      species: 'Dog',
      breed: 'Labrador',
      age: 3,
      imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1000&auto=format&fit=crop'
    }];
  };

  const fetchClaims = async (userId) => {
    return [
      { id: 'CLM-001', date: '2023-11-15', amount: 550.00, status: 'Approved', description: 'Annual checkup' },
      { id: 'CLM-002', date: '2023-12-10', amount: 325.50, status: 'Pending', description: 'Vaccination' },
      { id: 'CLM-003', date: '2024-01-05', amount: 780.00, status: 'Rejected', description: 'Dental cleaning' },
      { id: 'CLM-004', date: '2024-02-18', amount: 425.00, status: 'Approved', description: 'X-ray exam' }
    ];
  };

  const fetchInsights = async () => {
    return [
      { id: 1, title: 'Regular Exercise for Your Lab', content: 'Labrador retrievers need at least 30-60 minutes of exercise daily to stay healthy and happy.', category: 'petcare' },
      { id: 2, title: '20% Off Dental Services', content: 'Use code PET20 at VetCare clinics nationwide for dental services this month.', category: 'discount' },
      { id: 3, title: 'Preventive Care Saves Money', content: 'Annual wellness exams can save up to $500 in potential treatment costs.', category: 'saving' }
    ];
  };

  const getStatusChipColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'expired':
        return 'error';
      case 'pending renewal':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getClaimStatusChipColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'success';
      case 'rejected':
        return 'error';
      case 'pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getInsightIcon = (category) => {
    switch (category) {
      case 'petcare':
        return <PetsIcon color="primary" />;
      case 'discount':
        return <LocalOfferIcon sx={{ color: theme.palette.secondary.main }} />;
      case 'saving':
        return <MoneyOffIcon color="success" />;
      default:
        return <ArticleIcon />;
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Pet Insurance Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Policy Summary Section */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Policy Summary
            </Typography>
            {policyData && currentPet && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ textAlign: 'center', mb: 2 }}>
                        {currentPet.imageUrl ? (
                          <Avatar
                            src={currentPet.imageUrl}
                            alt={currentPet.name}
                            sx={{ width: 100, height: 100, margin: '0 auto', mb: 1 }}
                          />
                        ) : (
                          <Avatar sx={{ width: 100, height: 100, margin: '0 auto', mb: 1, bgcolor: 'primary.main' }}>
                            <PetsIcon sx={{ fontSize: 60 }} />
                          </Avatar>
                        )}
                        <Typography variant="h6">{currentPet.name}</Typography>
                        <Typography variant="body1">
                          {currentPet.breed} ({currentPet.species})
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Age: {currentPet.age} years
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6">Policy #{policyData.policyNumber}</Typography>
                        <Chip 
                          label={policyData.status} 
                          color={getStatusChipColor(policyData.status)} 
                          size="small" 
                        />
                      </Box>
                      <Divider sx={{ mb: 2 }} />
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Plan Type</Typography>
                          <Typography variant="body1">{policyData.coverageType}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Monthly Premium</Typography>
                          <Typography variant="body1">${policyData.premium.toFixed(2)}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Coverage Limit</Typography>
                          <Typography variant="body1">${policyData.coverageLimit.toLocaleString()}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Deductible</Typography>
                          <Typography variant="body1">${policyData.deductible.toLocaleString()}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Start Date</Typography>
                          <Typography variant="body1">{policyData.startDate}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">End Date</Typography>
                          <Typography variant="body1">{policyData.endDate}</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Paper>

          {/* Quick Actions */}
          <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Quick Actions
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<ReceiptIcon />}
                fullWidth
                size="large"
              >
                Intimate a Claim
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                startIcon={<ArticleIcon />}
                fullWidth
                size="large"
              >
                Change Policy
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                startIcon={<PriceCheckIcon />}
                fullWidth
                size="large"
              >
                Reimbursement Status
              </Button>
            </Stack>
          </Paper>

          {/* Claims Overview */}
          <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" fontWeight={600}>
                Claims Overview
              </Typography>
              <Button color="primary" size="small">
                View Full History
              </Button>
            </Box>
            <TableContainer component={Paper} elevation={0} variant="outlined">
              <Table sx={{ minWidth: 650 }} size="medium">
                <TableHead>
                  <TableRow sx={{ 
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
                  }}>
                    <TableCell>Claim ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {claimsData.map((claim) => (
                    <TableRow key={claim.id} hover>
                      <TableCell component="th" scope="row">{claim.id}</TableCell>
                      <TableCell>{claim.date}</TableCell>
                      <TableCell>{claim.description}</TableCell>
                      <TableCell align="right">${claim.amount.toFixed(2)}</TableCell>
                      <TableCell align="center">
                        <Chip 
                          label={claim.status} 
                          color={getClaimStatusChipColor(claim.status)} 
                          size="small" 
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Sidebar Content */}
        <Grid item xs={12} md={4}>
          {/* Personalized Insights */}
          <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Personalized Insights
            </Typography>
            <List>
              {insightsData.map((insight) => (
                <ListItem 
                  key={insight.id} 
                  alignItems="flex-start"
                  sx={{ 
                    mb: 1.5, 
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                    }
                  }}
                >
                  <ListItemIcon>
                    {getInsightIcon(insight.category)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        {insight.title}
                      </Typography>
                    }
                    secondary={insight.content}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Support Section */}
          <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Support
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <HelpIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Box>
                      <Typography variant="h6">FAQs</Typography>
                      <Typography variant="body2">Find answers to common questions</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Box>
                      <Typography variant="h6">Call Support</Typography>
                      <Typography variant="body2">1-800-PET-HELP (Mon-Fri, 9am-5pm)</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Box>
                      <Typography variant="h6">Email Support</Typography>
                      <Typography variant="body2">support@petinsurance.com</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>

          {/* Health Tips */}
          <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Pet Health Tips
            </Typography>
            <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <HealthAndSafetyIcon color="success" sx={{ mr: 2, fontSize: 32 }} />
                  <Typography variant="h6">Wellness Reminder</Typography>
                </Box>
                <Typography variant="body2" paragraph>
                  Your pet's annual checkup is due in 30 days. Regular checkups help catch issues early.
                </Typography>
                <Button variant="outlined" color="success" size="small" fullWidth>
                  Schedule Checkup
                </Button>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
          Terms & Conditions
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
          Contact Us
        </Typography>
      </Box>

    
    {/* Floating Chat Button */}
      <IconButton 
        onClick={onChatClick}
        sx={{ 
          position: 'fixed', 
          bottom: 20, 
          right: 20, 
          backgroundColor: '#4caf50', 
          color: 'white', 
          '&:hover': { backgroundColor: '#388e3c' },
          width: 56,
          height: 56,
          boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
        }}
      >
        <ChatIcon />
      </IconButton>
    </Box>
  );
};

export default MainDashboard;