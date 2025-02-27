import React from "react";
import { Box, Typography, Grid, Paper, Card, CardContent } from "@mui/material";
import ReceiptIcon from '@mui/icons-material/Receipt';

const ClaimsPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Claims Management
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Recent Claims
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <ReceiptIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                      <Typography variant="h6">Annual Checkup</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">Date: Sept 15, 2023</Typography>
                    <Typography variant="body2" color="text.secondary">Amount: $250.00</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main', mt: 1 }}>
                      Status: Approved
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <ReceiptIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                      <Typography variant="h6">Vaccination</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">Date: Oct 10, 2023</Typography>
                    <Typography variant="body2" color="text.secondary">Amount: $175.50</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'warning.main', mt: 1 }}>
                      Status: Pending
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

export default ClaimsPage;
import React, { useState } from "react";
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
  TablePagination,
  Button,
  Chip,
  IconButton,
  Card,
  CardContent,
  Grid
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FilterListIcon from '@mui/icons-material/FilterList';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TimerIcon from '@mui/icons-material/Timer';

const ClaimsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const claims = [
    { 
      id: 'CLM-001', 
      date: '2023-08-15', 
      pet: 'Max', 
      service: 'Annual Checkup', 
      amount: 250.00, 
      status: 'Approved', 
      provider: 'PetCare Clinic'
    },
    { 
      id: 'CLM-002', 
      date: '2023-09-02', 
      pet: 'Luna', 
      service: 'Vaccination', 
      amount: 120.50, 
      status: 'Pending', 
      provider: 'City Vet Hospital'
    },
    { 
      id: 'CLM-003', 
      date: '2023-09-10', 
      pet: 'Buddy', 
      service: 'X-Ray', 
      amount: 350.75, 
      status: 'In Review', 
      provider: 'Animal Emergency Center'
    },
    { 
      id: 'CLM-004', 
      date: '2023-09-18', 
      pet: 'Max', 
      service: 'Dental Cleaning', 
      amount: 290.00, 
      status: 'Approved', 
      provider: 'PetCare Clinic'
    },
    { 
      id: 'CLM-005', 
      date: '2023-09-25', 
      pet: 'Luna', 
      service: 'Allergy Treatment', 
      amount: 185.25, 
      status: 'Rejected', 
      provider: 'City Vet Hospital'
    },
    { 
      id: 'CLM-006', 
      date: '2023-10-05', 
      pet: 'Buddy', 
      service: 'Grooming', 
      amount: 95.00, 
      status: 'Pending', 
      provider: 'PetStyle Grooming'
    },
    { 
      id: 'CLM-007', 
      date: '2023-10-12', 
      pet: 'Max', 
      service: 'Prescription Medication', 
      amount: 75.50, 
      status: 'Approved', 
      provider: 'PetCare Pharmacy'
    },
  ];

  const getStatusChip = (status) => {
    switch(status) {
      case 'Approved':
        return <Chip icon={<CheckCircleIcon />} label={status} color="success" size="small" />;
      case 'Pending':
        return <Chip icon={<PendingIcon />} label={status} color="warning" size="small" />;
      case 'Rejected':
        return <Chip icon={<CancelIcon />} label={status} color="error" size="small" />;
      case 'In Review':
        return <Chip icon={<TimerIcon />} label={status} color="info" size="small" />;
      default:
        return <Chip label={status} size="small" />;
    }
  };

  // Summary stats
  const approvedClaims = claims.filter(c => c.status === 'Approved').length;
  const pendingClaims = claims.filter(c => c.status === 'Pending' || c.status === 'In Review').length;
  const rejectedClaims = claims.filter(c => c.status === 'Rejected').length;
  const totalAmount = claims.filter(c => c.status === 'Approved').reduce((sum, claim) => sum + claim.amount, 0);

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight={600}>
          Claims History
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            bgcolor: '#1E3A8A', 
            '&:hover': { bgcolor: '#152c69' }
          }}
        >
          Submit New Claim
        </Button>
      </Box>

      {/* Claims Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f0f7ff' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Claims</Typography>
              <Typography variant="h4">{claims.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f0fff4' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Approved</Typography>
              <Typography variant="h4">{approvedClaims}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#fff7e6' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Pending</Typography>
              <Typography variant="h4">{pendingClaims}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#fff5f5' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Reimbursed</Typography>
              <Typography variant="h4">${totalAmount.toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Claims Table */}
      <Paper elevation={2} sx={{ width: '100%', overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant="h6" fontWeight={600}>Recent Claims</Typography>
          <Box>
            <IconButton size="small" sx={{ mr: 1 }}>
              <SearchIcon />
            </IconButton>
            <IconButton size="small" sx={{ mr: 1 }}>
              <FilterListIcon />
            </IconButton>
            <IconButton size="small">
              <FileDownloadIcon />
            </IconButton>
          </Box>
        </Box>
        
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="claims table">
            <TableHead>
              <TableRow>
                <TableCell>Claim ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Pet</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {claims
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((claim) => (
                <TableRow hover key={claim.id}>
                  <TableCell component="th" scope="row">
                    {claim.id}
                  </TableCell>
                  <TableCell>{new Date(claim.date).toLocaleDateString()}</TableCell>
                  <TableCell>{claim.pet}</TableCell>
                  <TableCell>{claim.service}</TableCell>
                  <TableCell>${claim.amount.toFixed(2)}</TableCell>
                  <TableCell>{getStatusChip(claim.status)}</TableCell>
                  <TableCell>{claim.provider}</TableCell>
                  <TableCell align="right">
                    <Button size="small" color="primary">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={claims.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ClaimsPage;
