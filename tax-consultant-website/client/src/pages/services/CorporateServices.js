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
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const CorporateServices = () => {
  const theme = useTheme();

  // SEO metadata
  const seoTitle = "Corporate Services | Company Formation & Compliance | Rastogi & Associates";
  const seoDescription = "Comprehensive corporate services including company formation, compliance, restructuring, and advisory. Expert solutions for businesses of all sizes. Contact us today.";
  const seoKeywords = "corporate services, company formation, business registration, corporate compliance, company restructuring, corporate advisory, business setup, corporate governance";

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.rastogiassociates.in/services/corporate-services"
        keywords={seoKeywords}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Corporate Services',
          provider: { '@type': 'Organization', name: 'Rastogi & Associates' },
          areaServed: ['Delhi', 'Noida', 'Gurgaon', 'India'],
          serviceType: 'Company Formation & Compliance',
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
                  Corporate Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', color: 'white' }}>
                  Comprehensive corporate solutions from company formation to compliance.
                  Expert guidance for your business success at every stage.
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
            Complete Corporate Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            At Rastogi & Associates, we provide end-to-end corporate services to help businesses 
            establish, grow, and thrive. Our expert team ensures smooth business operations through 
            comprehensive compliance management and strategic advisory services.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            From company incorporation and statutory compliance to corporate restructuring and 
            governance, we offer tailored solutions that align with your business objectives 
            while ensuring regulatory compliance.
          </Typography>
        </Paper>

        {/* Core Services Grid */}
        <Grid container spacing={4}>
          {[
            {
              title: "Company Formation",
              icon: <BusinessIcon sx={{ fontSize: 40 }} />,
              description: "Complete assistance in company incorporation and business setup",
              features: [
                "Private Limited Company",
                "Limited Liability Partnership",
                "One Person Company",
                "Partnership Firm",
                "Branch/Liaison Office",
                "Subsidiary Company"
              ]
            },
            {
              title: "Corporate Compliance",
              icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
              description: "Comprehensive statutory compliance management services",
              features: [
                "Annual Compliance",
                "ROC Filings",
                "Secretarial Compliance",
                "Board Meeting Management",
                "Regulatory Reporting",
                "Legal Documentation"
              ]
            },
            {
              title: "Corporate Restructuring",
              icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
              description: "Strategic restructuring and reorganization services",
              features: [
                "Mergers & Acquisitions",
                "Business Restructuring",
                "Share Transfer & Allotment",
                "Capital Restructuring",
                "Due Diligence",
                "Valuation Services"
              ]
            },
            {
              title: "Corporate Advisory",
              icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
              description: "Expert guidance for corporate governance and strategy",
              features: [
                "Business Advisory",
                "Corporate Governance",
                "Risk Management",
                "Regulatory Advisory",
                "Strategic Planning",
                "Board Advisory"
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
            Our Corporate Service Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <GroupsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Requirements Analysis",
                description: "Thorough understanding of your business needs and objectives to provide tailored solutions."
              },
              {
                icon: <DescriptionIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Solution Design",
                description: "Development of comprehensive corporate solutions aligned with regulatory requirements."
              },
              {
                icon: <HandshakeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                title: "Implementation & Support",
                description: "Expert execution of solutions with ongoing support and compliance management."
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
              question: "What are the different types of business entities I can register?",
              answer: "In India, you can register various types of business entities including Private Limited Company, Limited Liability Partnership (LLP), One Person Company (OPC), Partnership Firm, and Sole Proprietorship. Each has its own advantages, compliance requirements, and liability structures. Our experts can help you choose the most suitable structure for your business."
            },
            {
              question: "What are the key compliance requirements for companies?",
              answer: "Companies need to comply with various statutory requirements including annual filings with ROC, maintaining statutory registers, conducting board meetings, filing annual returns, financial statements, and other event-based compliances. The specific requirements vary based on the company type and size."
            },
            {
              question: "How long does it take to incorporate a company?",
              answer: "The timeline for company incorporation typically ranges from 7-15 working days, depending on the type of entity and documentation readiness. This includes obtaining DSC, DIN, name approval, and certificate of incorporation. Our streamlined process ensures minimal delays."
            },
            {
              question: "What corporate restructuring services do you provide?",
              answer: "We offer comprehensive restructuring services including mergers, acquisitions, demergers, share transfers, capital restructuring, and business reorganization. Our team handles due diligence, valuation, documentation, and regulatory compliance throughout the restructuring process."
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
            Ready to Transform Your Business?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', color: 'white' }}>
            Let our corporate experts help you navigate business regulations and compliance.
            Schedule a consultation today to discuss your business needs.
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

export default CorporateServices; 