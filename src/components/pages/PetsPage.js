import React from "react";
import { Box, Typography, Grid, Paper, Card, CardContent } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';

const PetsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        My Pets
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Pet Profiles
            </Typography>
            <Grid container spacing={3}>
              {/*This section will be populated with pet data from the original code's state, 
              using a similar structure to the original but with the simplified display of the edited code.*/}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <PetsIcon color="primary" sx={{ mr: 2, fontSize: 40 }} />
                    <Box>
                      <Typography variant="h6">Max</Typography>
                      <Typography variant="body2">Labrador, 3 years old</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              {/*Adding more pet profiles here based on the original's pet data.*/}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetsPage;