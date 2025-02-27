import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  TextField,
  InputAdornment,
  Tabs,
  Tab
} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';

const SupportPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch(tabValue) {
      case 0: // Contact
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#f5f5f5', height: '100%' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6">Phone Support</Typography>
                    <Typography variant="body2">1-800-PET-HELP</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Available Monday to Friday, 9AM - 5PM EST
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#f5f5f5', height: '100%' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <ChatIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6">Live Chat</Typography>
                    <Typography variant="body2">Chat with our support team</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Available 24/7
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#f5f5f5', height: '100%' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <HelpIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6">Email Support</Typography>
                    <Typography variant="body2">support@petinsurance.com</Typography>
                    <Typography variant="body2" color="text.secondary">
                      We typically respond within 24 hours
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );

      case 1: // FAQs
        return (
          <Box>
            <Box sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              <TextField
                fullWidth
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Box>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">How do I submit a claim?</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  You can submit a claim by logging into your account and navigating to the Claims section. 
                  Upload your vet invoice and fill out the required information. 
                  Claims are typically processed within 5-7 business days.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">What does my policy cover?</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Our comprehensive policy covers accidents, illnesses, surgeries, medications, and chronic conditions. 
                  Wellness care is available as an add-on to your policy. For specific details about your coverage, 
                  please refer to your policy documents or contact customer support.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );

      default:
        return (
          <Typography>
            Content for tab {tabValue}
          </Typography>
        );
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Support Center
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          sx={{ mb: 3 }}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Contact Us" />
          <Tab label="FAQs" />
          <Tab label="Help Center" />
        </Tabs>

        {renderTabContent()}
      </Paper>
    </Box>
  );
};

export default SupportPage;