import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme,
  alpha
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';

const TermsOfService = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using our website and services, you agree to these Terms of Service.",
        "These terms may be updated periodically. Continued use constitutes acceptance of any changes.",
        "If you do not agree with these terms, please do not use our services.",
        "These terms govern your use of our website and services provided by Rastogi & Associates."
      ]
    },
    {
      title: "Services Description",
      content: [
        "We provide tax consultation, business advisory, and related professional services.",
        "All services are subject to professional engagement agreements.",
        "We reserve the right to refuse service to anyone for any reason.",
        "Service availability may vary by location and jurisdiction."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information for all services.",
        "Maintain the confidentiality of your account credentials.",
        "Comply with all applicable laws and regulations.",
        "Use our services only for lawful purposes."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on this website is the property of Rastogi & Associates.",
        "You may not use our content without express written permission.",
        "Our trademarks and brand features are protected by law.",
        "Any unauthorized use of our intellectual property is prohibited."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "We provide services on an 'as is' and 'as available' basis.",
        "We are not liable for any indirect, incidental, or consequential damages.",
        "Our liability is limited to the amount paid for the specific service in question.",
        "We do not guarantee the accuracy of all information provided."
      ]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      <SEO
        title="Terms of Service | Rastogi & Associates"
        description="Read our Terms of Service to understand your rights and responsibilities when using Rastogi & Associates services."
        url="https://www.rastogiassociates.in/terms-of-service"
      />

      <Breadcrumb />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: theme.palette.divider
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Terms of Service
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px'
            }}
          >
            Please read these terms carefully before using our services. By using our website and services,
            you agree to be bound by these terms and conditions.
            Last updated: {new Date().toLocaleDateString()}
          </Typography>

          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main
                }}
              >
                {section.title}
              </Typography>
              <List>
                {section.content.map((item, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      px: 0,
                      py: 1
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        sx: {
                          color: 'text.primary',
                          fontSize: '1rem',
                          lineHeight: 1.7
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              {index < sections.length - 1 && (
                <Divider sx={{ my: 4 }} />
              )}
            </Box>
          ))}

          <Box sx={{ mt: 8 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              If you have any questions about our Terms of Service, please contact us at:
              <br />
              Email: parth@rastogiassociates.com
              <br />
              Phone: +91 9927848855
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsOfService; 