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
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const IndirectTaxServices = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Indirect Tax Services | GST & Customs Duty | Rastogi & Associates";
  const seoDescription = "Expert indirect tax services including GST compliance, customs duty, and advisory services. Professional support for all your indirect tax requirements.";
  const seoKeywords = "indirect tax services, GST services, customs duty, tax compliance, GST registration, GST return filing, customs clearance, indirect tax advisory";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/indirect-tax"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Indirect Tax Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          serviceType: 'GST & Indirect Tax',
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
                  Indirect Tax Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Comprehensive GST and customs duty solutions for your business.
                  Expert guidance for all indirect tax matters.
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
            Expert Indirect Tax Solutions
                </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide comprehensive indirect tax services to help businesses
            navigate the complexities of GST, customs duty, and other indirect tax regulations.
            Our experienced team ensures compliance while optimizing your tax position.
                </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From GST registration and return filing to customs duty assessment and compliance,
            we offer end-to-end solutions tailored to your business needs.
                </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4}>
          {[
            {
              title: "GST Services",
              icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive GST compliance and advisory",
              features: [
                "GST Registration",
                "Return Filing",
                "Compliance Management",
                "Input Credit Planning",
                "GST Audit Support",
                "Refund Processing"
              ]
            },
            {
              title: "Customs Duty",
              icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
              description: "Expert customs duty management",
              features: [
                "Classification Support",
                "Valuation Services",
                "Duty Assessment",
                "Import/Export Advisory",
                "Compliance Review",
                "Documentation Support"
              ]
            },
            {
              title: "Business Advisory",
              icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
              description: "Strategic indirect tax advisory",
              features: [
                "Tax Structure Design",
                "Supply Chain Planning",
                "Transaction Advisory",
                "Risk Assessment",
                "Industry Solutions",
                "Policy Guidance"
              ]
            },
            {
              title: "Support Services",
              icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive support for indirect taxes",
              features: [
                "Notice Handling",
                "Dispute Resolution",
                "Representation Services",
                "Compliance Training",
                "System Implementation",
                "Regular Updates"
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
            Our Service Approach
                </Typography>
                <Grid container spacing={3}>
            {[
              {
                icon: <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Assessment & Planning",
                description: "Thorough evaluation of your indirect tax requirements and development of compliance strategies."
              },
              {
                icon: <ReceiptIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Implementation",
                description: "Expert execution of compliance procedures and tax optimization measures."
              },
              {
                icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Ongoing Support",
                description: "Continuous monitoring, compliance management, and advisory support."
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
              question: "What indirect tax services do you provide?",
              answer: "We offer comprehensive indirect tax services including GST registration, return filing, compliance management, customs duty assessment, advisory services, and dispute resolution. Our services cover all aspects of indirect taxation to ensure complete compliance and optimization."
            },
            {
              question: "How can you help with GST compliance?",
              answer: "Our GST compliance services include registration assistance, monthly/quarterly return filing, input credit management, reconciliation, audit support, and refund processing. We ensure timely compliance while maximizing available benefits under the GST regime."
            },
            {
              question: "What customs duty services do you offer?",
              answer: "We provide end-to-end customs duty services including classification of goods, valuation assistance, duty optimization, import/export documentation, compliance review, and representation before customs authorities."
            },
            {
              question: "How do you handle indirect tax disputes?",
              answer: "Our team handles indirect tax disputes through comprehensive assessment, strategic planning, and expert representation. We assist in notice responses, appeal proceedings, and dispute resolution while ensuring your interests are protected throughout the process."
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
            Ready to Simplify Your Indirect Tax Compliance?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our indirect tax experts help you navigate GST and customs regulations.
            Schedule a consultation today to discuss your compliance needs.
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

export default IndirectTaxServices; 