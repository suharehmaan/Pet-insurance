
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Tab,
  Tabs,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import ReceiptIcon from '@mui/icons-material/Receipt';

const ClaimsPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Mock data for claims
  const claims = [
    {
      id: 'CLM-1001',
      date: '2023-11-15',
      pet: 'Max',
      provider: 'City Vet Clinic',
      amount: 250.00,
      status: 'Approved',
      description: 'Annual checkup and vaccinations'
    },
    {
      id: 'CLM-1002',
      date: '2023-10-22',
      pet: 'Bella',
      provider: 'PetCare Hospital',
      amount: 175.50,
      status: 'Pending',
      description: 'Treatment for ear infection'
    },
    {
      id: 'CLM-1003',
      date: '2023-09-30',
      pet: 'Max',
      provider: 'Emergency Pet Hospital',
      amount: 750.00,
      status: 'In Review',
      description: 'X-ray and pain medication for limping'
    },
    {
      id: 'CLM-1004',
      date: '2023-08-12',
      pet: 'Max',
      provider: 'City Vet Clinic',
      amount: 120.00,
      status: 'Paid',
      description: 'Dental cleaning'
    },
    {
      id: 'CLM-1005',
      date: '2023-07-05',
      pet: 'Bella',
      provider: 'PetCare Hospital',
      amount: 80.00,
      status: 'Denied',
      description: 'Grooming services (not covered)'
    }
  ];
  
  // Filter claims based on search query and status
  const filteredClaims = claims.filter(claim => {
    const matchesSearch = 
      claim.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.pet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = statusFilter === 'all' || claim.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });
  
  // Display different claims based on tab
  const getClaimsForTab = (tabIndex) => {
    switch(tabIndex) {
      case 0: // All claims
        return filteredClaims;
      case 1: // Active claims
        return filteredClaims.filter(claim => 
          ['Pending', 'In Review'].includes(claim.status)
        );
      case 2: // Completed claims
        return filteredClaims.filter(claim => 
          ['Approved', 'Paid', 'Denied'].includes(claim.status)
        );
      default:
        return filteredClaims;
    }
  };
  
  // Helper function to get status chip color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Approved':
        return { bg: '#E3F9E5', text: '#1B873F' };
      case 'Pending':
        return { bg: '#FFF8E6', text: '#D97706' };
      case 'In Review':
        return { bg: '#EFF6FF', text: '#2563EB' };
      case 'Paid':
        return { bg: '#E0F2F1', text: '#00796B' };
      case 'Denied':
        return { bg: '#FEE2E2', text: '#DC2626' };
      default:
        return { bg: '#F3F4F6', text: '#6B7280' };
    }
  };
  
  // Summary card data
  const summaryData = [
    { title: 'Total Claims', value: claims.length, color: '#1E3A8A' },
    { title: 'Approved Claims', value: claims.filter(c => c.status === 'Approved').length, color: '#1B873F' },
    { title: 'Pending Claims', value: claims.filter(c => c.status === 'Pending').length, color: '#D97706' },
    { title: 'Total Reimbursed', value: `$${claims.filter(c => c.status === 'Paid').reduce((sum, c) => sum + c.amount, 0).toFixed(2)}`, color: '#00796B' }
  ];
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>Claims Management</Typography>
      
      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: '#f8f9fa' }}>
              <CardContent>
                <Typography variant="h6" fontSize={14} color="text.secondary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h4" fontWeight={600} color={item.color}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Tabs, Search and Filters */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{ mb: { xs: 2, md: 0 } }}
        >
          <Tab label="All Claims" />
          <Tab label="Active Claims" />
          <Tab label="Completed Claims" />
        </Tabs>
        
        <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' } }}>
          <TextField
            size="small"
            placeholder="Search claims..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            sx={{ width: { xs: '100%', md: '250px' } }}
          />
          
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              displayEmpty
              startAdornment={<FilterListIcon sx={{ mr: 1 }} />}
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in review">In Review</MenuItem>
              <MenuItem value="paid">Paid</MenuItem>
              <MenuItem value="denied">Denied</MenuItem>
            </Select>
          </FormControl>
          
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            sx={{ 
              backgroundColor: '#1E3A8A',
              '&:hover': { backgroundColor: '#152C6B' },
              display: { xs: 'none', md: 'flex' }
            }}
          >
            New Claim
          </Button>
        </Box>
      </Box>
      
      {/* Claims Table */}
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: '#f1f5f9' }}>
            <TableRow>
              <TableCell>Claim ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Pet</TableCell>
              <TableCell>Provider</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getClaimsForTab(tabValue).length > 0 ? (
              getClaimsForTab(tabValue).map((claim) => {
                const statusColor = getStatusColor(claim.status);
                return (
                  <TableRow key={claim.id} hover>
                    <TableCell>{claim.id}</TableCell>
                    <TableCell>{new Date(claim.date).toLocaleDateString()}</TableCell>
                    <TableCell>{claim.pet}</TableCell>
                    <TableCell>{claim.provider}</TableCell>
                    <TableCell>${claim.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Chip 
                        label={claim.status} 
                        size="small"
                        sx={{ 
                          backgroundColor: statusColor.bg,
                          color: statusColor.text,
                          fontWeight: 500
                        }}
                      />
                    </TableCell>
                    <TableCell>{claim.description}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <DownloadIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center" sx={{ py: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ReceiptIcon sx={{ fontSize: 60, color: '#e0e0e0', mb: 2 }} />
                    <Typography variant="body1" color="text.secondary">
                      No claims found
                    </Typography>
                    <Button 
                      variant="contained" 
                      startIcon={<AddIcon />} 
                      sx={{ 
                        mt: 2,
                        backgroundColor: '#1E3A8A',
                        '&:hover': { backgroundColor: '#152C6B' } 
                      }}
                    >
                      Submit New Claim
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Mobile Add Button */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 2 }}>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            backgroundColor: '#1E3A8A',
            '&:hover': { backgroundColor: '#152C6B' },
            width: '100%'
          }}
        >
          Submit New Claim
        </Button>
      </Box>
    </Box>
  );
};

export default ClaimsPage;
