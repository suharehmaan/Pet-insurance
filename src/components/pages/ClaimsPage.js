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