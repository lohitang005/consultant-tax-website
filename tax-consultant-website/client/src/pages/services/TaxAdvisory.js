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
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalculateIcon from '@mui/icons-material/Calculate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const TaxAdvisory = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Tax Advisory Services | Expert Tax Planning & Consultation | Rastogi & Associates";
  const seoDescription = "Comprehensive tax advisory services including tax planning, compliance, and consultation. Expert guidance for individuals and businesses. Get personalized tax solutions.";
  const seoKeywords = "tax advisory, tax planning, tax consultation, tax compliance, tax services, tax expert, tax advisor, tax consultant";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/tax-advisory"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Tax Advisory Services',
          provider: {
            '@type': 'Organization',
            name: 'Rastogi & Associates'
          },
          areaServed: ['Delhi', 'Noida', 'Gurgaon', 'India'],
          serviceType: 'Tax Advisory',
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
                  Tax Advisory Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Expert tax planning and advisory solutions to optimize your tax position.
                  Comprehensive guidance for individuals and businesses.
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
            Comprehensive Tax Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide expert tax advisory services to help individuals 
            and businesses optimize their tax positions while ensuring full compliance with tax laws 
            and regulations. Our experienced team of tax professionals delivers personalized solutions 
            tailored to your specific needs.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From strategic tax planning and compliance management to representation in tax matters, 
            we offer comprehensive support to help you navigate the complex tax landscape and achieve 
            your financial objectives.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4}>
          {[
            {
              title: "Tax Planning",
              icon: <CalculateIcon sx={{ fontSize: 40 }} />,
              description: "Strategic tax planning solutions to optimize your tax position",
              features: [
                "Tax Structuring",
                "Investment Planning",
                "Estate Planning",
                "Business Tax Strategy",
                "Tax-Efficient Solutions",
                "Risk Assessment"
              ]
            },
            {
              title: "Tax Compliance",
              icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive tax compliance management services",
              features: [
                "Tax Return Preparation",
                "Compliance Reviews",
                "Audit Support",
                "Filing Assistance",
                "Documentation Support",
                "Regulatory Updates"
              ]
            },
            {
              title: "Tax Consultation",
              icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
              description: "Expert tax consultation and advisory services",
              features: [
                "Tax Advisory",
                "Transaction Support",
                "Tax Implications",
                "Strategic Guidance",
                "Tax Optimization",
                "Expert Opinions"
              ]
            },
            {
              title: "Tax Representation",
              icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
              description: "Professional representation in tax matters",
              features: [
                "Tax Authority Liaison",
                "Dispute Resolution",
                "Appeal Support",
                "Assessment Defense",
                "Settlement Negotiation",
                "Compliance Defense"
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
            Our Tax Advisory Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <DescriptionIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Assessment & Planning",
                description: "Thorough evaluation of your tax situation and development of tailored tax strategies."
              },
              {
                icon: <CalculateIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Implementation",
                description: "Expert execution of tax planning strategies with focus on compliance and optimization."
              },
              {
                icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Ongoing Support",
                description: "Continuous monitoring, updates, and advisory support for your tax matters."
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
              question: "How can tax advisory services benefit me or my business?",
              answer: "Tax advisory services can help optimize your tax position, ensure compliance, reduce tax liabilities, and identify tax-saving opportunities. Our experts provide strategic guidance on tax planning, help navigate complex regulations, and ensure you're taking advantage of all available deductions and credits while maintaining full compliance."
            },
            {
              question: "What tax planning strategies do you recommend?",
              answer: "We develop customized tax planning strategies based on your specific situation and goals. This may include income timing, deduction optimization, investment structuring, business entity selection, and retirement planning. Our recommendations always consider both immediate tax benefits and long-term financial implications."
            },
            {
              question: "How often should I review my tax planning strategy?",
              answer: "We recommend reviewing your tax planning strategy at least annually, as well as when significant life or business changes occur. Regular reviews help ensure your strategy remains optimal as tax laws, business conditions, and personal circumstances change. We provide ongoing monitoring and updates to keep your tax planning current."
            },
            {
              question: "What support do you provide during tax audits?",
              answer: "We provide comprehensive support during tax audits, including preparing documentation, representing you before tax authorities, responding to inquiries, and negotiating settlements if needed. Our team has extensive experience in handling tax audits and can guide you through the entire process while protecting your interests."
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
            Ready to Optimize Your Tax Strategy?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our expert advisors help you develop effective tax strategies.
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

export default TaxAdvisory; 