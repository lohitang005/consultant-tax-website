import React from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FloatingContactButtons = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 12, md: 24 },
        top: '30%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        zIndex: 1200
      }}
    >
      <Tooltip title="Chat on WhatsApp" placement="left">
        <Fab
          component="a"
          href="https://wa.me/919927848855/?text=Hello Parth Rastogi, I would like to discuss your services and explore how we can collaborate."
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: '#0a56c2',
            color: 'white',
            width: 56,
            height: 56,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            '&:hover': { bgcolor: '#083f8f' }
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>

      <Tooltip title="Call Us" placement="left">
        <Fab
          component="a"
          href="tel:+919927848855"
          sx={{ bgcolor: '#0a56c2', color: 'white', width: 56, height: 56, boxShadow: '0 8px 24px rgba(0,0,0,0.2)', '&:hover': { bgcolor: '#083f8f' } }}
        >
          <CallIcon />
        </Fab>
      </Tooltip>

      <Tooltip title="Email Us" placement="left">
  <Fab
    component="a"
    href="mailto:parth@rastogiassociates.com?subject=Inquiry%20About%20Your%20Services&body=Hello%20Parth,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20would%20like%20to%20learn%20more%20about%20your%20services.%20Kindly%20share%20the%20details%20or%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
    sx={{
      bgcolor: '#0a56c2',
      color: 'white',
      width: 56,
      height: 56,
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      '&:hover': { bgcolor: '#083f8f' }
    }}
  >
    <EmailIcon />
  </Fab>
</Tooltip>


      <Tooltip title="LinkedIn" placement="left">
        <Fab
          component="a"
          href="https://www.linkedin.com/company/rkbconsultants/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ bgcolor: '#0a56c2', color: 'white', width: 56, height: 56, boxShadow: '0 8px 24px rgba(0,0,0,0.2)', '&:hover': { bgcolor: '#083f8f' } }}
        >
          <LinkedInIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default FloatingContactButtons;


