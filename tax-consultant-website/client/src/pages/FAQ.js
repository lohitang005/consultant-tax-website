import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Chip,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import SEO from '../components/SEO';

const faqCategories = [
  {
    category: "GST Services",
    questions: [
      {
        question: "What are the GST registration requirements in Delhi NCR?",
        answer: "In Delhi NCR, businesses with an annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states) must register for GST. Our team assists with the entire registration process, including documentation and filing across Delhi, Noida, and Gurgaon."
      },
      {
        question: "How long does GST registration take in Delhi?",
        answer: "GST registration in Delhi typically takes 3-5 working days. At Rastogi & Associates, we handle the entire process efficiently, ensuring all documentation is complete and accurate for quick approval."
      },
      {
        question: "What are the GST filing deadlines for businesses in Delhi NCR?",
        answer: "GSTR-1 must be filed by the 11th of the following month, and GSTR-3B by the 20th. Our team provides timely reminders and assistance to ensure compliance for businesses across Delhi, Noida, and Gurgaon."
      }
    ]
  },
  {
    category: "Income Tax Services",
    questions: [
      {
        question: "What are the income tax filing requirements for businesses in Delhi NCR?",
        answer: "Businesses in Delhi NCR must file their income tax returns based on their business structure. Companies must file by October 31st, while individuals and firms by July 31st. We provide comprehensive tax filing services across all locations in Delhi NCR."
      },
      {
        question: "Do you provide tax planning services for startups in Noida?",
        answer: "Yes, we offer specialized tax planning services for startups in Noida, particularly in Sector 62's tech hub. Our services include tax structure optimization, compliance management, and investment planning."
      },
      {
        question: "What tax benefits are available for manufacturing units in Delhi NCR?",
        answer: "Manufacturing units in Delhi NCR can avail various tax benefits including investment allowance, export incentives, and industrial area-specific benefits. Our experts can help you maximize these benefits based on your location and industry."
      }
    ]
  },
  {
    category: "Corporate Services",
    questions: [
      {
        question: "What is the process for company registration in Delhi NCR?",
        answer: "Company registration in Delhi NCR involves name approval, DSC acquisition, filing of documents with ROC, and obtaining necessary registrations. Our team handles the entire process, with offices in Delhi, Noida, and Gurgaon for convenient access."
      },
      {
        question: "What compliance requirements exist for companies in Gurgaon?",
        answer: "Companies in Gurgaon must comply with various regulations including annual filings, board meetings, GST returns, and local business licenses. We provide complete compliance management services from our Gurgaon office."
      },
      {
        question: "How can I set up a subsidiary in Noida?",
        answer: "Setting up a subsidiary in Noida involves company incorporation, obtaining necessary permits, and ensuring compliance with local regulations. Our Noida office specializes in helping international companies establish their presence."
      }
    ]
  },
  {
    category: "Audit & Assurance",
    questions: [
      {
        question: "What types of audit services do you provide in Delhi NCR?",
        answer: "We offer comprehensive audit services including statutory audit, internal audit, tax audit, and special purpose audits across Delhi NCR. Our experienced team serves clients from various sectors including IT, real estate, and manufacturing."
      },
      {
        question: "How often should businesses in Delhi NCR conduct internal audits?",
        answer: "We recommend quarterly internal audits for businesses in Delhi NCR to ensure compliance and identify potential issues early. Our team can design a custom audit schedule based on your business needs."
      },
      {
        question: "Do you provide industry-specific audit services in Gurgaon?",
        answer: "Yes, we offer specialized audit services for IT companies, manufacturing units, and service sector businesses in Gurgaon. Our team is familiar with industry-specific requirements and compliance needs."
      }
    ]
  },
  {
    category: "International Business",
    questions: [
      {
        question: "How can foreign companies establish presence in Delhi NCR?",
        answer: "Foreign companies can establish presence through subsidiary, branch office, or liaison office. Our team assists with location selection, registration, compliance, and ongoing support across Delhi NCR."
      },
      {
        question: "What are the FEMA compliance requirements for businesses in Delhi NCR?",
        answer: "FEMA compliance includes reporting of foreign investments, ECB regulations, and overseas transactions. Our experts in Delhi NCR provide comprehensive FEMA compliance services."
      },
      {
        question: "Do you assist with transfer pricing documentation in Noida?",
        answer: "Yes, we provide complete transfer pricing services including documentation, compliance, and advisory for multinational companies operating in Noida and other parts of Delhi NCR."
      }
    ]
  },
  {
    category: "Legal Services",
    questions: [
      {
        question: "What legal services do you offer in Delhi NCR?",
        answer: "We provide comprehensive legal services including contract review, corporate restructuring, dispute resolution, and regulatory compliance across Delhi, Noida, and Gurgaon."
      },
      {
        question: "How can you help with business licenses in Delhi?",
        answer: "We assist in obtaining various business licenses including trade license, FSSAI, pollution control, and industry-specific permits in Delhi. Our team handles the entire application and compliance process."
      },
      {
        question: "Do you provide legal advisory for real estate projects in Gurgaon?",
        answer: "Yes, we offer specialized legal advisory services for real estate projects in Gurgaon, including RERA compliance, land acquisition, and project documentation."
      }
    ]
  },
  {
    category: "Litigation Services",
    questions: [
      {
        question: "What is tax litigation and when is it required?",
        answer: "Tax litigation refers to the legal process of resolving disputes between taxpayers and tax authorities. It is required when there is a disagreement regarding tax assessments, penalties, or interpretations of tax laws that cannot be resolved through regular communication or administrative remedies."
      },
      {
        question: "How can you help with tax dispute resolution in India?",
        answer: "Our team assists clients at every stage of tax dispute resolution, including drafting responses to notices, representing clients before tax authorities, preparing appeals, and providing strategic advice to achieve favorable outcomes."
      },
      {
        question: "What is the process for appealing a tax assessment order?",
        answer: "To appeal a tax assessment order, a taxpayer must file an appeal with the appropriate appellate authority within the prescribed time limit, usually 30 days from the date of the order. We help prepare the appeal, compile supporting documents, and represent clients during hearings."
      },
      {
        question: "Do you represent clients before tax authorities and tribunals?",
        answer: "Yes, we represent clients before various tax authorities, appellate tribunals, and courts, including the Income Tax Appellate Tribunal (ITAT), GST Appellate Authority, and High Courts, ensuring expert advocacy and compliance."
      },
      {
        question: "What documents are needed for tax litigation support?",
        answer: "Key documents include assessment orders, notices received, tax returns, financial statements, correspondence with tax authorities, and any supporting evidence relevant to the dispute. We guide clients in gathering and organizing all necessary documentation."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredFAQs = faqCategories.flatMap(category => 
    category.questions.map(q => ({...q, category: category.category}))
  ).filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <SEO
        title="FAQs | Rastogi & Associates - Services in Delhi NCR"
        description="Answers to common questions about GST, income tax, corporate compliance, audits, and international business across Delhi, Noida, and Gurgaon."
        url="https://www.rastogiassociates.in/faq"
        keywords={["GST FAQs Delhi","income tax FAQs","company registration Delhi NCR","audit FAQs","international business Delhi"]}
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
              background: 'linear-gradient(45deg, #4169E1, #800080)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 8, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            Find answers to common questions about our services in Delhi NCR region
          </Typography>
        </motion.div>

        {/* Search and Filter Section */}
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip
              label="All"
              onClick={() => setSelectedCategory('all')}
              color={selectedCategory === 'all' ? 'primary' : 'default'}
              sx={{ m: 0.5 }}
            />
            {faqCategories.map((category) => (
              <Chip
                key={category.category}
                label={category.category}
                onClick={() => setSelectedCategory(category.category)}
                color={selectedCategory === category.category ? 'primary' : 'default'}
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>
        </Box>

        {/* FAQ Accordions */}
        <Box>
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                sx={{
                  mb: 2,
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      {faq.category}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>

        {/* SEO Content Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Expert CA Services in Delhi NCR
          </Typography>
          <Typography paragraph>
            Rastogi & Associates provides comprehensive chartered accountancy, tax, and legal services across Delhi NCR. With offices in key locations including Delhi, Noida, and Gurgaon, we serve businesses of all sizes with professional excellence.
          </Typography>
          <Typography paragraph>
            Our expertise covers GST registration, income tax filing, company incorporation, and international taxation. We specialize in serving clients across various sectors including IT, manufacturing, real estate, and e-commerce in Delhi NCR's major business hubs.
          </Typography>
          <Typography paragraph>
            Whether you need assistance with tax planning in Noida's tech corridor, GST compliance in Delhi's business districts, or corporate advisory in Gurgaon's cyber city, our team of experienced professionals is here to help.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ; 