
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Fab,
  Drawer,
  Divider,
  Avatar,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  CircularProgress
} from '@mui/material';
import {
  Close,
  Send,
  Chat as ChatIcon,
  SupportAgent
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { sendMessage, subscribeToMessages } from '../../services/chatService';
import { useThemeContext } from '../../context/ThemeContext';

const ChatSupport = () => {
  const { user } = useAuth();
  const { darkMode } = useThemeContext();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (user && open) {

      const unsubscribe = subscribeToMessages(user.id, (newMessages) => {
        setMessages(newMessages);
    
        setUnreadCount(0);
      });
      

      return () => {
        unsubscribe();
      };
    } else if (user && !open) {
   
      const unsubscribe = subscribeToMessages(user.id, (newMessages) => {
        setMessages(newMessages);
    
        const previousCount = messages.length;
        const currentCount = newMessages.length;
        if (currentCount > previousCount) {
          setUnreadCount(prevCount => prevCount + (currentCount - previousCount));
        }
      });
      
      return () => {
        unsubscribe();
      };
    }
  }, [user, open]);


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !user) return;
    
    setLoading(true);
    try {
      await sendMessage(user.id, message);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    setOpen(!open);
    if (!open) {
      setUnreadCount(0);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleChat}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 320 },
            maxWidth: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        {/* Chat Header */}
        <Box sx={{ 
          p: 2, 
          backgroundColor: theme => theme.palette.primary.main,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SupportAgent sx={{ mr: 1 }} />
            <Typography variant="h6">Live Support</Typography>
          </Box>
          <IconButton color="inherit" edge="end" onClick={toggleChat}>
            <Close />
          </IconButton>
        </Box>
        
        <Divider />
        
        {/* Chat Messages */}
        <Box sx={{ 
          p: 2, 
          flexGrow: 1, 
          overflowY: 'auto',
          bgcolor: theme => darkMode ? theme.palette.background.default : '#f5f5f5'
        }}>
          {messages.length === 0 ? (
            <Box sx={{ 
              textAlign: 'center', 
              py: 3, 
              color: 'text.secondary' 
            }}>
              <SupportAgent sx={{ fontSize: 60, opacity: 0.6, mb: 2 }} />
              <Typography variant="body1">
                Welcome to PetCare Support! How can we help you today?
              </Typography>
            </Box>
          ) : (
            <List sx={{ p: 0 }}>
              {messages.map((msg) => (
                <ListItem
                  key={msg.id}
                  alignItems="flex-start"
                  sx={{
                    textAlign: msg.role === 'user' ? 'right' : 'left',
                    p: 0,
                    mb: 2
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                      width: '100%'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 0.5,
                        flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                      }}
                    >
                      <ListItemAvatar sx={{ minWidth: 40 }}>
                        <Avatar
                          sx={{ width: 32, height: 32 }}
                          src={msg.role === 'user' ? user?.avatar : undefined}
                        >
                          {msg.role !== 'user' && <SupportAgent />}
                        </Avatar>
                      </ListItemAvatar>
                      <Typography variant="subtitle2" color="textSecondary" sx={{ mx: 1 }}>
                        {msg.role === 'user'
                          ? user?.name || 'You'
                          : msg.agentName || 'Support Agent'}
                      </Typography>
                    </Box>
                    
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 1.5,
                        ml: msg.role === 'user' ? 'auto' : 0,
                        mr: msg.role !== 'user' ? 'auto' : 0,
                        maxWidth: '80%',
                        borderRadius: 2,
                        bgcolor: msg.role === 'user'
                          ? 'primary.light'
                          : 'background.paper',
                        color: msg.role === 'user' && !darkMode
                          ? 'white'
                          : 'text.primary'
                      }}
                    >
                      <Typography variant="body1" component="div">
                        {msg.message}
                      </Typography>
                    </Paper>
                    
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{ mt: 0.5, px: 1 }}
                    >
                      {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
              <div ref={messagesEndRef} />
            </List>
          )}
        </Box>
        
        <Divider />
        
        {/* Chat Input */}
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            multiline
            maxRows={4}
            disabled={loading || !user}
            size="small"
          />
          <Button
            sx={{ ml: 1, minWidth: 'auto', p: 1 }}
            color="primary"
            variant="contained"
            disabled={!message.trim() || loading || !user}
            onClick={handleSendMessage}
          >
            {loading ? <CircularProgress size={24} /> : <Send />}
          </Button>
        </Box>
      </Drawer>

      {/* Chat Toggle Button */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChat}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          boxShadow: 3
        }}
      >
        <Badge badgeContent={unreadCount} color="error">
          <ChatIcon />
        </Badge>
      </Fab>
    </>
  );
};

export default ChatSupport;
