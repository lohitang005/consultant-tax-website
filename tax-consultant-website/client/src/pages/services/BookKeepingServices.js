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
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Breadcrumb from '../../components/Breadcrumb';

const BookKeepingServices = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Professional Bookkeeping Services | Accounting & Financial Management | Rastogi & Associates";
  const seoDescription = "Expert bookkeeping services including accounts management, financial reporting, payroll processing, and reconciliation services for businesses of all sizes.";
  const seoKeywords = "bookkeeping services, accounting services, financial reporting, payroll processing, bank reconciliation, accounts management, financial statements, tax preparation";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/bookkeeping-services"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Bookkeeping Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          serviceType: 'Bookkeeping',
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
                  Professional Bookkeeping Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Professional bookkeeping and accounting services to keep your finances organized.
                  Expert solutions for businesses of all sizes.
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
            Professional Bookkeeping Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide comprehensive bookkeeping services to help businesses 
            maintain accurate financial records and make informed decisions. Our expert team ensures 
            precise financial management through detailed accounting and reporting services.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From daily transactions and payroll processing to financial statements and tax preparation, 
            we offer tailored bookkeeping solutions that align with your business needs while ensuring 
            compliance with accounting standards.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            {
              title: "Accounts Management",
              icon: <ReceiptLongIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive accounts and transaction management",
              features: [
                "Daily Transaction Recording",
                "Accounts Receivable",
                "Accounts Payable",
                "General Ledger Maintenance",
                "Chart of Accounts Setup",
                "Financial Data Entry"
              ]
            },
            {
              title: "Financial Reporting",
              icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
              description: "Detailed financial statements and reports",
              features: [
                "Balance Sheet Preparation",
                "Profit & Loss Statements",
                "Cash Flow Statements",
                "Monthly Reports",
                "Annual Financial Reports",
                "Custom Financial Analysis"
              ]
            },
            {
              title: "Payroll Services",
              icon: <CalculateIcon sx={{ fontSize: 40 }} />,
              description: "Complete payroll processing and management",
              features: [
                "Salary Processing",
                "Tax Calculations",
                "Statutory Compliance",
                "Employee Benefits",
                "Payroll Reports",
                "Year-End Processing"
              ]
            },
            {
              title: "Reconciliation Services",
              icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
              description: "Thorough reconciliation and verification services",
              features: [
                "Bank Reconciliation",
                "Credit Card Reconciliation",
                "Account Reconciliation",
                "Vendor Statement Reconciliation",
                "Inventory Reconciliation",
                "Financial Audits Support"
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
            Our Bookkeeping Process
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <AssessmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Initial Assessment",
                description: "Thorough evaluation of your current bookkeeping needs and financial processes to develop tailored solutions."
              },
              {
                icon: <AccountTreeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "System Setup & Implementation",
                description: "Setting up efficient bookkeeping systems and processes aligned with your business requirements."
              },
              {
                icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Ongoing Management",
                description: "Regular maintenance, updates, and support to ensure accurate financial records and timely reporting."
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
              question: "What bookkeeping services do you provide?",
              answer: "We offer comprehensive bookkeeping services including daily transaction recording, accounts receivable and payable management, payroll processing, financial reporting, bank reconciliation, and tax preparation support. Our services can be customized to meet your specific business needs."
            },
            {
              question: "How often will I receive financial reports?",
              answer: "We provide monthly financial reports including balance sheets, profit & loss statements, and cash flow statements. We can also generate custom reports based on your requirements and schedule additional reporting periods as needed."
            },
            {
              question: "How do you ensure accuracy in bookkeeping?",
              answer: "We maintain accuracy through multiple levels of verification, regular reconciliations, and quality control processes. Our team uses advanced accounting software and follows standardized procedures to ensure precise financial records."
            },
            {
              question: "Can you help with tax preparation?",
              answer: "Yes, our bookkeeping services include maintaining organized financial records that support tax preparation. We can work directly with your tax professional or provide comprehensive financial statements and supporting documentation for tax filing."
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
            Ready to Streamline Your Bookkeeping?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our expert team handle your financial records while you focus on growing your business.
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

export default BookKeepingServices;