import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import ArticleIcon from '@mui/icons-material/Article';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock FAQ data
  const faqs = [
    {
      question: "How do I file a claim?",
      answer: "To file a claim, navigate to the Claims section and click on 'File New Claim'. Fill out the required information about the treatment your pet received, upload any relevant documents, and submit. Our team will review your claim within 5-7 business days."
    },
    {
      question: "What does my policy cover?",
      answer: "Your specific coverage depends on your policy level. In general, our comprehensive plans cover accidents, illnesses, surgeries, medications, and emergency care. You can view your detailed coverage information in the Policy section. Some exclusions apply, such as pre-existing conditions."
    },
    {
      question: "How is my reimbursement calculated?",
      answer: "After you meet your annual deductible, we reimburse up to 90% of eligible vet bills, depending on your plan. The reimbursement percentage is applied to the actual vet bill or our usual and customary fees, whichever is less. Your policy documents have specific details about your reimbursement structure."
    },
    {
      question: "Can I add another pet to my policy?",
      answer: "Yes! You can add additional pets to your policy by going to the Pets section and clicking 'Add Pet'. Each pet gets their own individual policy and customized premium. Multiple pet households receive a 5% discount on each additional pet."
    },
    {
      question: "How do I update my payment method?",
      answer: "To update your payment information, go to Settings > Payment Methods. You can add a new card, delete old payment methods, or change your default payment method. Your new payment method will be used for all future premium payments."
    }
  ];

  // Mock support categories
  const supportCategories = [
    {
      title: "Claims Help",
      icon: <ReceiptLongIcon fontSize="large" />,
      description: "Get help with filing or tracking claims"
    },
    {
      title: "Policy Information",
      icon: <ArticleIcon fontSize="large" />,
      description: "Understanding coverage and benefits"
    },
    {
      title: "Pet Health",
      icon: <HealthAndSafetyIcon fontSize="large" />,
      description: "Resources for pet health and wellness"
    },
    {
      title: "Account Settings",
      icon: <SettingsIcon fontSize="large" />,
      description: "Manage your account and preferences"
    }
  ];

  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Support Center
      </Typography>

      {/* Search Section */}
      <Paper 
        elevation={2}
        sx={{ 
          p: 4, 
          mb: 4, 
          textAlign: 'center',
          backgroundImage: 'linear-gradient(to right, #e0f2ff, #f0f7ff)',
          borderRadius: 2
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          How can we help you today?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Search our knowledge base or browse common help topics below
        </Typography>

        <TextField
          fullWidth
          placeholder="Search for help topics..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ 
            maxWidth: 600, 
            mx: 'auto',
            bgcolor: 'white',
            borderRadius: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
      </Paper>

      {/* Support Categories */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Help Categories
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {supportCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                textAlign: 'center', 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: 2
              }}
            >
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {category.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {category.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FAQs Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <HelpIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5" fontWeight={600}>
            Frequently Asked Questions
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {faqs.map((faq, index) => (
          <Accordion key={index} disableGutters elevation={0} sx={{ border: '1px solid #e0e0e0', mb: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
              sx={{ backgroundColor: '#f9f9f9' }}
            >
              <Typography fontWeight={500}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button variant="outlined" color="primary">
            View All FAQs
          </Button>
        </Box>
      </Paper>

      {/* Contact Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ContactSupportIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h5" fontWeight={600}>
                Contact Support
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Typography variant="body1" paragraph>
              Can't find what you're looking for? Our support team is ready to assist you.
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <Chip label="Phone" color="primary" size="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="1-800-PET-HELP (1-800-738-4357)" 
                  secondary="Available Monday-Friday, 8am-8pm EST"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Chip label="Email" color="primary" size="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="support@petsinsurance.com" 
                  secondary="We typically respond within 24 hours"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Chip label="Live Chat" color="primary" size="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Chat with a representative" 
                  secondary="Available 24/7 for urgent matters"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Send Us a Message
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>

            <Button 
              variant="contained" 
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
            >
              Submit Message
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SupportPage;