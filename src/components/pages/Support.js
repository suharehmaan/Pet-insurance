import * as React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Support = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={1}>
              <HelpIcon color="primary" fontSize="large" sx={{ mr: 1 }} />
              <Typography variant="h6">FAQs</Typography>
            </Box>
            <Typography variant="body2" paragraph>
              Find answers to commonly asked questions about your pet insurance policy, claims process, and coverage details.
            </Typography>
            <Button variant="text" color="primary">
              View FAQs
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon color="primary" fontSize="large" sx={{ mr: 1 }} />
              <Typography variant="h6">Call Us</Typography>
            </Box>
            <Typography variant="body2" paragraph>
              Speak directly with our customer support team at 1-800-PET-HELP (1-800-738-4357). Available Monday to Friday, 9am to 5pm EST.
            </Typography>
            <Button variant="text" color="primary">
              Call Now
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon color="primary" fontSize="large" sx={{ mr: 1 }} />
              <Typography variant="h6">Email Support</Typography>
            </Box>
            <Typography variant="body2" paragraph>
              Send us an email at support@petinsurance.com and we'll get back to you within 24 hours with the information you need.
            </Typography>
            <Button variant="text" color="primary">
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Support;