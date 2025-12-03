import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Breadcrumbs,
  Paper,
  CardMedia,
  alpha,
  Stack,
  CardActionArea
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalculateIcon from '@mui/icons-material/Calculate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Breadcrumb from '../components/Breadcrumb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Link as RouterLink } from 'react-router-dom';

const serviceCategories = [
  {
    title: "Chartered Accountant Services in Delhi NCR",
    description: "Expert CA services across Delhi, Noida, Gurgaon, and Faridabad regions",
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    services: [
      "Audit & Assurance Services in Delhi NCR",
      "Financial Statement Preparation for Companies in Noida",
      "Corporate Finance Advisory in Gurgaon",
      "Business Valuation Services across Delhi NCR",
      "Merger & Acquisition Support in Delhi",
      "Internal Audit Services in NCR Region"
    ]
  },
  {
    title: "Tax Services Pan India",
    description: "Comprehensive tax solutions for individuals and businesses across India",
    icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    services: [
      "Income Tax Return Filing in Delhi NCR",
      "Tax Planning & Advisory Services",
      "International Taxation Services",
      "Transfer Pricing Services",
      "Tax Audit Services in Delhi NCR",
      "NRI Taxation Services"
    ]
  },
  {
    title: "GST Services in Delhi NCR",
    description: "End-to-end GST solutions for businesses in Delhi, Noida, and Gurgaon",
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    services: [
      "GST Registration in Delhi NCR",
      "GST Return Filing Services",
      "GST Compliance Management",
      "GST Audit Services in Delhi",
      "E-way Bill Solutions",
      "Input Tax Credit Optimization"
    ]
  },
  {
    title: "Legal & Corporate Services",
    description: "Legal and corporate compliance services across India",
    icon: <GavelIcon sx={{ fontSize: 40 }} />,
    services: [
      "Company Registration in Delhi NCR",
      "Trademark Registration Services",
      "FEMA Compliance Services",
      "Corporate Legal Advisory",
      "ROC Compliance Services",
      "Legal Documentation Services"
    ]
  }
];

const locations = [
  {
    region: "Delhi",
    areas: ["Nehru Place", "Connaught Place", "Janakpuri", "Dwarka", "South Extension"]
  },
  {
    region: "Noida",
    areas: ["Sector 18", "Sector 62", "Sector 63", "Greater Noida", "Noida Extension"]
  },
  {
    region: "Gurgaon",
    areas: ["DLF Cyber City", "Udyog Vihar", "Sohna Road", "Golf Course Road", "MG Road"]
  },
  {
    region: "Pan India",
    areas: ["Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune"]
  }
];

const specializations = [
  {
    title: "Industry Specializations",
    items: [
      "Real Estate & Construction",
      "Information Technology",
      "Manufacturing & Production",
      "E-commerce & Digital Services",
      "Healthcare & Pharmaceuticals",
      "Retail & Consumer Goods"
    ]
  },
  {
    title: "Business Segments",
    items: [
      "Startups & MSMEs",
      "Large Corporations",
      "International Companies",
      "Government Organizations",
      "Non-Profit Organizations",
      "Professional Services Firms"
    ]
  }
];

