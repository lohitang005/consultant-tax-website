import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CompanyGallery from '../components/CompanyGallery';
import SEO from '../components/SEO';

const milestones = [
  {
    year: '2021',
    title: 'Firm Establishment',
    description: 'Founded in Delhi by Parth Rastogi with a vision to provide excellent financial services and a professional team for the clients.'
  },
  {
    year: '2022',
    title: 'Expansion to Delhi and NCR',
    description: 'Opened Official Website in Delhi and NCR to servethe growing clients and Companies.'
  },
  {
    year: '2023',
    title: 'Gurgaon and Noida Operations',
    description: 'Established presence in Gurgaon and Noida to cater to multinational corporations and startups.'
  },
  {
    year: '2024',
    title: 'Digital Transformation',
    description: 'Implemented advanced technology solutions for enhanced service delivery.'
  },
  {
    year: '2025',
    title: 'Pan India Network',
    description: 'Expanded operations across major cities in India through strategic partnerships.'
  },
  {
    year: '2025',
    title: 'AI Integration',
    description: 'Adopted AI for modern financial solutions and to make it more secure and faster.'
  }
];

const expertise = [
  {
    title: 'Chartered Accountancy',
    items: [
      'Statutory & Internal Audits',
      'Financial Statement Analysis',
      'Corporate Finance Advisory',
      'Mergers & Acquisitions',
      'Risk Assessment & Management',
      'Business Valuations'
    ]
  },
  {
    title: 'Taxation',
    items: [
      'Direct Tax Planning & Compliance',
      'GST Registration & Returns',
      'International Tax Advisory',
      'Transfer Pricing',
      'Tax Audit & Assessment',
      'Corporate Tax Planning'
    ]
  },
  {
    title: 'Legal Services',
    items: [
      'Company Incorporation',
      'FEMA Compliance',
      'Corporate Law Advisory',
      'Legal Due Diligence',
      'Regulatory Compliance',
      'Contract Review & Management'
    ]
  }
];

const team = [
  {
    name: 'Parth Rastogi',
    position: 'Proprietor and Founder',
    image: '/images/team/parth-rastogi.jpg',
    location: 'Delhi NCR',
    education: 'Tax Litigator',
    description: 'Leading expert in taxation and business compliance with extensive experience in handling complex financial matters for diverse clients across Delhi NCR.',
    specializations: [
      'Direct & Indirect Taxation',
      'Corporate Law Advisory',
      'Tax Litigation expert',
    ],
    experience: '5+ years',
    email: 'parthrastogi27112003@gmail.com',
    linkedin: 'https://www.linkedin.com/in/parthrastogicaadv/'
  },
  {
    name: 'Vasu Rastogi',
    position: 'Full Stack Developer',
    image: '/images/team/vasu-rastogi.jpg',
    location: 'Delhi NCR',
    education: 'Computer Science Engineer',
    description: 'Innovative developer specializing in modern web solutions and AI integration for enhanced business processes and digital transformation.',
    specializations: [
      'Custom Software Developement',
      'AI/ML Integration',
      'UI/UX Designer',
      'Automation Expert',
    ],
    experience: '2+ years',
    email: 'vasurastogi213@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vasurastogi/'
  }
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <SEO 
        title="About Us | Rastogi & Associates - Chartered Accountants in Delhi NCR"
        description="Learn about Rastogi & Associates: our legacy, expertise in tax, audit, corporate finance, and litigation across Delhi NCR, Noida, and Gurgaon."
        url="https://www.rastogiassociates.in/about"
        keywords={["chartered accountant Delhi NCR","about Rastogi & Associates","CA firm Delhi","tax litigation Delhi","audit and assurance"]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Rastogi & Associates',
          url: 'https://www.rastogiassociates.in/about',
          logo: 'https://www.rastogiassociates.in/images/logo.png',
          sameAs: [
            'https://www.linkedin.com/company/rkbconsultants/posts/?feedView=all'
          ]
        }}
      />
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'primary.main'
            }}
          >
            About Rastogi & Associates
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 8, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            A leading consultancy firm in Delhi NCR with over 5 years of excellence in financial consulting and compliance services
          </Typography>
        </motion.div>

        {/* Overview Section */}
        <Box sx={{ mb: 12 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography 
                  variant="h3" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: '60px',
                      height: '4px',
                      backgroundColor: 'primary.main',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Our Legacy in Delhi
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Typography 
                      paragraph 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        mb: 3
                      }}
                    >
                  Established in 2021, Rastogi & Associates has grown to become one of the most trusted names in financial consulting across Delhi, Noida, and Gurgaon. Our journey began in Delhi with a commitment to excellence and has expanded to serve clients throughout India.
                </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Typography 
                      paragraph 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        mb: 4
                      }}
                    >
                  With our head office in Delhi and strategic presence in Noida and Gurgaon, we provide comprehensive financial and litigation services to businesses ranging from startups to established corporations. Our experienced professionals brings expertise in taxation, audit, corporate finance, and legal compliance.
                </Typography>
                  </motion.div>
                  <Grid container spacing={3}>
                    {[
                      { text: "5+ Years of Excellence in Financial Services", icon: <StarIcon /> },
                      { text: "500+ Satisfied Clients Across India", icon: <GroupIcon /> },
                      { text: "Comprehensive Services in Delhi NCR", icon: <BusinessIcon /> }
                    ].map((item, index) => (
                      <Grid item xs={12} key={index}>
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              bgcolor: 'background.default',
                              border: '1px solid',
                              borderColor: 'divider',
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(8px)',
                                borderColor: 'primary.main',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                '& .icon': {
                                  color: 'primary.main',
                                  transform: 'scale(1.2)',
                                }
                              }
                            }}
                          >
                            <Box 
                              className="icon"
                              sx={{ 
                                color: 'text.secondary',
                                transition: 'all 0.3s ease',
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Typography 
                              sx={{ 
                                fontWeight: 500,
                                color: 'text.primary'
                              }}
                            >
                              {item.text}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: '100%',
                      height: '100%',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      borderRadius: 4,
                      zIndex: 0
                    }
                  }}
              >
                <Box
                  component="img"
                  src="/images/company/rastogi-office.png"
                  alt="Rastogi & Associates Office in Delhi"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      position: 'relative',
                      zIndex: 1
                  }}
                />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Company Gallery Section */}
        <CompanyGallery />

        {/* Milestones Section */}
        <Box sx={{ mb: 12, overflow: 'hidden' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" align="center" sx={{ 
              mb: 6, 
              fontWeight: 600,
              color: 'primary.main'
            }}>
            Our Journey
          </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {milestones.map((milestone, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ 
                    x: index % 2 === 0 ? -1000 : 1000,
                    opacity: 0
                  }}
                  animate={{ 
                    x: 0,
                    opacity: 1
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 70,
                    damping: 20,
                    delay: index * 0.3,
                    duration: 1
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: theme.palette.background.paper,
                      borderRadius: 2,
                      boxShadow: theme.shadows[2],
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.02)',
                        boxShadow: theme.shadows[8],
                      },
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          bgcolor: 'primary.main',
                        }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.3 + 0.5
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'primary.main',
                          fontWeight: 700,
                            mb: 1
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.3 + 0.6
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: 'text.primary'
                          }}
                        >
                        {milestone.title}
                      </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.3 + 0.7
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6
                          }}
                        >
                        {milestone.description}
                      </Typography>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

         {/* SEO Content Section */}
         <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Our Mission and Approach
          </Typography>
          <Typography paragraph>
          At Rastogi and Associates, our mission is to empower individuals, startups, and businesses across Delhi NCR and beyond by delivering reliable, innovative, and cost-effective legal, financial, and business consultancy solutions. We aim to build lasting partnerships through trust, transparency, and results-driven strategies that help our clients achieve sustainable growth and compliance with ease.
          </Typography>
          <Typography paragraph>
          We believe in a client-first philosophy and tailor our services to meet the unique needs of every individual and organization we work with. Our approach includes.
          </Typography>
          <Typography paragraph>
          🔹 Consultative Strategy: We begin by understanding the core objectives and challenges of our clients to provide customized and practical solutions.
          </Typography>
          <Typography paragraph>
          🔹 Transparency: We maintain open communication and provide clear, honest feedback to help our clients make informed decisions.
          </Typography>
          <Typography paragraph>
          🔹 Results-Driven: We focus on delivering measurable outcomes and strive to exceed expectations through our commitment to excellence.
          </Typography>
          <Typography paragraph>
          🔹 Cost-Effective Solutions: We offer affordable rates without compromising on quality, ensuring value for money for our clients.
          </Typography>
          <Typography paragraph>
          By combining these principles with a deep understanding of the legal, financial, and business landscape in Delhi NCR, we strive to be the go-to choice for individuals and businesses seeking professional, reliable, and forward-thinking support.
          </Typography>
        </Box>
      

        {/* Expertise Section */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 600 }}>
            Our Expertise
          </Typography>
          <Grid container spacing={4}>
            {expertise.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'background.paper',
                      boxShadow: theme.shadows[2],
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[4],
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {category.title}
                      </Typography>
                      <List>
                        {category.items.map((item, itemIndex) => (
                          <ListItem key={itemIndex}>
                            <ListItemIcon>
                              <StarIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3" 
            align="center"
            sx={{
              mb: 6, 
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: theme.palette.background.paper,
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <Box 
                        sx={{ 
                          height: 400,
                          bgcolor: theme.palette.primary.main,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {member.image ? (
                          <Box
                            component="img"
                            src={member.image}
                            alt={member.name}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              opacity: 1,
                              transition: 'transform 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.05)'
                              }
                            }}
                          />
                        ) : (
                          <Avatar
                            sx={{
                              width: 120,
                              height: 120,
                              bgcolor: theme.palette.primary.light,
                              fontSize: '3rem'
                            }}
                          >
                            {member.name.charAt(0)}
                          </Avatar>
                        )}
                      </Box>
                    </Box>
                    <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                        gutterBottom
                      sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          textAlign: 'center',
                          mb: 1
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                      sx={{
                          color: theme.palette.text.secondary,
                          textAlign: 'center',
                        mb: 3,
                        fontWeight: 500
                      }}
                    >
                      {member.position}
                    </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center' }}>
                        <LocationOnIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                        <Typography>{member.location}</Typography>
                        <Box component="span" sx={{ mx: 1, color: theme.palette.text.secondary }}>•</Box>
                        <SchoolIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                        <Typography>{member.education}</Typography>
                      </Box>
                      <Typography 
                        sx={{ 
                          mb: 3,
                          color: theme.palette.text.secondary,
                          textAlign: 'center',
                          lineHeight: 1.6
                        }}
                      >
                        {member.description}
                      </Typography>
                      <Divider sx={{ my: 3 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          textAlign: 'center'
                      }}
                    >
                      Specializations
                    </Typography>
                      <Grid container spacing={1} justifyContent="center">
                      {member.specializations.map((spec, idx) => (
                          <Grid item key={idx}>
                            <Paper
                            sx={{
                                px: 2,
                                py: 1,
                                bgcolor: theme.palette.primary.main,
                                color: 'white',
                              borderRadius: 2,
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}
                          >
                            {spec}
                            </Paper>
                        </Grid>
                      ))}
                    </Grid>
                    <Box 
                      sx={{ 
                          mt: 3,
                        display: 'flex', 
                          justifyContent: 'center',
                          gap: 2
                      }}
                    >
                        <IconButton
                          href={`mailto:${member.email}`}
                          sx={{ 
                            color: theme.palette.primary.main,
                            '&:hover': {
                              bgcolor: `${theme.palette.primary.main}10`
                            }
                          }} 
                        >
                          <EmailIcon />
                        </IconButton>
                        <IconButton
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            color: theme.palette.primary.main,
                            '&:hover': {
                              bgcolor: `${theme.palette.primary.main}10`
                            }
                          }} 
                        >
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* SEO Content Section */}
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Leading Firm in Delhi NCR Region
          </Typography>
          <Typography paragraph>
            Rastogi & Associates is one of the most respected firm in Delhi NCR, providing comprehensive financial and legal services to businesses and individuals. With our strategic presence in key business districts of Delhi, Noida, and Gurgaon, we serve clients across various industries with professional excellence.
          </Typography>
          <Typography paragraph>
            Our team of experienced chartered accountants, tax consultants, and legal experts brings extensive knowledge in taxation, audit, corporate finance, and regulatory compliance. We specialize in serving clients across Delhi NCR's major business hubs including Nehru Place, Connaught Place, Noida Sector 62, and Gurgaon Cyber City.
          </Typography>
          <Typography paragraph>
            As a leading CA firm in Delhi NCR, we offer specialized services including GST registration, income tax filing, company incorporation, and international taxation. Our expertise extends to various sectors including real estate, IT, manufacturing, and e-commerce, making us a preferred choice for businesses across North India.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
