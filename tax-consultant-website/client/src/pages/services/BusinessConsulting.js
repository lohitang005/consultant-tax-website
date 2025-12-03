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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import InsightsIcon from '@mui/icons-material/Insights';
import TransformIcon from '@mui/icons-material/Transform';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const BusinessConsulting = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Business Consulting Services | Strategic Planning & Growth | Rastogi & Associates";
  const seoDescription = "Expert business consulting services including strategic planning, operational excellence, business transformation, and growth advisory. Transform your business with our expertise.";
  const seoKeywords = "business consulting, strategic planning, operational excellence, business transformation, growth strategy, business advisory, performance improvement, digital transformation";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/business-consulting"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Business Consulting Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          serviceType: 'Business Consulting',
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
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: `linear-gradient(to top, ${alpha(theme.palette.background.default, 0.2)}, transparent)`,
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
                  Business Consulting Services
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4, 
                    maxWidth: '800px',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    lineHeight: 1.5,
                    fontWeight: 500
                  }}
                >
                  Transform your business with strategic insights and expert guidance.
                  Drive growth, optimize operations, and achieve sustainable success.
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
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Strategic Business Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide comprehensive business consulting services to help 
            organizations achieve their strategic objectives. Our expert team combines industry 
            knowledge with innovative solutions to drive sustainable growth and operational excellence.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From strategic planning and operational optimization to digital transformation and 
            growth strategies, we partner with you to navigate challenges and capitalize on 
            opportunities in today's dynamic business environment.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4}>
          {[
            {
              title: "Strategic Planning",
              icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive strategic planning and implementation services",
              features: [
                "Business Strategy Development",
                "Market Entry Strategy",
                "Growth Planning",
                "Strategic Analysis",
                "Competitive Assessment",
                "Strategic Implementation"
              ]
            },
            {
              title: "Operational Excellence",
              icon: <SettingsIcon sx={{ fontSize: 40 }} />,
              description: "Optimize operations for enhanced efficiency and performance",
              features: [
                "Process Optimization",
                "Cost Reduction",
                "Quality Management",
                "Supply Chain Optimization",
                "Performance Metrics",
                "Operational Efficiency"
              ]
            },
            {
              title: "Business Analytics",
              icon: <InsightsIcon sx={{ fontSize: 40 }} />,
              description: "Data-driven insights for informed decision making",
              features: [
                "Performance Analytics",
                "Market Research",
                "Financial Analysis",
                "Business Intelligence",
                "Predictive Analytics",
                "KPI Development"
              ]
            },
            {
              title: "Business Transformation",
              icon: <TransformIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive business transformation solutions",
              features: [
                "Digital Transformation",
                "Change Management",
                "Process Reengineering",
                "Technology Integration",
                "Organization Design",
                "Culture Transformation"
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
                      <Typography variant="h5" sx={{ ml: 2, fontWeight: 600 }}>
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
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Our Consulting Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <InsightsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Assessment & Analysis",
                description: "Comprehensive evaluation of business challenges and opportunities through data-driven analysis."
              },
              {
                icon: <LightbulbIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Solution Development",
                description: "Creation of tailored strategies and solutions aligned with your business objectives."
              },
              {
                icon: <TransformIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Implementation & Support",
                description: "Expert execution of solutions with continuous monitoring and optimization."
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
                    <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
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
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Frequently Asked Questions
          </Typography>
          {[
            {
              question: "How can business consulting help my organization?",
              answer: "Business consulting can help identify growth opportunities, optimize operations, improve profitability, and navigate challenges. Our consultants provide expert insights, strategic planning, and implementation support to achieve your business objectives. We help streamline processes, reduce costs, enhance efficiency, and drive sustainable growth."
            },
            {
              question: "What industries do you serve?",
              answer: "We serve a wide range of industries including manufacturing, retail, technology, healthcare, financial services, and professional services. Our consultants have deep industry expertise and adapt our solutions to meet sector-specific challenges and requirements."
            },
            {
              question: "How long does a typical consulting engagement last?",
              answer: "The duration varies based on project scope and complexity. Strategic planning projects typically range from 2-3 months, while transformation initiatives may extend to 6-12 months. We work with you to define clear milestones and deliverables, ensuring effective project management throughout the engagement."
            },
            {
              question: "What is your approach to digital transformation?",
              answer: "Our digital transformation approach combines technology, process, and people elements. We assess your current digital maturity, identify opportunities for automation and innovation, develop a roadmap, and support implementation. This includes technology selection, process redesign, change management, and capability building."
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
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
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
            background: `linear-gradient(60deg, #1a237e, #0d47a1)`,
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
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.5px'
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography 
              sx={{ 
                mb: 4, 
                opacity: 1, 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              Let our expert consultants help you navigate challenges and drive growth.
              Schedule a consultation today to discuss your business needs.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: theme.palette.primary.main,
                color: 'white',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.9),
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                }
              }}
            >
              Schedule a Free Consultation
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessConsulting; 