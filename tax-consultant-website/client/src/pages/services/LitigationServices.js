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
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BalanceIcon from '@mui/icons-material/Balance';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const LitigationServices = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Tax Litigation Services | Legal Support & Dispute Resolution | Rastogi & Associates";
  const seoDescription = "Expert tax litigation services including dispute resolution, legal representation, and compliance defense. Professional support for all your tax litigation needs.";
  const seoKeywords = "tax litigation, dispute resolution, legal representation, tax appeals, tax defense, legal advisory, tax court, tax lawyer";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/litigation"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Tax Litigation Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          serviceType: 'Tax Litigation',
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
                  Tax Litigation Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Expert legal representation and dispute resolution services.
                  Professional support throughout your tax litigation journey.
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
            Expert Tax Litigation Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide comprehensive tax litigation services to help 
            individuals and businesses resolve tax disputes effectively. Our experienced team 
            of tax litigation experts offers professional representation and strategic guidance 
            throughout the litigation process.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From dispute resolution and appeals to representation before tax authorities, 
            we offer expert legal support to protect your interests and achieve favorable 
            outcomes in tax litigation matters.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4}>
          {[
            {
              title: "Dispute Resolution",
              icon: <GavelIcon sx={{ fontSize: 40 }} />,
              description: "Expert tax dispute resolution services",
              features: [
                "Tax Dispute Handling",
                "Settlement Negotiation",
                "Mediation Support",
                "Resolution Strategy",
                "Case Assessment",
                "Conflict Resolution"
              ]
            },
            {
              title: "Legal Representation",
              icon: <BalanceIcon sx={{ fontSize: 40 }} />,
              description: "Professional legal representation in tax matters",
              features: [
                "Court Representation",
                "Tax Authority Appeals",
                "Legal Documentation",
                "Case Preparation",
                "Evidence Management",
                "Legal Advisory"
              ]
            },
            {
              title: "Compliance Defense",
              icon: <SecurityIcon sx={{ fontSize: 40 }} />,
              description: "Strong defense in tax compliance matters",
              features: [
                "Audit Defense",
                "Compliance Support",
                "Penalty Abatement",
                "Notice Response",
                "Defense Strategy",
                "Risk Mitigation"
              ]
            },
            {
              title: "Advisory Services",
              icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
              description: "Expert advisory services for tax litigation",
              features: [
                "Legal Consultation",
                "Risk Assessment",
                "Strategic Planning",
                "Preventive Advice",
                "Compliance Review",
                "Expert Opinion"
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
            Our Litigation Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Case Assessment",
                description: "Thorough evaluation of your case and development of effective litigation strategy."
              },
              {
                icon: <GavelIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Legal Proceedings",
                description: "Expert handling of legal proceedings with strong representation."
              },
              {
                icon: <BalanceIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Resolution & Support",
                description: "Strategic resolution pursuit and ongoing legal support throughout the process."
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
              question: "When should I seek tax litigation services?",
              answer: "You should seek tax litigation services when facing tax disputes, audits, assessments, or notices from tax authorities. Early intervention is crucial for better outcomes. Our experts can help assess your situation and recommend the best course of action to protect your interests."
            },
            {
              question: "What types of tax disputes do you handle?",
              answer: "We handle a wide range of tax disputes including income tax, GST, international tax, transfer pricing, and more. Our team has extensive experience in representing clients before various tax authorities, tribunals, and courts, ensuring comprehensive support for all types of tax litigation matters."
            },
            {
              question: "How long does tax litigation typically take?",
              answer: "The duration of tax litigation varies depending on the complexity of the case, the forum of dispute resolution, and the specific issues involved. While some matters may be resolved through settlement in a few months, complex litigation can take longer. We work to expedite the process while ensuring the best possible outcome."
            },
            {
              question: "What support do you provide during tax litigation?",
              answer: "We provide comprehensive support including case assessment, strategy development, documentation preparation, representation before authorities, settlement negotiation, and appeals handling. Our team manages all aspects of the litigation process while keeping you informed and involved in key decisions."
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
            Need Expert Legal Support?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our experienced litigation team help you resolve your tax disputes effectively.
            Schedule a consultation today to discuss your case.
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

export default LitigationServices; 