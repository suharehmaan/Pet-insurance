
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
  Tabs,
  Tab
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatSupport from '../chat/ChatSupport';

const SupportPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [activeChat, setActiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'agent', message: 'Hello! How can I help you today?', time: '10:30 AM' }
  ]);

  // Set the tab based on the current path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/chat')) {
      setTabValue(0);
    } else if (path.includes('/faqs')) {
      setTabValue(1);
    } else if (path.includes('/contact')) {
      setTabValue(2);
    }
  }, [location]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    switch(newValue) {
      case 0:
        navigate('/support/chat');
        break;
      case 1:
        navigate('/support/faqs');
        break;
      case 2:
        navigate('/support/contact');
        break;
      default:
        navigate('/support');
    }
  };

  const handleStartChat = () => {
    setActiveChat(true);
  };

  const handleSendMessage = () => {
    if (chatInput.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      message: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, userMessage]);
    setChatInput('');
    
    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage = {
        id: chatMessages.length + 2,
        sender: 'agent',
        message: "Thank you for your message. Our pet insurance specialist will review your question and get back to you shortly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, agentMessage]);
    }, 1000);
  };

  // FAQ data
  const faqs = [
    {
      question: 'What does pet insurance cover?',
      answer: 'Pet insurance typically covers accidents, injuries, illnesses, and sometimes routine care depending on your plan. Our comprehensive plans cover surgeries, medications, emergency care, and chronic conditions. Specific coverage varies by policy type and level.'
    },
    {
      question: 'How do I file a claim?',
      answer: 'To file a claim, go to the Claims section in your dashboard, click "Submit New Claim," fill out the required information, upload your vet receipts, and submit. Claims are typically processed within 5-7 business days.'
    },
    {
      question: 'Is there a waiting period?',
      answer: 'Yes, most of our policies have a 14-day waiting period for illnesses and a 48-hour waiting period for accidents. This means coverage begins after these periods have passed from the policy start date.'
    },
    {
      question: 'Are pre-existing conditions covered?',
      answer: 'No, pre-existing conditions that occurred before enrollment or during the waiting period are not covered. However, if a condition was treated and your pet has been symptom-free for 12 months, it may no longer be considered pre-existing.'
    },
    {
      question: 'Can I use any veterinarian?',
      answer: 'Yes, you can use any licensed veterinarian, emergency clinic, or specialist in the country. There are no network restrictions, giving you the freedom to choose the best care for your pet.'
    },
    {
      question: 'How are reimbursements calculated?',
      answer: 'Reimbursements are calculated based on the actual veterinary bill. Depending on your plan, we reimburse 70%, 80%, or 90% of covered expenses after your deductible is met, up to your annual limit.'
    },
    {
      question: 'Can I change my coverage plan?',
      answer: 'Yes, you can change your coverage plan at your policy renewal date. Changes may affect your premium, and new waiting periods may apply for increased coverage areas.'
    },
    {
      question: 'What information do I need to get a quote?',
      answer: 'To get a quote, you\'ll need to provide your pet\'s species (dog or cat), breed, age, and your zip code. Additional information about your pet\'s health history may be required during enrollment.'
    }
  ];
  
  // Filter FAQs based on search
  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  // Render different content based on active tab
  const renderTabContent = () => {
    switch(tabValue) {
      case 0: // Live Chat
        return (
          <Box>
            {!activeChat ? (
              <Card sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Avatar sx={{ bgcolor: '#1E3A8A', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                    <ChatIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    Need help with your pet insurance?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Our support team is ready to assist you. Start a chat now to get help with your policy, claims, or general questions.
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="large" 
                    startIcon={<ChatIcon />}
                    onClick={handleStartChat}
                    sx={{ 
                      mt: 2,
                      backgroundColor: '#1E3A8A',
                      '&:hover': { backgroundColor: '#152C6B' }
                    }}
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={6} sx={{ mx: 'auto' }}>
                  <Paper sx={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
                    {/* Chat Header */}
                    <Box sx={{ p: 2, bgcolor: '#1E3A8A', color: 'white' }}>
                      <Typography variant="h6">
                        Pet Insurance Support
                      </Typography>
                      <Typography variant="body2">
                        Our agents are available Mon-Fri, 9AM - 6PM EST
                      </Typography>
                    </Box>
                    
                    {/* Chat Messages */}
                    <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
                      {chatMessages.map((msg) => (
                        <Box 
                          key={msg.id}
                          sx={{ 
                            display: 'flex', 
                            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            mb: 2
                          }}
                        >
                          {msg.sender === 'agent' && (
                            <Avatar sx={{ bgcolor: '#1E3A8A', mr: 1, width: 32, height: 32 }}>
                              <SupportAgentIcon fontSize="small" />
                            </Avatar>
                          )}
                          <Box 
                            sx={{ 
                              maxWidth: '70%',
                              p: 2,
                              borderRadius: 2,
                              bgcolor: msg.sender === 'user' ? '#E3F2FD' : '#F1F5F9',
                              boxShadow: 1
                            }}
                          >
                            <Typography variant="body1">
                              {msg.message}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {msg.time}
                            </Typography>
                          </Box>
                          {msg.sender === 'user' && (
                            <Avatar sx={{ bgcolor: '#E3F2FD', color: '#1E3A8A', ml: 1, width: 32, height: 32 }}>
                              <PersonIcon fontSize="small" />
                            </Avatar>
                          )}
                        </Box>
                      ))}
                    </Box>
                    
                    {/* Chat Input */}
                    <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
                      <TextField
                        fullWidth
                        placeholder="Type your message..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        variant="outlined"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton 
                                color="primary" 
                                onClick={handleSendMessage}
                                disabled={!chatInput.trim()}
                              >
                                <SendIcon />
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            )}
          </Box>
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
            
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              {filteredFaqs.length === 0 ? (
                <Box sx={{ textAlign: 'center', my: 4 }}>
                  <HelpIcon sx={{ fontSize: 60, color: '#e0e0e0', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    No FAQs match your search
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Try different keywords or contact our support team
                  </Typography>
                  <Button 
                    variant="contained" 
                    onClick={() => {setTabValue(0); navigate('/support/chat');}}
                    sx={{ 
                      mt: 2,
                      backgroundColor: '#1E3A8A',
                      '&:hover': { backgroundColor: '#152C6B' }
                    }}
                  >
                    Contact Support
                  </Button>
                </Box>
              ) : (
                filteredFaqs.map((faq, index) => (
                  <Accordion key={index} sx={{ mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight={500}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
              )}
            </Box>
          </Box>
        );
        
      case 2: // Contact Us
        return (
          <Box>
            <Grid container spacing={3} sx={{ maxWidth: 1200, mx: 'auto' }}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#1E3A8A', mr: 2 }}>
                        <PhoneIcon />
                      </Avatar>
                      <Typography variant="h6">Phone Support</Typography>
                    </Box>
                    <Typography variant="body2" paragraph>
                      Call us directly for immediate assistance with your pet insurance policy.
                    </Typography>
                    <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>
                      1-800-PET-CARE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monday - Friday: 9AM - 6PM EST<br />
                      Saturday: 10AM - 4PM EST<br />
                      Sunday: Closed
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<PhoneIcon />}
                      sx={{ mt: 2 }}
                    >
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#1E3A8A', mr: 2 }}>
                        <EmailIcon />
                      </Avatar>
                      <Typography variant="h6">Email Support</Typography>
                    </Box>
                    <Typography variant="body2" paragraph>
                      Send us an email and we'll get back to you within 24 hours with the information you need.
                    </Typography>
                    <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>
                      support@petinsurance.com
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      For general inquiries, policy questions, and non-urgent matters
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<EmailIcon />}
                      sx={{ mt: 2 }}
                    >
                      Email Us
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#1E3A8A', mr: 2 }}>
                        <WhatsAppIcon />
                      </Avatar>
                      <Typography variant="h6">WhatsApp</Typography>
                    </Box>
                    <Typography variant="body2" paragraph>
                      Send us a message on WhatsApp for quick responses to your questions.
                    </Typography>
                    <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>
                      +1 (555) 123-4567
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Available during office hours for quick questions and policy assistance
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<WhatsAppIcon />}
                      sx={{ mt: 2 }}
                    >
                      WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    Send us a Message
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        variant="contained" 
                        size="large"
                        sx={{ 
                          mt: 2,
                          backgroundColor: '#1E3A8A',
                          '&:hover': { backgroundColor: '#152C6B' }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
        
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Support Center
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="fullWidth"
        >
          <Tab 
            icon={<ChatIcon />} 
            label="Live Chat" 
            iconPosition="start" 
          />
          <Tab 
            icon={<QuestionAnswerIcon />} 
            label="FAQs" 
            iconPosition="start" 
          />
          <Tab 
            icon={<EmailIcon />} 
            label="Contact Us" 
            iconPosition="start" 
          />
        </Tabs>
      </Box>
      
      {renderTabContent()}
    </Box>
  );
};

const SupportAgentIcon = () => <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24">
  <path fill="currentColor" d="M21,12.22C21,6.73 16.74,3 12,3C7.31,3 3,6.65 3,12.27C2.4,12.62 2,13.26 2,14V16C2,17.1 2.9,18 4,18H5V11.27C5,7.76 8.2,5 12,5C15.87,5 19,7.84 19,11.27V18H20C21.1,18 22,17.1 22,16V14C22,13.26 21.6,12.62 21,12.22M12,11C10.9,11 10,11.9 10,13C10,14.1 10.9,15 12,15C13.1,15 14,14.1 14,13C14,11.9 13.1,11 12,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67M6.5,18.67C6.5,19.96 7.5,21 8.75,21C10,21 11,19.96 11,18.67C11,17.12 8.75,14.5 8.75,14.5C8.75,14.5 6.5,17.12 6.5,18.67Z" />
</svg>;

const PersonIcon = () => <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24">
  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
</svg>;

export default SupportPage;
