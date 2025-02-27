import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Chip,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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

  // Sample claims data
  const claims = [
    { id: "CLM-12345", pet: "Max", date: "2023-05-15", amount: 250.00, status: "Approved", type: "Wellness" },
    { id: "CLM-12346", pet: "Bella", date: "2023-05-10", amount: 425.50, status: "Pending", type: "Illness" },
    { id: "CLM-12347", pet: "Charlie", date: "2023-05-05", amount: 780.25, status: "Approved", type: "Injury" },
    { id: "CLM-12348", pet: "Lucy", date: "2023-04-28", amount: 150.00, status: "Denied", type: "Wellness" },
    { id: "CLM-12349", pet: "Cooper", date: "2023-04-20", amount: 560.75, status: "Approved", type: "Illness" },
    { id: "CLM-12350", pet: "Luna", date: "2023-04-15", amount: 325.40, status: "Pending", type: "Injury" },
    { id: "CLM-12351", pet: "Bailey", date: "2023-04-10", amount: 190.30, status: "Approved", type: "Wellness" },
  ];

  const getStatusChipColor = (status) => {
    switch (status) {
      case "Approved": return "success";
      case "Pending": return "warning";
      case "Denied": return "error";
      default: return "default";
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Claims History
      </Typography>

      <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search claims"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                defaultValue="all"
              >
                <MenuItem value="all">All Statuses</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="denied">Denied</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Claim Type</InputLabel>
              <Select
                label="Claim Type"
                defaultValue="all"
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="wellness">Wellness</MenuItem>
                <MenuItem value="illness">Illness</MenuItem>
                <MenuItem value="injury">Injury</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><Typography fontWeight={600}>Claim ID</Typography></TableCell>
                <TableCell><Typography fontWeight={600}>Pet</Typography></TableCell>
                <TableCell><Typography fontWeight={600}>Date</Typography></TableCell>
                <TableCell><Typography fontWeight={600}>Amount</Typography></TableCell>
                <TableCell><Typography fontWeight={600}>Type</Typography></TableCell>
                <TableCell><Typography fontWeight={600}>Status</Typography></TableCell>
                <TableCell><Typography fontWeight={600}>Actions</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {claims
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((claim) => (
                  <TableRow key={claim.id} hover>
                    <TableCell>{claim.id}</TableCell>
                    <TableCell>{claim.pet}</TableCell>
                    <TableCell>{claim.date}</TableCell>
                    <TableCell>${claim.amount.toFixed(2)}</TableCell>
                    <TableCell>{claim.type}</TableCell>
                    <TableCell>
                      <Chip 
                        label={claim.status} 
                        color={getStatusChipColor(claim.status)} 
                        size="small" 
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined">Details</Button>
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

      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
      >
        File New Claim
      </Button>
    </Box>
  );
};

export default ClaimsPage;