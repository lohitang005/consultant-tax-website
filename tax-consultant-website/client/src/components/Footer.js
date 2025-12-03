import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  alpha,
  Stack,
  Button,
  TextField,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "FAQ", path: "/faq" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Tax Advisory", path: "/services/tax-advisory" },
        { name: "Business Consulting", path: "/services/business-consulting" },
        { name: "Corporate Services", path: "/services/corporate-services" },
        { name: "International Tax", path: "/services/international-tax" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Tax Calculator", path: "/calculator" },
        { name: "Downloads", path: "/resources#downloads" },
        { name: "Forms", path: "/resources#forms" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <LinkedInIcon />, 
      url: "https://www.linkedin.com/company/rkbconsultants/posts/?feedView=all", 
      label: "LinkedIn",
      color: "#0A66C2"
    },
    { 
      icon: <TwitterIcon />, 
      url: "https://twitter.com/RastogiAssoc", 
      label: "Twitter",
      color: "#1DA1F2"
    },
    { 
      icon: <FacebookIcon />, 
      url: "https://www.facebook.com/RastogiAssociates", 
      label: "Facebook",
      color: "#1877F2"
    },
    { 
      icon: <InstagramIcon />, 
      url: "https://www.instagram.com/rastogiassociates", 
      label: "Instagram",
      color: "#E4405F"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, 
            ${alpha(theme.palette.primary.main, 0)}, 
            ${alpha(theme.palette.primary.main, 0.2)}, 
            ${alpha(theme.palette.primary.main, 0)})`
        }
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ py: { xs: 4, md: 6 } }}>
          {/* Company Info & Newsletter */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Rastogi & Associates
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Expert tax consultation and business advisory services for your financial success.
                </Typography>
              </Box>

              {/* Newsletter Subscription */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Subscribe to Our Newsletter
                </Typography>
                <Stack direction="row" spacing={1}>
                  <TextField
                    size="small"
                    placeholder="Enter your email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: alpha(theme.palette.background.paper, 0.5),
                        '&:hover': {
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                          }
                        }
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      whiteSpace: 'nowrap',
                      minWidth: 'auto'
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </Box>

              {/* Contact Info */}
              <Stack spacing={1.5}>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Office%20No.%20G-9%2C%20Ground%20Floor%2C%20Pearls%20Best%20Heights-1%2C%20Netaji%20Subhash%20Palace%20%28NSP%29%2C%20Pitampura%2C%20New%20Delhi-110034"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    color: 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="body2" component="span">
                    Office No. G-9, Ground Floor, Pearls Best Heights-1, Netaji Subhash Palace (NSP), Pitampura, New Delhi-110034
                  </Typography>
                </Link>
                <Link
                  href="tel:+919927848855"
                  sx={{
                    textDecoration: 'none',
                    color: 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="body2" component="span">
                    +91 9927848855
                  </Typography>
                </Link>
                <Link
                  href="mailto:parth@rastogiassociates.com"
                  sx={{
                    textDecoration: 'none',
                    color: 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="body2" component="span">
                    parth@rastogiassociates.com
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          {sections.map((section, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  mb: 2
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link, idx) => (
                  <Link
                    key={idx}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(4px)'
                      },
                      display: 'block'
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Social Links & Back to Top */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                mb: 2
              }}
            >
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'text.secondary',
                    bgcolor: alpha(theme.palette.background.paper, 0.8),
                    border: '1px solid',
                    borderColor: alpha(theme.palette.divider, 0.1),
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: social.color,
                      bgcolor: alpha(social.color, 0.1),
                      transform: 'translateY(-3px)',
                      boxShadow: `0 4px 12px ${alpha(social.color, 0.15)}`
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
            <Button
              onClick={scrollToTop}
              startIcon={<KeyboardArrowUpIcon />}
              sx={{
                color: 'text.secondary',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Back to Top
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            py: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: 1
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Rastogi & Associates. All rights reserved.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              '& a': {
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'primary.main'
                }
              }
            }}
          >
            <Link component={RouterLink} to="/privacy-policy">Privacy Policy</Link>
            <Link component={RouterLink} to="/terms-of-service">Terms of Service</Link>
            <Link component={RouterLink} to="/sitemap">Sitemap</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
