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
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Divider, 
  Chip,
  Avatar,
  IconButton,
  Tooltip
} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScaleIcon from '@mui/icons-material/Scale';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const PetsPage = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Max",
      species: "Dog",
      breed: "Labrador Retriever",
      age: 3,
      weight: "30 kg",
      healthStatus: "Excellent",
      lastCheckup: "2023-05-10",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Luna",
      species: "Cat",
      breed: "Siamese",
      age: 2,
      weight: "5 kg",
      healthStatus: "Good",
      lastCheckup: "2023-07-15",
      image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Buddy",
      species: "Dog",
      breed: "Golden Retriever",
      age: 5,
      weight: "32 kg",
      healthStatus: "Good",
      lastCheckup: "2023-06-20",
      image: "https://images.unsplash.com/photo-1633722715438-967bdf81d073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]);

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight={600}>
          Your Pets
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            bgcolor: '#1E3A8A', 
            '&:hover': { bgcolor: '#152c69' }
          }}
        >
          Add New Pet
        </Button>
      </Box>

      {/* Pets Grid */}
      <Grid container spacing={3}>
        {pets.map((pet) => (
          <Grid item xs={12} md={6} lg={4} key={pet.id}>
            <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={pet.image}
                alt={pet.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h5" component="div" fontWeight={600}>
                    {pet.name}
                  </Typography>
                  <Tooltip title="Edit Pet Details">
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                
                <Chip 
                  icon={<PetsIcon />} 
                  label={`${pet.species} - ${pet.breed}`} 
                  sx={{ mb: 2, bgcolor: '#f0f7ff' }} 
                />
                
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: '#e0f2fe', width: 32, height: 32, mr: 1 }}>
                        <FavoriteIcon fontSize="small" color="primary" />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" color="text.secondary">Age</Typography>
                        <Typography variant="body1">{pet.age} years</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: '#e0f2fe', width: 32, height: 32, mr: 1 }}>
                        <ScaleIcon fontSize="small" color="primary" />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" color="text.secondary">Weight</Typography>
                        <Typography variant="body1">{pet.weight}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: '#e0f2fe', width: 32, height: 32, mr: 1 }}>
                        <HealthAndSafetyIcon fontSize="small" color="primary" />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" color="text.secondary">Health</Typography>
                        <Typography variant="body1">{pet.healthStatus}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: '#e0f2fe', width: 32, height: 32, mr: 1 }}>
                        <CalendarMonthIcon fontSize="small" color="primary" />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" color="text.secondary">Last Checkup</Typography>
                        <Typography variant="body1">{new Date(pet.lastCheckup).toLocaleDateString()}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              
              <Divider />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Button size="small" color="primary">View Records</Button>
                <Button size="small" color="primary">Schedule Visit</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PetsPage;
