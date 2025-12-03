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

const PrivacyPolicy = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and other contact details you provide.",
        "Business Information: Company details, tax identification numbers, and related business data.",
        "Usage Data: Information about how you interact with our website and services.",
        "Technical Data: IP address, browser type, device information, and cookies."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our tax consultation services",
        "To communicate with you about our services",
        "To improve our website and user experience",
        "To comply with legal obligations and tax regulations"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Regular security audits and updates",
        "Encrypted data transmission and storage",
        "Limited access to personal information by authorized personnel only"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access your personal information",
        "Request correction of your data",
        "Request deletion of your data",
        "Opt-out of marketing communications"
      ]
    },
    {
      title: "Cookie Policy",
      content: [
        "We use essential cookies to ensure basic functionality",
        "Analytics cookies to improve our services",
        "You can control cookie preferences through your browser settings",
        "Third-party cookies may be used for enhanced features"
      ]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      <SEO
        title="Privacy Policy | Rastogi & Associates"
        description="Learn about how we collect, use, and protect your personal information at Rastogi & Associates."
        url="https://www.rastogiassociates.in/privacy-policy"
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
            Privacy Policy
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px'
            }}
          >
            At Rastogi & Associates, we take your privacy seriously. This policy outlines how we collect,
            use, and protect your personal information when you use our services.
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
              If you have any questions about our Privacy Policy, please contact us at:
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

export default PrivacyPolicy; 