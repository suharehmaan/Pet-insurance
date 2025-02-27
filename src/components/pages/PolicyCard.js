
import * as React from 'react';
import { Card, CardContent, Typography, Grid, Box, Avatar } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const PolicyCard = () => {
  return (
    <Card sx={{ border: 'none', boxShadow: 'none' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar 
              src="/pet-avatar.jpg" 
              alt="Buddy" 
              sx={{ 
                width: 120, 
                height: 120,
                border: '3px solid #f0f0f0',
              }}
            >
              <PetsIcon sx={{ fontSize: 60 }} />
            </Avatar>
          </Grid>
          
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">Pet Information</Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6">Buddy</Typography>
                  <Typography>Golden Retriever, Dog</Typography>
                  <Typography>Age: 3 years</Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">Plan Details</Typography>
                <Box>
                  <Typography><strong>Plan Type:</strong> Comprehensive</Typography>
                  <Typography><strong>Coverage Limit:</strong> $10,000</Typography>
                  <Typography><strong>Deductibles:</strong> $500</Typography>
                  <Typography><strong>Renewal Date:</strong> Jan 15, 2025</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PolicyCard;
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Chip,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Pets, Paid, Assignment, Info } from '@mui/icons-material';

const PolicyCard = ({ policy, pet }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!policy || !pet) {
    return (
      <Box>
        <Skeleton variant="rectangular" height={200} />
      </Box>
    );
  }

  // Format date strings
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Pet Information */}
        <Grid item xs={12} md={4}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              p: 2
            }}
          >
            <Avatar 
              src={pet.image} 
              alt={pet.name} 
              sx={{ 
                width: 120, 
                height: 120, 
                mb: 2,
                border: '3px solid #f0f0f0',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            >
              <Pets sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant="h5" gutterBottom>{pet.name}</Typography>
            <Typography variant="body1" color="textSecondary">
              {pet.breed} • {pet.type}
            </Typography>
            <Chip 
              icon={<Info />} 
              label={`${pet.age} years old`} 
              size="small" 
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Box>
        </Grid>

        {/* Policy Information */}
        <Grid item xs={12} md={8}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Coverage Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Assignment color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle1">Plan Information</Typography>
                  </Box>
                  <List dense disablePadding>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Plan Type" 
                        secondary={policy.type}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Start Date" 
                        secondary={formatDate(policy.startDate)}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="End Date" 
                        secondary={formatDate(policy.endDate)}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Paid color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle1">Financial Details</Typography>
                  </Box>
                  <List dense disablePadding>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Coverage Limit" 
                        secondary={`$${policy.coverageLimit.toLocaleString()}`}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Deductible" 
                        secondary={`$${policy.deductible.toLocaleString()}`}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Monthly Premium" 
                        secondary={`$${policy.monthlyPremium.toLocaleString()}`}
                        primaryTypographyProps={{ fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontWeight: 'bold', color: 'primary.main' }}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PolicyCard;
