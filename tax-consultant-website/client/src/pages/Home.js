import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  useTheme,
  Paper,
  Stack,
  IconButton,
  Divider,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';

const features = [
  {
    icon: <SecurityIcon />,
    title: "Secure & Reliable",
    description: "Bank-grade security for your financial data"
  },
  {
    icon: <SpeedIcon />,
    title: "Fast Processing",
    description: "Quick turnaround on all tax matters"
  },
  {
    icon: <PeopleIcon />,
    title: "Expert Team",
    description: "Dedicated professionals at your service"
  },
  {
    icon: <ChatIcon />,
    title: "24/7 Support",
    description: "Available 24/7 to help you with your tax matters"
  }
];

const services = [
  {
    icon: <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Corporate Services",
    description: "Comprehensive business solutions including company registration, compliance, and restructuring",
    features: ["Company Registration", "Corporate Compliance", "Business Restructuring"]
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Tax Advisory",
    description: "Expert tax planning and compliance services for businesses and individuals at affordable prices",
    features: ["Tax Planning", "GST Compliance", "International Taxation"]
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Financial Advisory",
    description: "Strategic financial planning and analysis for business growth and analysis of financial statements",
    features: ["Financial Planning", "Investment Advisory", "Risk Management"]
  }
];

const testimonials = [
  {
    name: "Arun Mehta",
    position: "Managing Director, Mehta Industries",
    content: "Rastogi & Associates transformed our tax management with their expertise.",
    rating: 5,
    image: "/images/testimonials/1.jpg"
  },
  {
    name: "Neha Gupta",
    position: "CEO, TechVision Solutions",
    content: "Outstanding service in managing our company's international tax matters.",
    rating: 5,
    image: "/images/testimonials/2.jpg"
  }
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <SEO
        title="Rastogi & Associates | Litigation and Tax Advisory Services in Delhi NCR"
        description="Trusted tax, litigation, and corporate advisory in Delhi NCR. Expert GST, income tax, international taxation, and compliance services."
        url="https://www.rastogiassociates.in/"
        image="/images/company/hero.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Rastogi & Associates',
          image: 'https://www.rastogiassociates.in/images/company/hero.jpg',
          url: 'https://www.rastogiassociates.in/',
          telephone: '+91-9999999999',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Connaught Place',
            addressLocality: 'New Delhi',
            addressRegion: 'DL',
            postalCode: '110001',
            addressCountry: 'IN'
          },
          sameAs: [
            'https://www.facebook.com/',
            'https://www.linkedin.com/'
          ],
          priceRange: '$$'
        }}
      />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '20%',
            left: '60%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(26, 35, 126, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(13, 71, 161, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box>
                  <Box 
                    sx={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      bgcolor: 'rgba(26, 35, 126, 0.05)',
                      borderRadius: '100px',
                      px: 2,
                      py: 1,
                      mb: 4
                    }}
                  >
                    <StarIcon sx={{ color: '#ffd700', mr: 1, fontSize: 20 }} />
                    <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      Rated 4.9/5 by 100+ Businesses
                    </Typography>
                  </Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 3
                    }}
                  >
                    Trusted Tax 
                    Financial Advisory for Growing Businesses
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      lineHeight: 1.6,
                      maxWidth: 500,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                  We help Indian businesses reduce tax outgo, stay 100% compliant, and scale faster with proactive advisory across GST, Income Tax, and corporate law. Fixed pricing, fast turnaround, and a partner-led approach you can rely on.
                  </Typography>

                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="large"
                    sx={{
                      py: 2.5,
                      px: 6,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: '100px',
                      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                      boxShadow: '0 10px 30px rgba(26, 35, 126, 0.2)',
                      mb: 6,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 15px 40px rgba(26, 35, 126, 0.3)'
                      }
                    }}
                  >
                    Get Started
                  </Button>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', mr: -1 }}>
                        {[1, 2, 3].map((_, index) => (
                          <Avatar
                            key={index}
                            src={`/images/clients/${index + 1}.jpg`}
                            sx={{
                              width: 32,
                              height: 32,
                              border: '2px solid white',
                              marginLeft: -1
                            }}
                          />
                        ))}
                      </Box>
                      <Typography variant="subtitle2" sx={{ ml: 2, color: 'text.secondary' }}>
                        Trusted by 100+ businesses
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="/images/hero-illustration.svg"
                    alt="Financial Solutions"
                    sx={{
                      width: '120%',
                      height: 'auto',
                      maxWidth: 700,
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                      transform: 'translateX(-10%)'
                    }}
                  />
                  {/* Floating Elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20%',
                      right: '10%',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'white',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <CheckCircleIcon color="primary" />
                    <Typography variant="subtitle2">AI-Powered Analysis</Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '30%',
                      left: '5%',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'white',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <SecurityIcon color="primary" />
                    <Typography variant="subtitle2">Bank-Grade Security</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Case Studies Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#f8f9ff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2, mb: 1, display: 'block' }}>
              CASE STUDIES
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Proven Results
            </Typography>
            <Typography variant="h6" color="text.secondary">Real outcomes we delivered for Indian businesses</Typography>
          </Box>
          <Grid container spacing={4}>
            {[{
              title: 'D2C Apparel Brand',
              metric: '₹48L tax saved',
              sub: 'via GST input optimization and inventory valuation fixes'
            },{
              title: 'SaaS Startup',
              metric: '30% faster closes',
              sub: 'by streamlining revenue recognition and TDS handling'
            },{
              title: 'Manufacturing SME',
              metric: '₹1.2Cr working capital freed',
              sub: 'through refund management and incentive claims'
            }].map((cs, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper sx={{ p: 4, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider', background: '#fff' }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>{cs.title}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>{cs.metric}</Typography>
                  <Typography variant="body2" color="text.secondary">{cs.sub}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: 4,
                      background: 'rgba(255,255,255,1)',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '20px',
                        bgcolor: 'primary.lighter',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        mx: 'auto',
                        '& svg': {
                          fontSize: 30
                        }
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box 
        sx={{ 
          py: { xs: 10, md: 15 },
          bgcolor: '#f8f9ff',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(180deg, #ffffff 0%, transparent 100%)',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 2,
                mb: 2,
                display: 'block'
              }}
            >
              OUR SERVICES
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Expert Solutions
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              Comprehensive tax and financial services tailored to your needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      background: 'white',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 4 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '24px',
                            bgcolor: 'primary.lighter',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                          {service.description}
                        </Typography>
                      </Box>
                      <Stack spacing={2}>
                        {service.features.map((feature, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                            <Typography variant="body2">{feature}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: 'block'
                }}
              >
                TESTIMONIALS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3
                }}
              >
                What Our Clients Say
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                Don't just take our word for it. Hear from our satisfied clients.
              </Typography>
              <Button
                component={RouterLink}
                to="/testimonials"
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 2,
                  px: 4,
                  borderRadius: '100px',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                View All Reviews
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                {testimonials.map((testimonial, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        sx={{
                          p: 4,
                          borderRadius: 4,
                          background: 'rgba(255,255,255,1)',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <Avatar
                            src={testimonial.image}
                            sx={{ width: 56, height: 56, mr: 2 }}
                          />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.position}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 2 }}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} sx={{ color: '#ffd700', fontSize: 20 }} />
                          ))}
                        </Box>
                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                          "{testimonial.content}"
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#f8f9ff' }}>
        <Container maxWidth="lg">
          <Paper
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
                pointerEvents: 'none'
              }
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: '#ffffff', textShadow: '0 2px 6px rgba(0,0,0,0.25)' }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 1, color: 'rgba(255,255,255,0.92)', maxWidth: 600, mx: 'auto', textShadow: '0 1px 3px rgba(0,0,0,0.25)' }}>
              Join thousands of businesses that trust us with their financial future
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                py: 2.5,
                px: 6,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '100px',
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Get Started
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
