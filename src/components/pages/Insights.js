
import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider, Stack } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SavingsIcon from '@mui/icons-material/Savings';

const Insights = () => {
  return (
    <Stack spacing={2}>
      <Card sx={{ backgroundColor: '#f8f9fa', border: '1px solid #eee' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
            <PetsIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" gutterBottom>Pet Care Tips</Typography>
          </Box>
          <Typography variant="body2">
            Regular vet checkups are essential for your Golden Retriever's health. Schedule a dental cleaning every six months for optimal oral health.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: '#f8f9fa', border: '1px solid #eee' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
            <LocalOfferIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" gutterBottom>Discounts on Vet Services</Typography>
          </Box>
          <Typography variant="body2">
            Get 10% off on your next vet visit with our partner clinics. Use code PET10 during checkout at participating locations.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: '#f8f9fa', border: '1px solid #eee' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
            <SavingsIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" gutterBottom>Cost-Saving Recommendations</Typography>
          </Box>
          <Typography variant="body2">
            Upgrading to our premium plan could save you up to $200 annually based on your pet's age and history. Consider bundling with home insurance for additional savings.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Insights;
