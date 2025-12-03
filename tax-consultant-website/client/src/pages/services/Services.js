import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  useTheme,
  useMediaQuery,
  Button,
  Stack,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GavelIcon from '@mui/icons-material/Gavel';
import CalculateIcon from '@mui/icons-material/Calculate';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Helmet } from 'react-helmet';

const services = [
  {
    title: 'Corporate Services',
    description: 'Comprehensive business solutions including company registration, compliance, and restructuring services for organizations of all sizes.',
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    path: '/services/corporate-services',
    features: ['Company Registration', 'Business Restructuring', 'Corporate Compliance', 'Due Diligence']
  },
  {
    title: 'Tax Advisory',
    description: 'Expert tax planning and compliance services to optimize your tax position and ensure regulatory compliance.',
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    path: '/services/tax-advisory',
    features: ['Tax Planning', 'Tax Audits', 'GST Compliance', 'Return Filing']
  },
  {
    title: 'Financial Advisory',
    description: 'Strategic financial guidance to help you make informed decisions and achieve your financial goals.',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    path: '/services/financial-advisory',
    features: ['Financial Planning', 'Investment Advisory', 'Risk Management', 'Wealth Management']
  },
  {
    title: 'Income Tax Services',
    description: 'Comprehensive income tax services for individuals and businesses.',
    icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    path: '/services/income-tax-services',
    features: ['Tax Return Filing', 'Tax Assessment', 'Tax Planning', 'Tax Notices']
  },
  {
    title: 'International Tax Services',
    description: 'Expert guidance on international tax matters and cross-border transactions.',
    icon: <PublicIcon sx={{ fontSize: 40 }} />,
    path: '/services/international-tax-services',
    features: ['Transfer Pricing', 'FEMA Compliance', 'Cross-border Tax', 'International Planning']
  },
  {
    title: 'Business Consulting',
    description: 'Strategic business consulting to help your organization grow and succeed.',
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    path: '/services/business-consulting',
    features: ['Business Strategy', 'Process Improvement', 'Market Analysis', 'Growth Planning']
  },
  {
    title: 'Litigation Services',
    description: 'Professional representation and support for tax and business litigation.',
    icon: <GavelIcon sx={{ fontSize: 40 }} />,
    path: '/services/litigation-services',
    features: ['Tax Appeals', 'Legal Representation', 'Dispute Resolution', 'Advisory Services']
  },
  {
    title: 'Indirect Tax Services',
    description: 'Comprehensive GST and indirect tax services for businesses.',
    icon: <CalculateIcon sx={{ fontSize: 40 }} />,
    path: '/services/indirect-tax-services',
    features: ['GST Registration', 'GST Returns', 'GST Audit', 'GST Planning']
  },
  {
    title: 'Planning Services',
    description: 'Strategic planning services for businesses and individuals.',
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
    path: '/services/planning-services',
    features: ['Succession Planning', 'Estate Planning', 'Business Planning', 'Tax Planning']
  },
  {
    title: 'Other Business Services',
    description: 'Additional business support services to meet your needs.',
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
    path: '/services/other-business-services',
    features: ['Business Support', 'Outsourcing', 'Advisory Services', 'Compliance']
  }
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Helmet>
        <title>Tax & Financial Services in Delhi NCR | Rastogi & Associates</title>
        <meta name="description" content="Comprehensive tax consulting, GST services, international taxation, and financial advisory services in Delhi NCR. Expert solutions for businesses and individuals." />
        <meta name="keywords" content="tax consultant Delhi NCR, GST services, income tax filing, international taxation, corporate services, tax advisory, financial planning, tax litigation, business advisory Delhi" />
        <link rel="canonical" href="https://www.rastogiassociates.com/services" />
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          pt: { xs: 12, md: 15 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            opacity: 0.1,
            zIndex: 0,
            background: `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%),
                        radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)`
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: '#ffffff',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Our Services
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  mb: 4, 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  maxWidth: 800, 
                  mx: 'auto',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                Comprehensive financial and business solutions tailored to meet your unique needs. From corporate services to international tax planning, we've got you covered.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 4 }}
              >
                <Chip
                  icon={<BusinessIcon sx={{ color: '#ffffff !important' }} />}
                  label="Professional Expertise"
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.5)', 
                    color: '#ffffff',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiChip-icon': {
                      color: '#ffffff'
                    }
                  }}
                  variant="outlined"
                />
                <Chip
                  icon={<HandshakeIcon sx={{ color: '#ffffff !important' }} />}
                  label="Personalized Solutions"
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.5)', 
                    color: '#ffffff',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiChip-icon': {
                      color: '#ffffff'
                    }
                  }}
                  variant="outlined"
                />
                <Chip
                  icon={<TrendingUpIcon sx={{ color: '#ffffff !important' }} />}
                  label="Growth Focused"
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.5)', 
                    color: '#ffffff',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiChip-icon': {
                      color: '#ffffff'
                    }
                  }}
                  variant="outlined"
                />
              </Stack>
            </Box>
          </motion.div>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 71, 171, 0.2)'
                      }
                    }}
                  >
                    <CardActionArea
                      component={RouterLink}
                      to={service.path}
                      sx={{ height: '100%' }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0047AB20, #0047AB10)',
                            color: '#0047AB'
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          component="h2"
                          gutterBottom
                          sx={{ fontWeight: 600, color: '#0047AB' }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ mb: 3 }}
                        >
                          {service.description}
                        </Typography>
                        <Box sx={{ mt: 'auto' }}>
                          <Grid container spacing={1}>
                            {service.features.map((feature, idx) => (
                              <Grid item xs={6} key={idx}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: '#0047AB',
                                    display: 'flex',
                                    alignItems: 'center',
                                    '&:before': {
                                      content: '"•"',
                                      marginRight: 1,
                                      color: '#0047AB'
                                    }
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Box
            sx={{
              mt: 8,
              textAlign: 'center',
              p: 4,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.4)'
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#0047AB', fontWeight: 600 }}>
              Need Help Choosing the Right Service?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Our experts are here to guide you through our services and help you find the perfect solution for your needs.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: '#0047AB',
                '&:hover': {
                  background: '#002366'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Services; 