const additionalServices = [
  {
    title: "Litigation & Dispute Resolution",
    icon: <GavelIcon sx={{ fontSize: 40 }} />,
    description: "Expert legal representation and dispute resolution services across Delhi NCR",
    link: "/services/litigation",
    services: [
      {
        name: "Tax Litigation Management",
        details: "Comprehensive handling of tax litigation cases before various authorities in Delhi NCR",
        subServices: [
          "Representation before Income Tax Appellate Tribunal (ITAT)",
          "Handling appeals before Commissioner (Appeals)",
          "Dispute resolution under Direct Tax Vivad se Vishwas Scheme",
          "Assistance in tax assessment proceedings"
        ]
      },
      {
        name: "Income Tax Dispute Resolution",
        details: "Strategic resolution of income tax disputes with tax authorities",
        subServices: [
          "Filing appeals and petitions",
          "Representation in assessment proceedings",
          "Settlement commission matters",
          "Responding to tax notices"
        ]
      },
      {
        name: "Legal Proceedings",
        details: "Expert assistance in filing and managing legal cases",
        subServices: [
          "Filing writ petitions",
          "High Court appeals",
          "Supreme Court matters",
          "Alternative dispute resolution"
        ]
      }
    ]
  },
  {
    title: "Indirect Taxation",
    icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    description: "Comprehensive GST and indirect tax services in Delhi NCR",
    link: "/services/indirect-tax",
    services: [
      {
        name: "GST Services",
        details: "End-to-end GST compliance and advisory services",
        subServices: [
          "Monthly/Quarterly GSTR filing",
          "New GSTIN registration across India",
          "GST audit and assessment support",
          "GST refund processing",
          "E-way bill generation and compliance"
        ]
      },
      {
        name: "Other Indirect Taxes",
        details: "Management of various indirect tax matters",
        subServices: [
          "VAT assessment and appeals",
          "Customs duty planning and compliance",
          "Excise duty matters",
          "Professional tax registration and returns"
        ]
      }
    ]
  },
  {
    title: "International Taxation",
    icon: <PublicIcon sx={{ fontSize: 40 }} />,
    description: "Expert international tax advisory services for global businesses",
    link: "/services/international-tax",
    services: [
      {
        name: "DTAA Services",
        details: "Double Taxation Avoidance Agreement consultation",
        subServices: [
          "DTAA benefit analysis and planning",
          "Tax treaty interpretation",
          "Foreign tax credit optimization",
          "Cross-border transaction structuring"
        ]
      },
      {
        name: "International Business Advisory",
        details: "Comprehensive support for international operations",
        subServices: [
          "Transfer pricing documentation",
          "International tax planning",
          "Inbound investment structuring",
          "Outbound investment advisory"
        ]
      }
    ]
  },
  {
    title: "Corporate Services",
    description: "Comprehensive business solutions including company registration, compliance, and restructuring",
    icon: <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    features: [
      "Company Registration",
      "Corporate Compliance",
      "Business Restructuring",
      "Due Diligence"
    ],
    link: "/services/corporate-services"
  },
  {
    title: "Planning and Advisory",
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
    description: "Strategic tax and business planning services",
    link: "/services/planning",
    services: [
      {
        name: "Tax Planning",
        details: "Comprehensive tax optimization strategies",
        subServices: [
          "Business transaction structuring",
          "Tax-efficient investment planning",
          "Merger and acquisition tax planning",
          "Corporate tax optimization"
        ]
      },
      {
        name: "Advisory Services",
        details: "Expert business and compliance advisory",
        subServices: [
          "Contract review and structuring",
          "Regulatory compliance advisory",
          "Business restructuring consultation",
          "Financial planning advisory"
        ]
      }
    ]
  },
  {
    title: "Income Tax Services",
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    description: "Comprehensive income tax filing and compliance solutions",
    link: "/services/income-tax",
    services: [
      {
        name: "Tax Return Filing",
        details: "Professional ITR filing services",
        subServices: [
          "Individual tax returns",
          "Business tax returns",
          "NRI taxation",
          "Tax assessment support"
        ]
      },
      {
        name: "TDS/TCS Services",
        details: "Complete TDS and TCS compliance",
        subServices: [
          "TDS return filing",
          "TCS return filing",
          "Form 16/16A generation",
          "Compliance advisory"
        ]
      }
    ]
  },
  {
    title: "Bookkeeping Services",
    description: "Comprehensive bookkeeping and accounting solutions",
    icon: <ReceiptLongIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    features: [
      "Account Maintenance",
      "Financial Statements",
      "Payroll Services",
      "Reconciliation"
    ],
    link: "/services/bookkeeping-services"
  },
  {
    title: "Other Business Services",
    icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
    description: "Comprehensive business support and advisory solutions",
    link: "/services/other-business",
    services: [
      {
        name: "Business Registration",
        details: "Complete registration services",
        subServices: [
          "MSME registration",
          "Shop act registration",
          "Business licenses",
          "Other registrations"
        ]
      },
      {
        name: "Business Advisory",
        details: "Expert business guidance",
        subServices: [
          "Business restructuring",
          "Due diligence",
          "Business valuation",
          "Financial services"
        ]
      }
    ]
  }
];

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
    icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
    path: '/services/other-business-services',
    features: ['Business Support', 'Outsourcing', 'Advisory Services', 'Compliance']
  }
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <SEO
        title="Our Services - Rastogi & Associates"
        description="Comprehensive financial and business services including corporate services, tax advisory, financial planning, and more."
        url="https://www.rastogiassociates.in/services"
        keywords={[
          'chartered accountant Delhi NCR','GST services Delhi','income tax filing','corporate compliance','litigation services','financial advisory'
        ]}
      />

      <Breadcrumb />

      {/* Modern Hero Section */}
      <Box
        sx={{
          minHeight: '60vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
          pb: { xs: 8, md: 10 },
          pt: { xs: 12, md: 15 }
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)
            `
          }}
        />
        
        {/* Animated Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #5c6bc0, transparent)',
            filter: 'blur(40px)'
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'linear-gradient(225deg, #3949ab, transparent)',
            filter: 'blur(40px)'
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10}>
              <Stack spacing={4} alignItems="center" textAlign="center">
                {/* Animated Title */}
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                    component="h1"
                  sx={{ 
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                      fontWeight: 800,
                      background: 'linear-gradient(to right, #ffffff 0%, #e8eaf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textAlign: 'center',
                      mb: 2,
                      letterSpacing: '-0.02em',
                      textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  Our Services
                </Typography>
                </motion.div>

                {/* Animated Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                      color: 'rgba(255, 255, 255, 0.9)',
                      maxWidth: '800px',
                      mx: 'auto',
                      lineHeight: 1.6,
                      fontWeight: 400,
                      textAlign: 'center',
                      px: 2
                    }}
                  >
                    Comprehensive financial and business solutions tailored to meet your unique needs.
                  </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      color: 'rgba(255, 255, 255, 0.8)',
                      maxWidth: '700px',
                      mx: 'auto',
                      mt: 2,
                      fontWeight: 300,
                      textAlign: 'center'
                    }}
                  >
                  From corporate services to international tax planning, we've got you covered.
                </Typography>
              </motion.div>

                {/* Animated Feature Pills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2 }}
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                    sx={{ mt: 4 }}
                  >
                    <Chip
                      icon={<BusinessIcon sx={{ color: '#fff !important' }} />}
                      label="Expert Solutions"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        borderRadius: '50px',
                        px: 2,
                        '& .MuiChip-label': { px: 2 },
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                    <Chip
                      icon={<HandshakeIcon sx={{ color: '#fff !important' }} />}
                      label="Professional Team"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        borderRadius: '50px',
                        px: 2,
                        '& .MuiChip-label': { px: 2 },
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                    <Chip
                      icon={<TrendingUpIcon sx={{ color: '#fff !important' }} />}
                      label="Growth Focused"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        borderRadius: '50px',
                        px: 2,
                        '& .MuiChip-label': { px: 2 },
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </Stack>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        {/* Decorative Bottom Wave */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: '100%',
            height: '40px',
            background: '#f5f5f5',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)',
            zIndex: 1
          }}
        />
      </Box>

      {/* Services Grid Section */}
      <Box 
        sx={{ 
          bgcolor: '#f8f9fa',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            background: 'linear-gradient(45deg, #e8eaf6 0%, #ffffff 100%)'
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 71, 171, 0.15)',
                        '& .service-icon-wrapper': {
                          transform: 'scale(1.1)',
                          background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                          '& svg': {
                            color: '#ffffff !important'
                          }
                        }
                      }
                    }}
                  >
                    <CardActionArea 
                      component={RouterLink} 
                      to={service.path}
                      sx={{ height: '100%', p: 3 }}
                    >
                      <Box sx={{ mb: 3 }}>
                        <Box
                          className="service-icon-wrapper"
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '20px',
                        display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)',
                            transition: 'all 0.3s ease',
                            '& svg': {
                              fontSize: 32,
                              color: '#1a237e',
                              transition: 'all 0.3s ease'
                            }
                          }}
                        >
                        {service.icon}
                        </Box>
                      </Box>

                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color: '#1a237e',
                          mb: 2
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          minHeight: 70
                        }}
                      >
                      {service.description}
                    </Typography>

                      <Box sx={{ mt: 'auto' }}>
                      <Grid container spacing={1}>
                        {service.features.map((feature, idx) => (
                          <Grid item xs={6} key={idx}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 1
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    bgcolor: '#1a237e',
                                    opacity: 0.7
                                  }}
                                />
                            <Typography
                              variant="body2"
                              sx={{
                                    color: 'text.primary',
                                    fontSize: '0.875rem',
                                    fontWeight: 500
                              }}
                            >
                              {feature}
                            </Typography>
                              </Box>
                          </Grid>
                        ))}
                      </Grid>

                        <Box
                          sx={{
                            mt: 3,
                            pt: 2,
                            borderTop: '1px solid',
                            borderColor: 'rgba(0, 0, 0, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Typography
                            variant="button"
                      sx={{
                              color: '#1a237e',
                              fontWeight: 600,
                              fontSize: '0.875rem',
                        textTransform: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5
                      }}
                    >
                      Learn More
                            <Box
                              component="span"
                              sx={{
                                transition: 'transform 0.2s ease',
                                display: 'inline-block',
                                '.MuiCardActionArea-root:hover &': {
                                  transform: 'translateX(4px)'
                                }
                              }}
                            >
                              →
                            </Box>
                          </Typography>
                        </Box>
                      </Box>
                    </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Box>
    </>
  );
};

export default Services;
