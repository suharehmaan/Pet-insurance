import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Divider,
  LinearProgress
} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';

const PetsPage = () => {
  // Mock pet data
  const pets = [
    {
      id: 1,
      name: "Max",
      species: "Dog",
      breed: "Golden Retriever",
      age: 3,
      weight: "65 lbs",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      lastCheckup: "2023-04-15",
      vaccinations: {
        rabies: { status: "Up to date", date: "2023-02-10", nextDue: "2024-02-10" },
        distemper: { status: "Up to date", date: "2023-02-10", nextDue: "2024-02-10" },
        parvo: { status: "Up to date", date: "2023-02-10", nextDue: "2024-02-10" },
      }
    },
    {
      id: 2,
      name: "Bella",
      species: "Cat",
      breed: "Siamese",
      age: 2,
      weight: "10 lbs",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      lastCheckup: "2023-03-20",
      vaccinations: {
        rabies: { status: "Up to date", date: "2023-01-15", nextDue: "2024-01-15" },
        feline_distemper: { status: "Up to date", date: "2023-01-15", nextDue: "2024-01-15" },
        feline_leukemia: { status: "Needed", date: "2022-01-15", nextDue: "2023-01-15" },
      }
    }
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        My Pets
      </Typography>

      <Grid container spacing={3}>
        {pets.map(pet => (
          <Grid item xs={12} md={6} key={pet.id}>
            <Paper elevation={2} sx={{ overflow: 'hidden' }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={pet.image}
                    alt={pet.name}
                    sx={{ 
                      height: '100%', 
                      minHeight: 200,
                      objectFit: 'cover' 
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" fontWeight={600}>
                        {pet.name}
                      </Typography>
                      <Chip 
                        icon={<PetsIcon />} 
                        label={`${pet.species}`} 
                        color="primary" 
                        size="small"
                      />
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Breed</Typography>
                        <Typography variant="body1">{pet.breed}</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="text.secondary">Age</Typography>
                        <Typography variant="body1">{pet.age} years</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="text.secondary">Weight</Typography>
                        <Typography variant="body1">{pet.weight}</Typography>
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      Health Status
                    </Typography>

                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Last check-up: {pet.lastCheckup}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1 }}>Vaccinations:</Typography>

                    {Object.entries(pet.vaccinations).map(([key, value]) => (
                      <Box key={key} sx={{ mt: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2" fontWeight={500}>
                            {key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}
                          </Typography>
                          <Chip 
                            label={value.status} 
                            size="small"
                            color={value.status === 'Up to date' ? 'success' : 'warning'}
                          />
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={value.status === 'Up to date' ? 100 : 30} 
                          color={value.status === 'Up to date' ? 'success' : 'warning'}
                          sx={{ height: 8, borderRadius: 1 }}
                        />
                      </Box>
                    ))}

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                      <Button variant="outlined" size="small">
                        Edit Details
                      </Button>
                      <Button variant="contained" size="small">
                        View Records
                      </Button>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}

        <Grid item xs={12} md={6}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 200,
              border: '2px dashed #ccc'
            }}
          >
            <PetsIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" align="center" gutterBottom>
              Add a New Pet
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              Register another pet to your insurance policy
            </Typography>
            <Button variant="contained" color="primary">
              Add Pet
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetsPage;