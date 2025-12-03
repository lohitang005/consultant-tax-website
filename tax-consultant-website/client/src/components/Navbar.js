import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Fade
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArticleIcon from '@mui/icons-material/Article';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const pages = [
  { title: 'Home', path: '/', icon: <HomeIcon /> },
  { title: 'About', path: '/about', icon: <InfoIcon /> },
  { 
    title: 'Services', 
    path: '/services', 
    icon: <BusinessCenterIcon />,
    subItems: [
      { title: 'Corporate Services', path: '/services/corporate-services' },
      { title: 'Income Tax Services', path: '/services/income-tax' },
      { title: 'Indirect Tax Services', path: '/services/indirect-tax' },
      { title: 'International Tax', path: '/services/international-tax' },
      { title: 'Tax Advisory', path: '/services/tax-advisory' },
      { title: 'Financial Advisory', path: '/services/financial-advisory' },
      { title: 'Business Consulting', path: '/services/business-consulting' },
      { title: 'Bookkeeping Services', path: '/services/bookkeeping-services' },
      { title: 'Litigation Services', path: '/services/litigation' },
      { title: 'Other Business Services', path: '/services/other-business' },
      { title: 'Planning Services', path: '/services/planning' }
    ]
  },
  { title: 'Resources', path: '/resources', icon: <LibraryBooksIcon /> },
  { title: 'Blog', path: '/blog', icon: <ArticleIcon /> },
  { title: 'FAQ', path: '/faq', icon: <HelpIcon /> },
  { title: 'Contact', path: '/contact', icon: <ContactMailIcon /> }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuAnchor, setServicesMenuAnchor] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState('');
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesMenuOpen = (event) => {
    if (!isMobile) {
      setServicesMenuAnchor(event.currentTarget);
    }
  };

  const handleServicesMenuClose = () => {
    setServicesMenuAnchor(null);
  };

  const handleSubmenuClick = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? '' : submenu);
  };

  const isPathActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        py: 2
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'primary.main' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {pages.map((page) => (
          <React.Fragment key={page.path}>
            <ListItem 
              component={Link} 
              to={page.path}
              onClick={() => {
                if (page.subItems) {
                  handleSubmenuClick(page.title);
                } else {
                  handleDrawerToggle();
                }
              }}
              sx={{
                color: isPathActive(page.path) ? 'primary.main' : 'text.primary',
                bgcolor: isPathActive(page.path) ? 'rgba(26, 35, 126, 0.08)' : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(26, 35, 126, 0.04)',
                }
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {page.icon}
              </ListItemIcon>
              <ListItemText 
                primary={page.title} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: isPathActive(page.path) ? 600 : 400
                  }
                }}
              />
              {page.subItems && (
                <KeyboardArrowDownIcon 
                  sx={{ 
                    transform: openSubmenu === page.title ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              )}
            </ListItem>
            {page.subItems && (
              <Collapse in={openSubmenu === page.title} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {page.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.path}
                      component={Link}
                      to={subItem.path}
                      onClick={handleDrawerToggle}
                      sx={{
                        pl: 7,
                        color: isPathActive(subItem.path) ? 'primary.main' : 'text.primary',
                        bgcolor: isPathActive(subItem.path) ? 'rgba(26, 35, 126, 0.08)' : 'transparent',
                        '&:hover': {
                          bgcolor: 'rgba(26, 35, 126, 0.04)',
                        }
                      }}
                    >
                      <ListItemText 
                        primary={subItem.title}
                        sx={{ 
                          '& .MuiListItemText-primary': {
                            fontSize: '0.9rem',
                            fontWeight: isPathActive(subItem.path) ? 600 : 400
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ p: 2, mt: 2 }}>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
            boxShadow: '0 4px 12px rgba(26, 35, 126, 0.2)',
            '&:hover': {
              background: 'linear-gradient(135deg, #3949ab 0%, #1a237e 100%)',
            }
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={trigger ? 2 : 0}
        sx={{
          background: {
            xs: '#ffffff',
            md: (trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)')
          },
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: {
            xs: 'rgba(26, 35, 126, 0.1)',
            md: (trigger ? 'rgba(26, 35, 126, 0.1)' : 'transparent')
          },
          transition: 'all 0.3s ease',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 4,
                display: 'flex',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Rastogi & Associates
            </Typography>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(26, 35, 126, 0.04)'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <React.Fragment key={page.path}>
                  {page.subItems ? (
                    <>
                      <Button
                        onMouseEnter={handleServicesMenuOpen}
                        onClick={handleServicesMenuOpen}
                        sx={{
                          mx: 1,
                          color: isPathActive(page.path) ? 'primary.main' : 'text.primary',
                          fontWeight: isPathActive(page.path) ? 600 : 400,
                          '&:hover': {
                            bgcolor: 'rgba(26, 35, 126, 0.04)',
                            color: 'primary.main'
                          }
                        }}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {page.title}
                      </Button>
      <Menu
                        anchorEl={servicesMenuAnchor}
                        open={Boolean(servicesMenuAnchor)}
                        onClose={handleServicesMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleServicesMenuClose
                        }}
                        PaperProps={{
                          elevation: 2,
                          sx: {
                            mt: 1.5,
            background: '#ffffff',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(26, 35, 126, 0.1)',
                            borderRadius: 2,
                            minWidth: 220
                          }
                        }}
                        TransitionComponent={Fade}
                      >
                        {page.subItems.map((subItem) => (
                          <MenuItem
                            key={subItem.path}
                            component={Link}
                            to={subItem.path}
                            onClick={handleServicesMenuClose}
                            sx={{
                              color: isPathActive(subItem.path) ? 'primary.main' : 'text.primary',
                              fontWeight: isPathActive(subItem.path) ? 600 : 400,
                              py: 1.5,
                              '&:hover': {
                                bgcolor: 'rgba(26, 35, 126, 0.04)',
                                color: 'primary.main'
                              }
                            }}
                          >
                            {subItem.title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      to={page.path}
                      sx={{
                        mx: 1,
                        color: isPathActive(page.path) ? 'primary.main' : 'text.primary',
                        fontWeight: isPathActive(page.path) ? 600 : 400,
                        '&:hover': {
                          bgcolor: 'rgba(26, 35, 126, 0.04)',
                          color: 'primary.main'
                        }
                      }}
                    >
                      {page.title}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </Box>

            {/* Desktop CTA Button */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  px: 3,
                  py: 1,
                  background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                  boxShadow: '0 4px 12px rgba(26, 35, 126, 0.2)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #3949ab 0%, #1a237e 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(26, 35, 126, 0.3)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better mobile performance
        }}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 320 },
            border: 'none',
            background: '#ffffff'
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacing */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
};

export default Navbar;
