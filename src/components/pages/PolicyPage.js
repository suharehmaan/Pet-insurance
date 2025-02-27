
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PetsIcon from '@mui/icons-material/Pets';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const PolicyPage = () => {
  const [policies, setPolicies] = useState([
    {
      id: 'POL-1001',
      petName: 'Max',
      petType: 'Dog',
      breed: 'Labrador',
      planType: 'Comprehensive',
      coverageAmount: '$5,000',
      premium: '$38.99',
      startDate: '2023-01-15',
      nextPayment: '2023-12-15',
      status: 'Active',
      coverages: [
        { name: 'Accidents', covered: true, limit: '$2,000' },
        { name: 'Illnesses', covered: true, limit: '$2,000' },
        { name: 'Surgeries', covered: true, limit: '$1,500' },
        { name: 'Medications', covered: true, limit: '$500' },
        { name: 'Wellness Care', covered: false, limit: 'N/A' },
        { name: 'Dental', covered: false, limit: 'N/A' }
      ],
      paymentHistory: [
        { id: 'PAY-1001', date: '2023-11-15', amount: '$38.99', status: 'Paid' },
        { id: 'PAY-1002', date: '2023-10-15', amount: '$38.99', status: 'Paid' },
        { id: 'PAY-1003', date: '2023-09-15', amount: '$38.99', status: 'Paid' }
      ]
    },
    {
      id: 'POL-1002',
      petName: 'Bella',
      petType: 'Cat',
      breed: 'Siamese',
      planType: 'Basic',
      coverageAmount: '$3,000',
      premium: '$24.99',
      startDate: '2023-03-10',
      nextPayment: '2023-12-10',
      status: 'Active',
      coverages: [
        { name: 'Accidents', covered: true, limit: '$1,500' },
        { name: 'Illnesses', covered: true, limit: '$1,000' },
        { name: 'Surgeries', covered: true, limit: '$1,000' },
        { name: 'Medications', covered: false, limit: 'N/A' },
        { name: 'Wellness Care', covered: false, limit: 'N/A' },
        { name: 'Dental', covered: false, limit: 'N/A' }
      ],
      paymentHistory: [
        { id: 'PAY-2001', date: '2023-11-10', amount: '$24.99', status: 'Paid' },
        { id: 'PAY-2002', date: '2023-10-10', amount: '$24.99', status: 'Paid' },
        { id: 'PAY-2003', date: '2023-09-10', amount: '$24.99', status: 'Paid' }
      ]
    }
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Your Pet Insurance Policies
      </Typography>
      
      {/* Policy Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#f8f9fa' }}>
            <CardContent>
              <Typography variant="h6" fontSize={14} color="text.secondary" gutterBottom>
                Active Policies
              </Typography>
              <Typography variant="h4" fontWeight={600} color="#1E3A8A">
                {policies.filter(p => p.status === 'Active').length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#f8f9fa' }}>
            <CardContent>
              <Typography variant="h6" fontSize={14} color="text.secondary" gutterBottom>
                Total Coverage
              </Typography>
              <Typography variant="h4" fontWeight={600} color="#1E3A8A">
                $8,000
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
              <Typography variant="h4" fontWeight={600} color="#1E3A8A">
                $63.98
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
              <Typography variant="h4" fontWeight={600} color="#1E3A8A">
                Dec 15
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Detailed Policy Cards */}
      {policies.map((policy) => (
        <Paper key={policy.id} elevation={2} sx={{ mb: 4, overflow: 'hidden' }}>
          {/* Policy Header */}
          <Box sx={{ p: 3, backgroundColor: '#f1f5f9' }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Avatar sx={{ bgcolor: '#1E3A8A', width: 56, height: 56 }}>
                  <PetsIcon fontSize="large" />
                </Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h5" fontWeight={600}>
                  {policy.petName}'s {policy.planType} Plan
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                    Policy ID: {policy.id}
                  </Typography>
                  <Chip 
                    label={policy.status} 
                    size="small"
                    sx={{ 
                      backgroundColor: policy.status === 'Active' ? '#E3F9E5' : '#FEE2E2',
                      color: policy.status === 'Active' ? '#1B873F' : '#DC2626',
                      fontWeight: 500
                    }}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: '#1E3A8A',
                    '&:hover': { backgroundColor: '#152C6B' }
                  }}
                >
                  View Details
                </Button>
              </Grid>
            </Grid>
          </Box>
          
          {/* Policy Details */}
          <Box sx={{ p: 3 }}>
            <Grid container spacing={4}>
              {/* Left Column - Policy Info */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Policy Information
                </Typography>
                <List dense disablePadding>
                  <ListItem sx={{ py: 1 }}>
                    <ListItemIcon>
                      <PetsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Pet Details" 
                      secondary={`${policy.petName} - ${policy.petType}, ${policy.breed}`} 
                    />
                  </ListItem>
                  <ListItem sx={{ py: 1 }}>
                    <ListItemIcon>
                      <DescriptionIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Plan Type" 
                      secondary={policy.planType} 
                    />
                  </ListItem>
                  <ListItem sx={{ py: 1 }}>
                    <ListItemIcon>
                      <HealthAndSafetyIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Coverage Amount" 
                      secondary={policy.coverageAmount} 
                    />
                  </ListItem>
                  <ListItem sx={{ py: 1 }}>
                    <ListItemIcon>
                      <ReceiptIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Monthly Premium" 
                      secondary={policy.premium} 
                    />
                  </ListItem>
                  <ListItem sx={{ py: 1 }}>
                    <ListItemIcon>
                      <EventIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Start Date" 
                      secondary={new Date(policy.startDate).toLocaleDateString()} 
                    />
                  </ListItem>
                  <ListItem sx={{ py: 1 }}>
                    <ListItemIcon>
                      <EventIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Next Payment" 
                      secondary={new Date(policy.nextPayment).toLocaleDateString()} 
                    />
                  </ListItem>
                </List>
              </Grid>
              
              {/* Right Column - Coverage Details */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Coverage Details
                </Typography>
                <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f1f5f9' }}>
                        <TableCell>Coverage Type</TableCell>
                        <TableCell>Covered</TableCell>
                        <TableCell>Limit</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {policy.coverages.map((coverage, index) => (
                        <TableRow key={index} hover>
                          <TableCell>{coverage.name}</TableCell>
                          <TableCell>
                            {coverage.covered ? 
                              <CheckCircleIcon sx={{ color: '#1B873F', fontSize: 20 }} /> : 
                              '—'
                            }
                          </TableCell>
                          <TableCell>{coverage.limit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
                <Typography variant="subtitle2" gutterBottom>
                  Recent Payments
                </Typography>
                <TableContainer component={Paper} variant="outlined">
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f1f5f9' }}>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {policy.paymentHistory.slice(0, 3).map((payment) => (
                        <TableRow key={payment.id} hover>
                          <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                          <TableCell>{payment.amount}</TableCell>
                          <TableCell>
                            <Chip 
                              label={payment.status} 
                              size="small"
                              sx={{ 
                                backgroundColor: '#E0F2F1',
                                color: '#00796B',
                                fontSize: '0.7rem'
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button variant="outlined" sx={{ mr: 1 }}>
                Download Policy
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#1E3A8A',
                  '&:hover': { backgroundColor: '#152C6B' }
                }}
              >
                File a Claim
              </Button>
            </Box>
          </Box>
        </Paper>
      ))}
      
      {/* Add New Policy Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#1E3A8A',
            '&:hover': { backgroundColor: '#152C6B' },
            px: 4
          }}
        >
          Add New Pet Insurance Policy
        </Button>
      </Box>
    </Box>
  );
};

export default PolicyPage;
