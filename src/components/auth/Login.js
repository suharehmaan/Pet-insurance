
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
  Card,
  CardContent
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  LockOutlined, 
  EmailOutlined,
  Facebook,
  Google,
  Twitter
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDemoLogin = async () => {
    setError('');
    setIsSubmitting(true);
    
    try {
      const result = await login('demo@example.com', 'password');
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error || 'Demo login failed');
      }
    } catch (err) {
      setError('An error occurred during demo login');
      console.error(err);
    } finally {
      setIsSubmitting(false);
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
          {/* Left side with image */}
          <Grid item xs={12} md={6}>
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
                Pet Insurance
              </Typography>
              <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                Protect your furry friends with our comprehensive pet insurance plans.
              </Typography>
              <Box 
                component="img"
                src="https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=740&t=st=1677490383~exp=1677490983~hmac=3df95e7ea69b0c983566e5262d460c6e6a1532d1b482db17d995d88d50892ff6"
                alt="Pets Illustration"
                sx={{ 
                  width: '80%',
                  maxWidth: 300,
                  height: 'auto',
                  borderRadius: 2
                }}
              />
            </Box>
          </Grid>
          
          {/* Right side with login form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: 'white', height: '100%' }}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Welcome Back
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Sign in to access your comprehensive pet insurance dashboard and manage your policies
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
              
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}
              
              <form onSubmit={handleSubmit}>
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
                  autoComplete="current-password"
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
                />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 2 }}>
                  <Link component="button" variant="body2" underline="hover">
                    Forgot password?
                  </Link>
                </Box>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ 
                    mt: 1, 
                    mb: 2,
                    py: 1.5,
                    backgroundColor: '#1E3A8A',
                    '&:hover': { backgroundColor: '#152C6B' }
                  }}
                >
                  {isSubmitting ? <CircularProgress size={24} /> : 'Sign In'}
                </Button>
                
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleDemoLogin}
                  disabled={isSubmitting}
                  sx={{ mb: 3 }}
                >
                  Demo Login
                </Button>
              </form>
              
              <Divider sx={{ my: 2 }}>
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
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/register" underline="hover" fontWeight={500}>
                    Sign Up
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

export default Login;
