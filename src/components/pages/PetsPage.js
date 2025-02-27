
import React, { useState } from 'react';
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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';

const PetsPage = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Max',
      species: 'Dog',
      breed: 'Labrador',
      age: 3,
      weight: '68 lbs',
      color: 'Golden',
      microchipId: 'MC-123456789',
      lastCheckup: '2023-09-15',
      vaccinations: ['Rabies', 'DHPP', 'Bordetella'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Bella',
      species: 'Cat',
      breed: 'Siamese',
      age: 2,
      weight: '12 lbs',
      color: 'Cream',
      microchipId: 'MC-987654321',
      lastCheckup: '2023-10-10',
      vaccinations: ['Rabies', 'FVRCP', 'FeLV'],
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight={600}>My Pets</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            backgroundColor: '#1E3A8A',
            '&:hover': { backgroundColor: '#152C6B' }
          }}
        >
          Add New Pet
        </Button>
      </Box>
      
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
                      objectFit: 'cover',
                      minHeight: '250px'
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PetsIcon sx={{ mr: 1, color: '#1E3A8A' }} />
                      <Typography variant="h5" fontWeight={600}>{pet.name}</Typography>
                    </Box>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Species</Typography>
                        <Typography variant="body1">{pet.species}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Breed</Typography>
                        <Typography variant="body1">{pet.breed}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Age</Typography>
                        <Typography variant="body1">{pet.age} years</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Weight</Typography>
                        <Typography variant="body1">{pet.weight}</Typography>
                      </Grid>
                    </Grid>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <MedicalServicesIcon sx={{ mr: 1, fontSize: 20, color: '#1E3A8A' }} />
                        <Typography variant="subtitle2">Vaccinations</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {pet.vaccinations.map((vax, index) => (
                          <Chip 
                            key={index} 
                            label={vax} 
                            size="small" 
                            sx={{ backgroundColor: '#E3F2FD' }}
                          />
                        ))}
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarMonthIcon sx={{ mr: 1, fontSize: 20, color: '#1E3A8A' }} />
                      <Typography variant="body2">
                        Last checkup: {new Date(pet.lastCheckup).toLocaleDateString()}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                      <Button size="small" sx={{ mr: 1 }}>Edit</Button>
                      <Button 
                        size="small" 
                        variant="contained"
                        sx={{ 
                          backgroundColor: '#1E3A8A',
                          '&:hover': { backgroundColor: '#152C6B' }
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PetsPage;
