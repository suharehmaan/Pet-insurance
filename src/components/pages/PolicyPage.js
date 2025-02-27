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