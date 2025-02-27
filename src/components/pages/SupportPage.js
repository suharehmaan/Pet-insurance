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
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const SupportPage = () => {
  // Sample FAQs
  const faqs = [
    {
      question: "How do I submit a claim?",
      answer: "You can submit a claim through our online portal by clicking on 'Claims' in the sidebar, then 'Submit New Claim'. Alternatively, you can use our mobile app or email the claim details to claims@petinsurance.com."
    },
    {
      question: "How long does it take to process a claim?",
      answer: "Most claims are processed within 5-7 business days. Complex claims may take longer. You can check the status of your claim at any time through your account dashboard."
    },
    {
      question: "What is covered under my policy?",
      answer: "Coverage depends on your specific policy. Generally, our policies cover accidents, illnesses, surgeries, and medications. Some policies also cover routine care, dental, and behavioral therapy. You can view your specific coverage details on your Policy page."
    },
    {
      question: "Can I add multiple pets to one policy?",
      answer: "Each pet requires its own policy, but we offer multi-pet discounts when you insure more than one pet with us. Contact our customer service for more details."
    },
    {
      question: "Is there a waiting period before coverage begins?",
      answer: "Yes, there is typically a 14-day waiting period for illnesses and a 48-hour waiting period for accidents after your policy is activated."
    }
  ];

  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Support Center
      </Typography>

      {/* Contact Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#f5f7fb' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#1E3A8A', mr: 2 }}>
                  <PhoneIcon />
                </Avatar>
                <Typography variant="h6">Call Us</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 1 }}>1-800-PET-HELP</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  Available 24/7 for emergencies
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Mon-Fri: 8am - 8pm EST
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Sat-Sun: 9am - 5pm EST
              </Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 'auto', bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#f5f7fb' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#1E3A8A', mr: 2 }}>
                  <EmailIcon />
                </Avatar>
                <Typography variant="h6">Email Support</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 1 }}>support@petinsurance.com</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  Response within 24 hours
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                For non-urgent inquiries
              </Typography>
              <TextField
                placeholder="Your email address"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ mb: 2, mt: 'auto' }}
              />
              <Button 
                variant="contained" 
                sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Email Us
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#f5f7fb' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#1E3A8A', mr: 2 }}>
                  <ChatIcon />
                </Avatar>
                <Typography variant="h6">Live Chat</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 1 }}>Chat with a representative</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  Available now
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Quick responses for simple questions
              </Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 'auto', bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* FAQs Section */}
      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Frequently Asked Questions
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} disableGutters elevation={0} sx={{ '&:before': { display: 'none' }, border: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ px: 0 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HelpIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="subtitle1" fontWeight={500}>{faq.question}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pl: 6 }}>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
            {index < faqs.length - 1 && <Divider sx={{ mt: 1 }} />}
          </Accordion>
        ))}
      </Paper>

      {/* Contact Form */}
      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Can't Find What You're Looking For?
      </Typography>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              margin="normal"
            />
            <Button 
              variant="contained" 
              size="large"
              sx={{ mt: 2, bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#152c69' } }}
            >
              Send Message
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 }, mt: { xs: 3, md: 0 } }}>
              <Typography variant="h6" gutterBottom>Our Support Team</Typography>
              <Typography variant="body1" paragraph>
                Our dedicated support team is here to help you with any questions or concerns you may have about your pet insurance policy.
              </Typography>

              <Typography variant="body1" paragraph>
                We strive to provide exceptional customer service and will work with you to resolve any issues as quickly as possible.
              </Typography>

              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Fast response times" />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Expert pet insurance advisors" />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Personalized service" />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Multiple contact options" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SupportPage;