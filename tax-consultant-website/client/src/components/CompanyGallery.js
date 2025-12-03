import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const serviceImages = [
  {
    img: '/images/services/ca-logo.jpg',
    title: 'Chartered Accountancy Services',
    cols: 1,
    featured: true,
    description: 'Professional accounting and financial advisory services'
  },
  {
    img: '/images/services/litigation.jpg',
    title: 'Litigation Support',
    cols: 1,
    description: 'Expert legal and litigation assistance'
  },
  {
    img: '/images/services/tax-advisory.jpg',
    title: 'Tax Advisory',
    cols: 1,
    description: 'Comprehensive tax planning and compliance'
  },
  {
    img: '/images/services/corporate-services.jpg',
    title: 'Corporate Services',
    cols: 1,
    description: 'End-to-end corporate solutions'
  },
  {
    img: '/images/services/audit.jpg',
    title: 'Audit & Assurance',
    cols: 1,
    description: 'Thorough auditing and assurance services'
  },
  {
    img: '/images/services/business-consulting.jpg',
    title: 'Business Consulting',
    cols: 1,
    description: 'Strategic business advisory services'
  }
];

const CompanyGallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + serviceImages.length) % serviceImages.length;
    setSelectedImage(serviceImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % serviceImages.length;
    setSelectedImage(serviceImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 700,
              color: 'primary.main',
              position: 'relative',
            }}
          >
            Our Expertise
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Comprehensive professional services tailored to your needs
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 4,
              px: 2
            }}
          >
            {serviceImages.map((item, index) => (
              <Paper
                key={item.img}
                elevation={3}
                sx={{
                  width: { xs: '100%', sm: '45%', md: '30%' },
                  maxWidth: '350px',
                  borderRadius: 4,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[10],
                    '& .image-overlay': {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => handleImageClick(item, index)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 250,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                    bgcolor: 'background.paper',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                  <Box
                    className="image-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(26, 35, 126, 0.9)',
                      color: 'white',
                      p: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </motion.div>

        <Modal
          open={Boolean(selectedImage)}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: 4,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'text.primary',
              }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'text.primary',
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'text.primary',
              }}
            >
              <NavigateNextIcon />
            </IconButton>
            {selectedImage && (
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, color: 'text.primary' }}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
                  {selectedImage.description}
                </Typography>
              </Box>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default CompanyGallery; 