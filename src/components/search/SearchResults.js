
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  TextField, 
  InputAdornment,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Alert,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import { Search as SearchIcon, Clear, Pets } from '@mui/icons-material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchPolicies } from '../../services/apiService';
import { fetchPets } from '../../services/apiService';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(searchQuery);
      performSearch(searchQuery);
    }
    
    // Load pets for display
    const loadPets = async () => {
      const petsData = await fetchPets();
      setPets(petsData);
    };
    
    loadPets();
  }, [searchParams]);

  const performSearch = async (searchText) => {
    if (!searchText.trim()) return;
    
    setLoading(true);
    try {
      const data = await searchPolicies(searchText);
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Update URL params and trigger search
    setSearchParams({ q: query });
    performSearch(query);
  };

  const getPetDetails = (petId) => {
    return pets.find(pet => pet.id === petId) || {};
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'expired':
        return 'error';
      case 'pending renewal':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 3 }}>
        <Typography variant="h4" gutterBottom>
          Search Results
        </Typography>
        
        {/* Search Form */}
        <Paper 
          component="form" 
          onSubmit={handleSearch}
          sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center' }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search policies, pets, claims..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: query && (
                <InputAdornment position="end">
                  <IconButton 
                    onClick={() => {
                      setQuery('');
                      setResults([]);
                      setSearchParams({});
                    }}
                  >
                    <Clear />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Paper>
        
        {/* Results */}
        {loading ? (
          <Box display="flex" justifyContent="center" sx={{ py: 5 }}>
            <CircularProgress />
          </Box>
        ) : results.length > 0 ? (
          <Grid container spacing={3}>
            {results.map(policy => {
              const pet = getPetDetails(policy.petId);
              return (
                <Grid item xs={12} md={6} key={policy.id}>
                  <Card 
                    sx={{ 
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6
                      }
                    }}
                    onClick={() => navigate(`/policy/${policy.id}`)}
                  >
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        <Typography variant="h6">
                          {pet.name || 'Unknown Pet'}
                        </Typography>
                        <Chip 
                          label={policy.status} 
                          color={getStatusColor(policy.status)}
                          size="small"
                        />
                      </Box>
                      
                      <Box display="flex" alignItems="center" mb={2}>
                        <Pets sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body2" color="textSecondary">
                          {pet.breed || 'Unknown'} {pet.type || ''}
                        </Typography>
                      </Box>
                      
                      <Divider sx={{ my: 1 }} />
                      
                      <List dense disablePadding>
                        <ListItem disableGutters>
                          <ListItemText 
                            primary="Policy Type" 
                            secondary={policy.type} 
                          />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText 
                            primary="Coverage Limit" 
                            secondary={`$${policy.coverageLimit.toLocaleString()}`} 
                          />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText 
                            primary="Monthly Premium" 
                            secondary={`$${policy.monthlyPremium.toLocaleString()}`} 
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        ) : searchParams.get('q') ? (
          <Alert severity="info" sx={{ mt: 2 }}>
            No results found for "{searchParams.get('q')}". Please try different keywords.
          </Alert>
        ) : null}
      </Box>
    </Container>
  );
};

export default SearchResults;
