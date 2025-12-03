import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Button,
  Card,
  CardContent,
  Divider,
  useTheme,
  alpha,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import CalculateIcon from '@mui/icons-material/Calculate';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const IncomeTaxServices = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Income Tax Services | Tax Planning & Compliance | Rastogi & Associates";
  const seoDescription = "Comprehensive income tax services including tax planning, compliance, and advisory for individuals and businesses. Expert guidance for all your income tax needs.";
  const seoKeywords = "income tax services, tax planning, tax compliance, tax advisory, personal tax, business tax, tax consultant, tax filing";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/income-tax"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Income Tax Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          serviceType: 'Income Tax',
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
                  Income Tax Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Expert tax planning, compliance, and advisory services for individuals and businesses.
                  Maximize your tax efficiency with our professional guidance.
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

      {/* Main Content */}
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
            Comprehensive Income Tax Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide expert income tax services tailored to your unique needs.
            Our team of experienced tax professionals ensures compliance while maximizing tax efficiency
            through strategic planning and expert guidance.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            Whether you're an individual seeking personal tax assistance or a business requiring
            comprehensive tax solutions, our services are designed to help you navigate the complex
            tax landscape effectively.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4}>
          {[
            {
              title: "Personal Tax Services",
              icon: <PersonIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive personal income tax solutions",
              features: [
                "Tax Return Filing",
                "Tax Planning",
                "Investment Planning",
                "Retirement Planning",
                "Estate Planning",
                "Tax Savings Strategies"
              ]
            },
            {
              title: "Business Tax Services",
              icon: <BusinessIcon sx={{ fontSize: 40 }} />,
              description: "Professional business tax management",
              features: [
                "Corporate Tax Filing",
                "Business Tax Planning",
                "Tax Compliance",
                "Strategic Tax Advisory",
                "International Taxation",
                "Transfer Pricing"
              ]
            },
            {
              title: "Tax Planning",
              icon: <CalculateIcon sx={{ fontSize: 40 }} />,
              description: "Strategic tax planning and optimization",
              features: [
                "Tax Structure Design",
                "Deduction Planning",
                "Investment Strategy",
                "Risk Assessment",
                "Tax Efficiency",
                "Future Planning"
              ]
            },
            {
              title: "Tax Advisory",
              icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
              description: "Expert tax consultation and guidance",
              features: [
                "Tax Consultation",
                "Compliance Review",
                "Advisory Services",
                "Tax Updates",
                "Policy Guidance",
                "Tax Optimization"
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
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'text.primary' }}>
            Our Tax Service Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Assessment & Planning",
                description: "Thorough evaluation of your tax situation and development of tailored strategies."
              },
              {
                icon: <CalculateIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Implementation",
                description: "Expert execution of tax planning strategies and compliance measures."
              },
              {
                icon: <AccountBalanceIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Review & Optimization",
                description: "Continuous monitoring and optimization of tax strategies for maximum efficiency."
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
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'text.primary' }}>
            Frequently Asked Questions
          </Typography>
          {[
            {
              question: "What income tax services do you provide?",
              answer: "We offer a comprehensive range of income tax services including personal and business tax return filing, tax planning, compliance management, advisory services, and strategic tax optimization. Our services are tailored to meet both individual and corporate needs."
            },
            {
              question: "How can I maximize my tax savings?",
              answer: "We help maximize your tax savings through strategic planning, identifying eligible deductions, structuring investments efficiently, and implementing tax-saving strategies aligned with your financial goals. Our experts stay updated with tax laws to ensure you benefit from all available tax advantages."
            },
            {
              question: "What documents do I need for tax filing?",
              answer: "Required documents typically include income statements (Form 16, Form 26AS), investment proofs, bank statements, property documents, and expense receipts for deductions. Our team will provide a detailed checklist based on your specific situation."
            },
            {
              question: "How do you handle complex tax situations?",
              answer: "Our experienced team handles complex tax situations through thorough analysis, strategic planning, and expert implementation. We consider all aspects of your financial situation, applicable tax laws, and potential implications to develop comprehensive solutions."
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
            Ready to Optimize Your Tax Position?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our tax experts help you minimize tax liability and ensure compliance.
            Schedule a consultation today to discuss your tax planning needs.
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

export default IncomeTaxServices;