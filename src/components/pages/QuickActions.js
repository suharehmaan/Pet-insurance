
import * as React from 'react';
import { Button, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';

const QuickActions = () => {
  return (
    <Box sx={{ py: 1 }}>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        sx={{ 
          justifyContent: { xs: 'center', sm: 'flex-start' },
          '& .MuiButton-root': { 
            py: 1.5, 
            px: 3,
            borderRadius: 2
          }
        }}
      >
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          sx={{ 
            backgroundColor: '#4caf50',
            '&:hover': { backgroundColor: '#388e3c' },
            fontWeight: 'bold'
          }}
        >
          Intimate a Claim
        </Button>
        
        <Button 
          variant="outlined" 
          color="primary"
          startIcon={<ChangeCircleIcon />}
        >
          Change Policy
        </Button>
        
        <Button 
          variant="outlined" 
          color="primary"
          startIcon={<ReceiptIcon />}
        >
          Reimbursement Status
        </Button>
      </Stack>
    </Box>
  );
};

export default QuickActions;
