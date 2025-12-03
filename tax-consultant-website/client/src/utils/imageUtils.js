// Image categories mapped to Unsplash collections
const imageCategories = {
  'gst-updates': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c', // Business/Finance
  'tax-planning': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07', // Calculator/Planning
  'business-advisory': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf', // Business Meeting
  'legal-insights': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f', // Legal/Law
  'industry-news': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', // Industry/Corporate
  'corporate-compliance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85', // Corporate Office
  'international-business': 'https://images.unsplash.com/photo-1529369623266-f5264b696110', // Global Business
};

const fallbackImages = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', // Business general
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a', // Finance
  'https://images.unsplash.com/photo-1554224154-22dec7ec8818', // Tax/Finance
];

export const getCategoryImage = (categoryId) => {
  return imageCategories[categoryId] || fallbackImages[0];
};

// Get a random fallback image if category image fails
export const getFallbackImage = () => {
  return fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
};

// Generate a unique image for each topic within a category
export const getTopicImage = (categoryId, topic) => {
  // First try category-specific image
  const baseImage = imageCategories[categoryId];
  
  // If no category image, use a fallback
  if (!baseImage) {
    return getFallbackImage();
  }
  
  // Add topic as a query parameter to make the image unique but related
  return `${baseImage}?topic=${encodeURIComponent(topic)}`;
}; 