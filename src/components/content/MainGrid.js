import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import PolicySummary from '../pages/PolicySummary';
import QuickActions from '../pages/QuickActions';
import ClaimsOverview from '../pages/ClaimsOverview';
import Insights from '../pages/Insights';
import Support from '../pages/Support';

const MainGrid = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {/* Policy Summary */}
      <Grid item xs={12} md={8}>
        <Typography variant="h5" gutterBottom>
          Policy Summary
        </Typography>
        <PolicySummary />
      </Grid>

      {/* Quick Actions */}
      <Grid item xs={12} md={8}>
        <Typography variant="h5" gutterBottom>
          Quick Actions
        </Typography>
        <QuickActions />
      </Grid>

      {/* Claims Overview */}
      <Grid item xs={12} md={8}>
        <Typography variant="h5" gutterBottom>
          Claims Overview
        </Typography>
        <ClaimsOverview />
      </Grid>

      {/* Insights */}
      <Grid item xs={12} md={4}>
        <Typography variant="h5" gutterBottom>
          Personalized Insights
        </Typography>
        <Insights />
      </Grid>

      {/* Support */}
      <Grid item xs={12}>
        <Support />
      </Grid>
    </Grid>
  );
};

export default MainGrid;