import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Grid,
  Link,
  InputAdornment,
  IconButton,
  CircularProgress,
  Alert,
  Divider,
  Checkbox,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  LockOutlined, 
  EmailOutlined, 
  PersonOutlined,
  Facebook,
  Google,
  Twitter,
  ChevronRight,
  ChevronLeft,
  Check
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const steps = ['Account Information', 'Personal Details', 'Pet Information'];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      // Validate first step
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all required fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    } else if (activeStep === 1) {
      // Validate second step
      if (!formData.firstName || !formData.lastName) {
        setError('Please fill in all required fields');
        return;
      }
    }

    setError('');
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Mock successful registration
      setTimeout(() => {
        setIsSubmitting(false);
        // In a real app, navigate to a success page or login
        navigate('/login');
      }, 1500);
    } catch (err) {
      setError('An error occurred during registration');
      console.error(err);
      setIsSubmitting(false);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText="Password must be at least 8 characters with a number and special character"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              id="confirm-password"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={formData.password !== formData.confirmPassword && formData.confirmPassword !== ''}
              helperText={formData.password !== formData.confirmPassword && formData.confirmPassword !== '' ? "Passwords don't match" : ""}
            />
          </>
        );
      case 1:
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="address"
              label="Street Address"
              name="address"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="address-level2"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="address-level1"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="zipCode"
                  label="Zip Code"
                  name="zipCode"
                  autoComplete="postal-code"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Tell us about your pet
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="petName"
              label="Pet's Name"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  select
                  id="petType"
                  label="Pet Type"
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value=""></option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="petBreed"
                  label="Breed"
                  name="petBreed"
                  value={formData.petBreed}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              fullWidth
              id="petAge"
              label="Pet's Age (years)"
              name="petAge"
              type="number"
              value={formData.petAge}
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox 
                  checked={formData.termsAccepted} 
                  onChange={handleChange} 
                  name="termsAccepted" 
                />
              }
              label={
                <Typography variant="body2">
                  I agree to the{' '}
                  <Link component="button" variant="body2">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link component="button" variant="body2">
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f7fb',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={0} sx={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          {/* Left side with image (hidden on small screens) */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box 
              sx={{ 
                backgroundColor: '#1E3A8A',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                color: 'white'
              }}
            >
              <Box 
                component="img"
                src="/logo.webp"
                alt="Pet Insurance Logo"
                sx={{ 
                  width: 150,
                  height: 'auto',
                  mb: 3
                }}
              />
              <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
                Join Our Family
              </Typography>
              <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                Create an account to get started with protecting your pet today.
              </Typography>
              <Box 
                component="img"
                src="https://img.freepik.com/free-vector/pet-care-concept-illustration_114360-1294.jpg?w=740&t=st=1677493060~exp=1677493660~hmac=ec1cb3a5a5233c067204f57861a5268b7ed51eaf2207aac52c05a6c11086ce8d"
                alt="Pet Care Illustration"
                sx={{ 
                  width: '80%',
                  maxWidth: 280,
                  height: 'auto',
                  borderRadius: 2
                }}
              />
            </Box>
          </Grid>

          {/* Right side with registration form */}
          <Grid item xs={12} md={7}>
            <Box sx={{ p: 4, backgroundColor: 'white' }}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Create Account
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Join thousands of pet owners who trust us with their pet's health and protection
              </Typography>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <Box 
                  component="img"
                  src="/logo.webp"
                  alt="Pet Insurance Logo"
                  sx={{ 
                    width: 80,
                    height: 'auto',
                    display: { xs: 'block', md: 'none' }
                  }}
                />
              </Box>

              {/* Stepper */}
              <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                {getStepContent(activeStep)}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    startIcon={<ChevronLeft />}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{ 
                        backgroundColor: '#1E3A8A',
                        '&:hover': { backgroundColor: '#152C6B' }
                      }}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : 'Create Account'}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      endIcon={<ChevronRight />}
                      sx={{ 
                        backgroundColor: '#1E3A8A',
                        '&:hover': { backgroundColor: '#152C6B' }
                      }}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </form>

              {activeStep === 0 && (
                <>
                  <Divider sx={{ my: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      OR
                    </Typography>
                  </Divider>

                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={4}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Google />}
                        sx={{ borderColor: '#DB4437', color: '#DB4437' }}
                      >
                        Google
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Facebook />}
                        sx={{ borderColor: '#4267B2', color: '#4267B2' }}
                      >
                        Facebook
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Twitter />}
                        sx={{ borderColor: '#1DA1F2', color: '#1DA1F2' }}
                      >
                        Twitter
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?{' '}
                  <Link component={RouterLink} to="/login" underline="hover" fontWeight={500}>
                    Sign In
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;