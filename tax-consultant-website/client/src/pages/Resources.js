import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  CardMedia,
  Chip,
  Paper,
  IconButton,
  Tooltip,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Helmet } from 'react-helmet';
import SEO from '../components/SEO';
import { calculateTax, getTaxInfo } from '../services/api';
import { Link } from 'react-router-dom';
import TaxCalculator from '../components/TaxCalculator';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const companyResources = [
  {
    title: 'Company Profile',
    format: 'PDF',
    size: '2.5 MB',
    icon: <BusinessIcon />,
    link: 'images/resources/Rastogi-&-Associates-Company-Profile.pdf',
    description: 'Detailed overview of Rastogi & Associates, our services, and expertise',
    category: 'Company'
  },
  {
    title: 'Company Brochure',
    format: 'PDF',
    size: '10.4 MB',
    icon: <ArticleIcon />,
    link: 'images/resources/Rastogi-&-Associates-Company-Broucher.pdf',
    description: 'Comprehensive brochure showcasing our services and achievements',
    category: 'Marketing'
  },
  {
    title: 'Business Card',
    format: 'JPG',
    size: '80.8 KB',
    icon: <ContactMailIcon />,
    link: 'images/company/business-card.jpg',
    description: 'Digital version of our business card for easy reference',
    category: 'Contact'
  },
  {
    title: 'Important Links',
    format: 'Web Links',
    icon: <LinkIcon />,
    description: 'Quick access to essential tax and business resources',
    category: 'Links',
    links: [
      {
        name: 'Income Tax Portal',
        url: 'https://www.incometax.gov.in/'
      },
      {
        name: 'GST Portal',
        url: 'https://www.gst.gov.in/'
      },
      {
        name: 'Ministry of Corporate Affairs',
        url: 'https://www.mca.gov.in/'
      },
      {
        name: 'SEBI Official Website',
        url: 'https://www.sebi.gov.in/'
      }
    ]
  }
];

const calculators = [
  {
    id: 'income-tax',
    name: 'Income Tax Calculator',
    description: 'Calculate your income tax liability based on latest tax slabs'
  },
  {
    id: 'gst',
    name: 'GST Calculator',
    description: 'Calculate GST amount and final price'
  },
  {
    id: 'tds',
    name: 'TDS Calculator',
    description: 'Calculate TDS deductions for various payment types'
  }
];

// Replace LoadingButton with Button + CircularProgress
const LoadingButtonWrapper = ({ loading, children, ...props }) => (
  <Button
    {...props}
    disabled={loading}
    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : props.startIcon}
  >
    {children}
  </Button>
);

