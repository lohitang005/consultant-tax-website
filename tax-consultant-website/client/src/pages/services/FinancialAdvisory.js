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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const FinancialAdvisory = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Financial Advisory Services | Investment & Business Consulting | Rastogi & Associates";
  const seoDescription = "Expert financial advisory services including investment planning, wealth management, business consulting, and strategic financial planning for individuals and businesses.";
  const seoKeywords = "financial advisory, investment planning, wealth management, business consulting, financial planning, investment strategy, risk management, financial analysis";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/financial-advisory"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Financial Advisory Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          serviceType: 'Financial Advisory',
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
                  Financial Advisory Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Expert financial guidance to help you achieve your financial goals
                  through strategic planning and informed decision-making.
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
            Strategic Financial Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide comprehensive financial advisory services to help 
            individuals and businesses make informed financial decisions. Our expert team delivers 
            tailored solutions that align with your financial goals and risk tolerance.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From investment planning and wealth management to strategic business consulting and 
            risk assessment, we offer end-to-end financial advisory services to help you achieve 
            your financial objectives.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            {
              title: "Investment Planning",
              icon: <MonetizationOnIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive investment planning and portfolio management services",
              features: [
                "Investment Strategy Development",
                "Portfolio Diversification",
                "Risk Assessment & Management",
                "Asset Allocation Planning",
                "Investment Performance Review",
                "Market Trend Analysis"
              ]
            },
            {
              title: "Wealth Management",
              icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
              description: "Holistic wealth management solutions for long-term financial success",
              features: [
                "Personal Wealth Planning",
                "Estate Planning",
                "Retirement Planning",
                "Tax-Efficient Investing",
                "Succession Planning",
                "Legacy Planning"
              ]
            },
            {
              title: "Financial Analysis",
              icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
              description: "In-depth financial analysis and reporting for informed decision-making",
              features: [
                "Financial Statement Analysis",
                "Cash Flow Analysis",
                "Budget Planning & Review",
                "Financial Forecasting",
                "Ratio Analysis",
                "Performance Metrics"
              ]
            },
            {
              title: "Strategic Consulting",
              icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
              description: "Strategic financial consulting for business growth and optimization",
              features: [
                "Business Valuation",
                "Merger & Acquisition Advisory",
                "Financial Restructuring",
                "Growth Strategy Planning",
                "Risk Management",
                "Financial Due Diligence"
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
            Our Advisory Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <AssessmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Financial Assessment",
                description: "Comprehensive evaluation of your financial situation, goals, and risk tolerance to develop tailored strategies."
              },
              {
                icon: <AccountTreeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Strategy Development",
                description: "Creation of personalized financial strategies aligned with your objectives and market conditions."
              },
              {
                icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Ongoing Support",
                description: "Regular monitoring, strategy adjustments, and continuous support to ensure optimal financial outcomes."
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
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
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
              question: "What financial advisory services do you offer?",
              answer: "We offer comprehensive financial advisory services including investment planning, wealth management, financial analysis, and strategic consulting. Our services cover portfolio management, retirement planning, estate planning, business valuation, and more. Each service is tailored to meet your specific financial goals and risk tolerance."
            },
            {
              question: "How do you develop investment strategies?",
              answer: "We develop investment strategies through a thorough analysis of your financial goals, risk tolerance, and market conditions. Our approach includes portfolio diversification, asset allocation, risk management, and regular performance monitoring. We ensure your investment strategy aligns with your long-term financial objectives."
            },
            {
              question: "What makes your wealth management approach unique?",
              answer: "Our wealth management approach combines personalized attention with comprehensive financial planning. We focus on understanding your unique needs, creating tailored strategies, and providing ongoing support. We consider all aspects of your financial life, including tax efficiency, estate planning, and succession planning."
            },
            {
              question: "How often do you review and adjust financial strategies?",
              answer: "We conduct regular reviews of your financial strategies, typically quarterly or as market conditions and your personal circumstances change. This includes performance analysis, risk assessment, and strategy adjustments to ensure your financial plan remains aligned with your goals and market conditions."
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
            Ready to Achieve Your Financial Goals?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our expert financial advisors help you create a comprehensive strategy
            tailored to your financial objectives.
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

export default FinancialAdvisory; 