import React, { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  Divider, 
  IconButton 
} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import { useAuth } from "../../context/AuthContext";

const MainDashboard = () => {
  const [policyData, setPolicyData] = useState(null);
  const [petsData, setPetsData] = useState([]);
  const [claimsData, setClaimsData] = useState([]);
  const [insightsData, setInsightsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch data when component mounts
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch data in parallel
        const [policies, pets, claims, insights] = await Promise.all([
          fetchPolicies(user?.id),
          fetchPets(user?.id),
          fetchClaims(user?.id),
          fetchInsights()
        ]);

        setPolicyData(policies[0]); // Use first policy for now
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

  // Find pet data for current policy
  const currentPet = policyData ? petsData.find(pet => pet.id === policyData.petId) : null;

  // Mock fetch functions - replace these with actual API calls
  const fetchPolicies = async (userId) => {
    // Mock data
    return [{ id: 1, petId: 1, policyNumber: 'POL-123456', coverageType: 'Comprehensive', premium: 35.99 }];
  };

  const fetchPets = async (userId) => {
    // Mock data
    return [{ id: 1, name: 'Max', species: 'Dog', breed: 'Labrador', age: 3 }];
  };

  const fetchClaims = async (userId) => {
    // Mock data
    return [
      { id: 1, date: '2023-09-15', amount: 250.00, status: 'Approved', description: 'Annual checkup' },
      { id: 2, date: '2023-10-10', amount: 175.50, status: 'Pending', description: 'Vaccination' }
    ];
  };

  const fetchInsights = async () => {
    // Mock data
    return [
      { id: 1, title: 'Pet Wellness Tips', content: 'Regular exercise is important for your pet\'s health.' },
      { id: 2, title: 'Insurance Benefits', content: 'Did you know your policy covers dental cleaning?' }
    ];
  };

  return (
    <Box>
      {/* Dashboard Title */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Pet Insurance Dashboard
      </Typography>

      {/* Support Section */}
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Support
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#f5f5f5' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <HelpIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6">FAQs</Typography>
                    <Typography variant="body2">Find answers to common questions</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#f5f5f5' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6">Call Support</Typography>
                    <Typography variant="body2">1-800-PET-HELP (Mon-Fri, 9am-5pm)</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#f5f5f5' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6">Email Support</Typography>
                    <Typography variant="body2">support@petinsurance.com</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}> 
        {/* 4. Footer */}
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
      </Grid>

      {/* Floating Chat Button */}
      <IconButton 
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