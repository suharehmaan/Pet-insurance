import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Divider,
  Drawer,
  useTheme,
  useMediaQuery,
  Fab,
  Zoom
} from '@mui/material';
import {
  Send as SendIcon,
  Close as CloseIcon,
  Chat as ChatIcon,
  EmojiEmotions as EmojiIcon,
  AttachFile as AttachIcon,
  MicNone as MicIcon,
  SupportAgent as SupportAgentIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const SupportChat = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      // Add welcome message when chat opens
      if (chatHistory.length === 0) {
        setChatHistory([
          {
            id: 1,
            sender: 'agent',
            text: 'Hello! Welcome to Pet Insurance support. How can I help you today?',
            timestamp: new Date()
          }
        ]);
      }
    }
  }, [open, chatHistory.length]);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    // Add user message to chat
    const userMessage = {
      id: chatHistory.length + 1,
      sender: 'user',
      text: message,
      timestamp: new Date()
    };
    
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');
    
    // Simulate agent typing
    setIsTyping(true);
    
    // Simulate agent response after delay
    setTimeout(() => {
      let agentResponse;
      
      // Simple response logic based on keywords
      if (message.toLowerCase().includes('claim')) {
        agentResponse = "To file a claim, you can go to the Claims section from the sidebar, and click on 'Intimate a Claim'. You'll need to provide details about the vet visit and upload any relevant documents.";
      } else if (message.toLowerCase().includes('policy') || message.toLowerCase().includes('coverage')) {
        agentResponse = "Your policy details can be found in the Policies section. There you can review your coverage, deductibles, and policy term dates. Would you like me to help you navigate there?";
      } else if (message.toLowerCase().includes('payment') || message.toLowerCase().includes('premium')) {
        agentResponse = "You can manage your premium payments in the Billing section under Settings. We accept credit/debit cards, bank transfers, and some digital payment options. Is there a specific payment issue you're facing?";
      } else if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello')) {
        agentResponse = "Hello! How can I assist you with your pet insurance today?";
      } else {
        agentResponse = "Thank you for your message. I'd be happy to help you with that. Could you provide more details so I can better assist you?";
      }
      
      const agentMessageObj = {
        id: chatHistory.length + 2,
        sender: 'agent',
        text: agentResponse,
        timestamp: new Date()
      };
      
      setChatHistory(prev => [...prev, agentMessageObj]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const drawerWidth = isMobile ? '100%' : 350;
  
  const chatContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Chat Header */}
      <Paper
        square
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            sx={{ 
              bgcolor: '#fff',
              color: theme.palette.primary.main,
              mr: 1
            }}
          >
            <SupportAgentIcon />
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Support Agent
            </Typography>
            <Typography variant="caption">
              Online | Typically replies in a few minutes
            </Typography>
          </Box>
        </Box>
        <IconButton 
          onClick={onClose} 
          color="inherit"
          edge="end"
        >
          <CloseIcon />
        </IconButton>
      </Paper>

      {/* Chat Messages */}
      <Box 
        sx={{ 
          p: 2, 
          flexGrow: 1, 
          overflowY: 'auto',
          bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#f5f7fa'
        }}
      >
        <List sx={{ p: 0 }}>
          {chatHistory.map((msg) => (
            <ListItem
              key={msg.id}
              alignItems="flex-start"
              sx={{
                flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                pl: msg.sender === 'user' ? 2 : 0,
                pr: msg.sender === 'user' ? 0 : 2,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: msg.sender === 'user' ? 'secondary.main' : 'primary.main',
                    ml: msg.sender === 'user' ? 1 : 0,
                    mr: msg.sender === 'user' ? 0 : 1,
                  }}
                >
                  {msg.sender === 'user' ? <PersonIcon /> : <SupportAgentIcon />}
                </Avatar>
              </ListItemAvatar>
              <Box
                sx={{
                  maxWidth: '75%',
                  bgcolor: msg.sender === 'user' ? 'secondary.light' : 'background.paper',
                  borderRadius: 2,
                  p: 2,
                  boxShadow: 1,
                  color: msg.sender === 'user' && theme.palette.mode === 'light' ? 'white' : 'text.primary',
                  ml: msg.sender === 'user' ? 'auto' : 0,
                  position: 'relative',
                  '&::after': msg.sender === 'user' ? {
                    content: '""',
                    position: 'absolute',
                    top: '10px',
                    right: '-10px',
                    width: 0,
                    height: 0,
                    border: '10px solid transparent',
                    borderLeftColor: theme.palette.secondary.light,
                    borderRight: 0,
                    marginRight: '-10px',
                  } : {
                    content: '""',
                    position: 'absolute',
                    top: '10px',
                    left: '-10px',
                    width: 0,
                    height: 0,
                    border: '10px solid transparent',
                    borderRightColor: theme.palette.background.paper,
                    borderLeft: 0,
                    marginLeft: '-10px',
                  }
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
                <Typography
                  variant="caption"
                  color={msg.sender === 'user' ? 'rgba(255,255,255,0.7)' : 'text.secondary'}
                  sx={{ display: 'block', mt: 1, textAlign: 'right' }}
                >
                  {formatTime(msg.timestamp)}
                </Typography>
              </Box>
            </ListItem>
          ))}
          {isTyping && (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <SupportAgentIcon />
                </Avatar>
              </ListItemAvatar>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  p: 2,
                  boxShadow: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Typography variant="body2">Agent is typing</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    ml: 1,
                    '& > span': {
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      mx: 0.25,
                      animation: 'pulse 1.2s infinite ease-in-out',
                      '&:nth-of-type(2)': {
                        animationDelay: '0.2s',
                      },
                      '&:nth-of-type(3)': {
                        animationDelay: '0.4s',
                      },
                      '@keyframes pulse': {
                        '0%, 100%': {
                          transform: 'scale(0.6)',
                          opacity: 0.6,
                        },
                        '50%': {
                          transform: 'scale(1)',
                          opacity: 1,
                        },
                      },
                    },
                  }}
                >
                  <span />
                  <span />
                  <span />
                </Box>
              </Box>
            </ListItem>
          )}
          <div ref={messagesEndRef} />
        </List>
      </Box>

      {/* Chat Input */}
      <Paper
        square
        elevation={3}
        component="form"
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <IconButton color="primary" size="small">
          <EmojiIcon />
        </IconButton>
        <IconButton color="primary" size="small">
          <AttachIcon />
        </IconButton>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          size="small"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          multiline
          maxRows={3}
        />
        <IconButton 
          color="primary" 
          onClick={handleSendMessage}
          disabled={message.trim() === ''}
          sx={{ 
            bgcolor: message.trim() !== '' ? 'primary.main' : 'grey.300',
            color: message.trim() !== '' ? 'white' : 'grey.500',
            '&:hover': {
              bgcolor: message.trim() !== '' ? 'primary.dark' : 'grey.300',
            }
          }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );

  return (
    <>
      {/* Chat Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {chatContent}
      </Drawer>

      {/* Floating Chat Button */}
      <Zoom in={!open}>
        <Fab
          color="secondary"
          aria-label="chat"
          onClick={onClose}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <ChatIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default SupportChat;
