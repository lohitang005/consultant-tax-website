import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Fab, Tooltip, Zoom, Badge } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const AIChatBubble = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [bounce, setBounce] = useState(false);

  // Hide bubble on AI assistant page
  useEffect(() => {
    setShow(location.pathname !== '/ai-assistant');
  }, [location]);

  // Add bounce animation every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <Zoom in={show}>
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 20, sm: 32 },
          right: { xs: 20, sm: 32 },
          zIndex: 1000,
        }}
      >
        <Badge
          variant="dot"
          color="success"
          overlap="circular"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={{
            '& .MuiBadge-badge': {
              width: 12,
              height: 12,
              borderRadius: '50%',
              border: '2px solid #fff',
            }
          }}
        >
          <Tooltip title="Chat with AI Assistant" placement="left">
            <Fab
              onClick={() => navigate('/ai-assistant')}
              sx={{
                background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
                color: 'white',
                width: { xs: 56, sm: 64 },
                height: { xs: 56, sm: 64 },
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                animation: bounce ? 'bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #004e92 0%, #000428 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.3)',
                },
                '@keyframes bounce': {
                  '0%, 100%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                  }
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <AutoAwesomeIcon 
                sx={{ 
                  fontSize: { xs: 24, sm: 28 },
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))',
                }} 
              />
            </Fab>
          </Tooltip>
        </Badge>
      </Box>
    </Zoom>
  );
};

export default AIChatBubble; 