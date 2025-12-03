import { generateBlogPosts } from '../data/blogData';

export const testBlogUniqueness = () => {
  const posts = generateBlogPosts();
  
  // Test for title uniqueness
  const titles = new Set();
  const duplicateTitles = [];
  
  posts.forEach(post => {
    if (titles.has(post.title)) {
      duplicateTitles.push(post.title);
    }
    titles.add(post.title);
  });

  // Test for content uniqueness
  const excerpts = new Set();
  const duplicateExcerpts = [];

  posts.forEach(post => {
    if (excerpts.has(post.excerpt)) {
      duplicateExcerpts.push(post.excerpt);
    }
    excerpts.add(post.excerpt);
  });

  // Get sample posts from each category
  const categorySamples = {};
  posts.forEach(post => {
    if (!categorySamples[post.category]) {
      categorySamples[post.category] = post;
    }
  });

  return {
    totalPosts: posts.length,
    uniqueTitles: titles.size,
    uniqueExcerpts: excerpts.size,
    duplicateTitles,
    duplicateExcerpts,
    categorySamples,
    // Get first 10 posts for review
    samplePosts: posts.slice(0, 10)
  };
};

// Function to analyze content diversity
export const analyzeBlogDiversity = () => {
  const posts = generateBlogPosts();
  
  // Analyze category distribution
  const categoryCount = {};
  posts.forEach(post => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });

  // Analyze topic distribution
  const topicCount = {};
  posts.forEach(post => {
    post.tags.forEach(tag => {
      topicCount[tag] = (topicCount[tag] || 0) + 1;
    });
  });

  // Analyze date distribution
  const dateCount = {};
  posts.forEach(post => {
    const month = post.date.substring(0, 7); // YYYY-MM
    dateCount[month] = (dateCount[month] || 0) + 1;
  });

  return {
    categoryDistribution: categoryCount,
    topicDistribution: topicCount,
    dateDistribution: dateCount
  };
}; 