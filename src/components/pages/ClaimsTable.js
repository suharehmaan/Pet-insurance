
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Chip
} from "@mui/material";

const claims = [
  { id: "C123", date: "2024-02-20", status: "Approved", amount: "$500" },
  { id: "C124", date: "2024-02-18", status: "Pending", amount: "$700" },
  { id: "C125", date: "2024-02-15", status: "Rejected", amount: "$300" },
  { id: "C126", date: "2024-02-10", status: "Approved", amount: "$850" },
];

const ClaimsTable = () => {
  const getStatusChip = (status) => {
    let color = "default";
    
    switch(status) {
      case "Approved":
        color = "success";
        break;
      case "Pending":
        color = "warning";
        break;
      case "Rejected":
        color = "error";
        break;
      default:
        color = "default";
    }
    
    return (
      <Chip 
        label={status} 
        color={color} 
        size="small" 
        sx={{ minWidth: 80, fontWeight: 500 }}
      />
    );
  };
  
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #eee', borderRadius: 2 }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Claim ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claims.map((claim) => (
            <TableRow key={claim.id} hover>
              <TableCell>{claim.id}</TableCell>
              <TableCell>{claim.date}</TableCell>
              <TableCell>{getStatusChip(claim.status)}</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>{claim.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClaimsTable;