const Resources = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState('calculators');
  const [income, setIncome] = useState('');
  const [taxYear, setTaxYear] = useState('2024');
  const [calculatedTax, setCalculatedTax] = useState(null);
  const [selectedCalculator, setSelectedCalculator] = useState('income-tax');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [taxInfo, setTaxInfo] = useState(null);
  const [gstRate, setGstRate] = useState('18');
  const [tdsCategory, setTdsCategory] = useState('salary');
  const [calculationResult, setCalculationResult] = useState(null);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadAsset, setLeadAsset] = useState('');

  // Fetch tax information on component mount
  useEffect(() => {
    const fetchTaxInfo = async () => {
      try {
        const response = await getTaxInfo();
        setTaxInfo(response.data);
      } catch (err) {
        setError('Failed to fetch tax information');
        console.error(err);
      }
    };
    fetchTaxInfo();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const calculateTax = () => {
    const incomeNum = parseFloat(income);
    let tax = 0;
    
    if (incomeNum <= 50000) {
      tax = incomeNum * 0.15;
    } else if (incomeNum <= 100000) {
      tax = 7500 + (incomeNum - 50000) * 0.25;
    } else {
      tax = 20000 + (incomeNum - 100000) * 0.35;
    }

    setCalculatedTax(tax.toFixed(2));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setSnackbarOpen(true);
  };

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    setCalculationResult(null);

    try {
      const data = {
        calculatorType: selectedCalculator,
        amount: income,
        taxYear,
        category: tdsCategory,
        gstRate
      };

      const response = await calculateTax(data);
      setCalculationResult(response.data);
    } catch (err) {
      setError(err.message || 'Failed to calculate tax');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredContent = companyResources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || resource.category === selectedCategory)
  );

  const resources = {
    calculators: [
      {
        title: 'Tax Calculators',
        description: 'Calculate Income Tax, GST, and TDS instantly',
        component: <TaxCalculator />
      }
    ],
    educational: [
      {
        title: 'Tax Guides',
        description: 'Comprehensive guides on various tax topics and regulations',
        link: '/resources/guides'
      },
      {
        title: 'FAQs',
        description: 'Find answers to commonly asked tax-related questions',
        link: '/faq'
      }
    ],
    templates: [
      {
        title: 'Forms & Documents',
        description: 'Download important tax forms and documents',
        link: '/resources/forms'
      },
      {
        title: 'Excel Templates',
        description: 'Useful Excel templates for tax calculations',
        link: '/resources/templates'
      }
    ]
  };

  const renderContent = () => {
    const currentResources = resources[activeTab] || [];

    if (activeTab === 'calculators') {
      return currentResources[0].component;
    }

    if (activeTab === 'company-resources') {
      return (
        <Grid container spacing={4} mt={2}>
          {companyResources.map((resource, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box sx={{ 
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      color: 'primary.main'
                    }}>
                      {resource.icon}
                    </Box>
                    <Typography variant="h6" component="h3">
                      {resource.title}
                    </Typography>
                  </Box>
                  <Typography color="textSecondary" paragraph>
                    {resource.description}
                  </Typography>
                  {resource.format && resource.format !== 'Web Links' && (
                    <Typography color="textSecondary" variant="body2">
                      Format: {resource.format} • Size: {resource.size}
                    </Typography>
                  )}
                  {resource.links && (
                    <List dense>
                      {resource.links.map((link, linkIndex) => (
                        <ListItem key={linkIndex} disablePadding>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <LinkIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={
                              <a 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                  color: 'inherit', 
                                  textDecoration: 'none'
                                }}
                                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                              >
                                {link.name}
                              </a>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </CardContent>
                <CardActions>
                  {!resource.links && (
                    <Button 
                      component="a"
                      href={resource.link}
                      download
                      size="small" 
                      color="primary"
                      startIcon={<DownloadIcon />}
                      sx={{ ml: 1 }}
                      onClick={(e) => {
                        // Prevent default if file doesn't exist
                        if (!resource.link) {
                          e.preventDefault();
                          // You could show a snackbar here indicating the file is not available
                        }
                      }}
                    >
                      Download
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }

    return (
      <Grid container spacing={4} mt={2}>
        {currentResources.map((resource, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {resource.title}
                </Typography>
                <Typography>
                  {resource.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  component={Link} 
                  to={resource.link}
                  size="small" 
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SEO
        title="Tax Resources & Company Information | Rastogi & Associates"
        description="Access tax calculators, company profile and brochure, and important government links for tax and corporate compliance."
        url="https://www.rastogiassociates.in/resources"
        keywords={["tax calculators","company profile","GST portal","Income tax portal","MCA links"]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 4 }} separator={<NavigateNextIcon fontSize="small" />}>
        <MuiLink component={Link} to="/" color="inherit">
          Home
        </MuiLink>
        <Typography color="text.primary">Resources</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom align="center">
        Resources
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph align="center">
        Get conversion-focused tools and downloads built for Indian founders, finance teams, and professionals. Updated for FY 2025-26.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          centered
          sx={{
            '& .MuiTab-root': {
              fontSize: '1.1rem',
              textTransform: 'none',
              minWidth: 120
            }
          }}
        >
          <Tab 
            label="Tax Calculators" 
            value="calculators"
            icon={<CalculateIcon />}
            iconPosition="start"
          />
          <Tab 
            label="Company Resources" 
            value="company-resources"
            icon={<ArticleIcon />}
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {renderContent()}

      {/* Lead magnets removed per request */}

      {/* SEO Content Section */}
      <Box sx={{ mt: 12 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'text.primary' }}>
          Professional Tax Resources for Modern Businesses
        </Typography>
        <Typography paragraph color="text.secondary">
          Access our collection of tax resources designed to help businesses and individuals navigate the complex world of taxation. From AI-powered calculators to essential company resources, we provide the tools you need to make informed financial decisions.
        </Typography>
        <Typography paragraph color="text.secondary">
          Our resources are regularly updated to reflect the latest tax regulations and business practices. Whether you're a startup founder, business owner, or individual taxpayer, our comprehensive suite of tools and templates will help you manage your taxes efficiently.
        </Typography>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Resources; 