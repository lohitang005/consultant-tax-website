import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Paper,
  Divider,
  useTheme,
  alpha,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Breadcrumb from '../../components/Breadcrumb';

const OtherBusinessServices = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Business Support Services | Comprehensive Business Solutions | Rastogi & Associates";
  const seoDescription = "Expert business support services including business registration, compliance management, advisory services, and operational support for businesses of all sizes.";
  const seoKeywords = "business services, business registration, compliance management, business advisory, operational support, business consulting, MSME registration";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/other-business"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Business Support Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          serviceType: 'Business Support',
          areaServed: ['Delhi', 'Noida', 'Gurgaon', 'India'],
          description: seoDescription
        }}
      />

      <Breadcrumb />

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(60deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: `linear-gradient(to top, ${alpha(theme.palette.background.default, 0.1)}, transparent)`,
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.8))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Business Support Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Comprehensive business solutions for registration, compliance, and growth.
                  Expert guidance for all your business needs.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: alpha('#ffffff', 0.9),
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Schedule Consultation
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 1 }}>
        {/* Introduction Section */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 6,
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'text.primary' }}>
            Complete Business Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide end-to-end business support services to help enterprises 
            establish, operate, and grow successfully. Our expert team ensures smooth business operations 
            through comprehensive registration, compliance, and advisory services.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From business registration and statutory compliance to strategic advisory and operational 
            support, we offer tailored solutions that align with your business objectives while ensuring 
            regulatory compliance.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            {
              title: "Business Registration",
              icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
              description: "Complete assistance in business registration and licensing",
              features: [
                "MSME Registration",
                "Shop Act License",
                "Trade License",
                "Food License",
                "Import Export Code",
                "Other Business Licenses"
              ]
            },
            {
              title: "Compliance Management",
              icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive compliance and regulatory services",
              features: [
                "Statutory Compliance",
                "Labor Law Compliance",
                "Environmental Compliance",
                "Industry-Specific Compliance",
                "Regulatory Filings",
                "Compliance Monitoring"
              ]
            },
            {
              title: "Business Advisory",
              icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
              description: "Expert guidance for business growth and operations",
              features: [
                "Business Planning",
                "Growth Strategy",
                "Process Optimization",
                "Risk Management",
                "Market Analysis",
                "Performance Improvement"
              ]
            },
            {
              title: "Financial Support",
              icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive financial and funding support",
              features: [
                "Project Financing",
                "Working Capital",
                "Government Schemes",
                "Subsidy Assistance",
                "Financial Planning",
                "Investment Advisory"
              ]
            }
          ].map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: '0 10px 40px -20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px -20px rgba(0,0,0,0.2)',
                    },
                    background: theme.palette.background.paper,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      color: theme.palette.primary.main
                    }}>
                      {service.icon}
                      <Typography variant="h5" sx={{ ml: 2, fontWeight: 600, color: 'text.primary' }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography sx={{ mb: 3, color: 'text.secondary' }}>
                      {service.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature}
                            primaryTypographyProps={{
                              sx: { 
                                color: 'text.primary',
                                fontWeight: 500
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Process Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'text.primary' }}>
            Our Service Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <AssessmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Business Analysis",
                description: "Thorough assessment of your business requirements and objectives to provide tailored solutions."
              },
              {
                icon: <AccountTreeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Solution Development",
                description: "Creation of comprehensive business solutions aligned with regulatory requirements and industry standards."
              },
              {
                icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Ongoing Support",
                description: "Continuous assistance and monitoring to ensure smooth business operations and compliance."
              }
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {step.icon}
                    <Typography variant="h6" sx={{ ml: 2, fontWeight: 600, color: 'text.primary' }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'text.primary' }}>
            Frequently Asked Questions
          </Typography>
          {[
            {
              question: "What types of business registrations do you handle?",
              answer: "We handle various types of business registrations including MSME registration, shop act license, trade license, food license, import-export code, and other industry-specific licenses. Our team ensures smooth registration process with all necessary documentation and compliance."
            },
            {
              question: "How do you help with business compliance?",
              answer: "We provide comprehensive compliance management services including statutory compliance, labor law compliance, environmental compliance, and industry-specific regulatory requirements. We help monitor deadlines, prepare necessary documentation, and ensure timely filings."
            },
            {
              question: "What financial support services do you offer?",
              answer: "Our financial support services include assistance in project financing, working capital arrangement, government scheme applications, subsidy assistance, financial planning, and investment advisory. We help businesses access various funding options and optimize their financial structure."
            },
            {
              question: "How can your business advisory services help my company?",
              answer: "Our business advisory services provide strategic guidance for growth, process optimization, risk management, and performance improvement. We analyze your business needs, market conditions, and growth opportunities to develop effective strategies for success."
            }
          ].map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: '8px !important',
                '&:before': { display: 'none' },
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ 
                  '& .MuiAccordionSummary-content': { 
                    margin: '12px 0',
                  }
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* CTA Section */}
        <Box 
          sx={{
            mt: 8,
            mb: 6,
            p: 6,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: 'white' }}>
            Ready to Start Your Business Journey?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our expert team help you navigate the complexities of business operations
            and regulatory compliance.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: alpha('#ffffff', 0.9),
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
              }
            }}
          >
            Schedule a Free Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OtherBusinessServices; 