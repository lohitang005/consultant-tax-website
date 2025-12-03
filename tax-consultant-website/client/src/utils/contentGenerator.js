import { v4 as uuidv4 } from 'uuid';

// Export the templates so they can be used elsewhere if needed
export const introTemplates = {
  'gst-updates': [
    "In recent developments regarding {topic} under the GST framework, significant changes have been implemented that affect businesses across sectors. This comprehensive guide explores the latest updates, compliance requirements, and practical implications for businesses.",
    "The GST Council has introduced new guidelines for {topic}, bringing important changes to how businesses handle their GST compliance. This detailed analysis covers everything you need to know about the latest developments."
  ],
  'tax-planning': [
    "Strategic tax planning for {topic} requires a thorough understanding of the latest regulations and available opportunities. This comprehensive guide explores various aspects of tax optimization while ensuring full compliance.",
    "When it comes to {topic}, effective tax planning can lead to significant savings and better financial management. This detailed analysis provides insights into the best practices and strategies."
  ],
  'business-advisory': [
    "In today's dynamic business environment, {topic} plays a crucial role in organizational success. Our comprehensive analysis provides insights into effective strategies and implementation approaches.",
    "Understanding and implementing {topic} effectively can significantly impact business performance. This detailed guide explores key considerations and best practices for organizations."
  ],
  'legal-insights': [
    "Recent legal developments in {topic} have introduced important changes that businesses need to understand and adapt to. This comprehensive analysis covers key aspects and compliance requirements.",
    "The legal framework surrounding {topic} continues to evolve, bringing new challenges and opportunities. This detailed guide helps organizations navigate these changes effectively."
  ],
  'industry-news': [
    "The {topic} sector is experiencing significant transformations that impact business operations and strategies. This analysis explores current trends and future outlook.",
    "Recent developments in {topic} are reshaping industry dynamics. This comprehensive report examines key changes and their implications for businesses."
  ],
  'corporate-compliance': [
    "Maintaining compliance in {topic} requires a thorough understanding of regulatory requirements and best practices. This guide provides detailed insights into effective compliance management.",
    "Recent updates in {topic} compliance frameworks necessitate careful attention from organizations. This comprehensive analysis helps businesses ensure adherence to current regulations."
  ],
  'international-business': [
    "Global perspectives on {topic} continue to evolve, bringing new opportunities and challenges for businesses. This detailed analysis provides insights into international best practices.",
    "Understanding {topic} in an international context is crucial for global business success. This comprehensive guide explores key considerations and strategies."
  ]
};

export const sectionTemplates = {
  'overview': [
    "Understanding the Basics of {topic}",
    "Key Components of {topic}",
    "Recent Developments in {topic}",
    "Impact Analysis of {topic}"
  ],
  'requirements': [
    "Compliance Requirements",
    "Documentation Needed",
    "Filing Procedures",
    "Deadlines and Timelines"
  ],
  'implications': [
    "Business Implications",
    "Financial Impact",
    "Operational Changes",
    "Risk Assessment"
  ],
  'strategies': [
    "Best Practices",
    "Implementation Strategies",
    "Optimization Techniques",
    "Future Planning"
  ],
  'case_studies': [
    "Real-world Examples",
    "Success Stories",
    "Learning from Challenges",
    "Industry Benchmarks"
  ]
};

export const paragraphTemplates = {
  'overview': [
    "{topic} has become increasingly important in today's business environment. With recent changes in regulations and market dynamics, understanding its implications is crucial for business success. This section provides a detailed overview of the key aspects and their significance in the current context.",
    "The fundamental principles of {topic} form the backbone of effective business operations. As markets evolve and regulations change, staying updated with these principles becomes crucial for maintaining compliance and achieving operational excellence."
  ],
  'requirements': [
    "Compliance with {topic} regulations requires careful attention to detail and thorough documentation. Organizations must maintain proper records, submit timely reports, and ensure all procedures align with the latest guidelines.",
    "The regulatory framework for {topic} includes specific requirements that businesses must fulfill. This includes regular filings, maintaining proper documentation, and implementing appropriate internal controls."
  ],
  'implications': [
    "The implementation of {topic} has far-reaching implications for businesses across sectors. From operational procedures to financial reporting, organizations need to adapt their processes to ensure compliance while maintaining efficiency.",
    "Understanding the business implications of {topic} is crucial for strategic planning and risk management. Companies must evaluate both short-term and long-term impacts on their operations and financial performance."
  ],
  'strategies': [
    "Developing effective strategies for {topic} requires a balanced approach that considers both compliance requirements and business objectives. Organizations should focus on creating sustainable processes that can adapt to changing regulations.",
    "Successful implementation of {topic} strategies depends on careful planning and execution. This includes training staff, updating systems, and establishing clear procedures for ongoing compliance."
  ],
  'case_studies': [
    "Real-world examples demonstrate how organizations have successfully implemented {topic} in their operations. These cases provide valuable insights into best practices and potential challenges.",
    "Learning from industry experiences helps organizations avoid common pitfalls and adopt proven strategies for {topic}. These examples illustrate both successful approaches and lessons learned from challenges."
  ]
};

// Content generation utilities

// Industry-specific insights for each category
const industryInsights = {
  'gst-updates': {
    trends: [
      'Digital compliance automation',
      'Real-time invoice reporting',
      'Integrated tax platforms',
      'AI-powered reconciliation',
      'Mobile GST compliance'
    ],
    challenges: [
      'Complex rate structures',
      'System integration issues',
      'Compliance deadlines',
      'Documentation requirements',
      'Input credit matching'
    ],
    solutions: [
      'Automated compliance tools',
      'Expert consultation services',
      'Staff training programs',
      'Process optimization',
      'Technology integration'
    ]
  },
  'tax-planning': {
    trends: [
      'Sustainable tax strategies',
      'Digital asset taxation',
      'International tax planning',
      'ESG tax benefits',
      'Wealth preservation'
    ],
    challenges: [
      'Regulatory changes',
      'Cross-border compliance',
      'Investment risks',
      'Documentation needs',
      'Deadline management'
    ],
    solutions: [
      'Strategic tax planning',
      'Risk assessment tools',
      'Investment diversification',
      'Regular compliance reviews',
      'Expert consultation'
    ]
  },
  'business-advisory': {
    trends: [
      'Digital transformation',
      'Remote workforce management',
      'Sustainable practices',
      'Market expansion',
      'Innovation strategies'
    ],
    challenges: [
      'Market volatility',
      'Resource allocation',
      'Technology adoption',
      'Talent management',
      'Risk mitigation'
    ],
    solutions: [
      'Strategic planning',
      'Process optimization',
      'Technology integration',
      'Team development',
      'Risk management'
    ]
  },
  'legal-insights': {
    trends: [
      'Digital compliance',
      'Data protection',
      'Remote contracts',
      'AI regulations',
      'Green legislation'
    ],
    challenges: [
      'Regulatory complexity',
      'Compliance costs',
      'Documentation needs',
      'Implementation time',
      'Staff training'
    ],
    solutions: [
      'Legal tech adoption',
      'Compliance automation',
      'Staff training',
      'Expert consultation',
      'Process standardization'
    ]
  }
};

// Case study templates for each category
const caseStudyTemplates = {
  'gst-updates': [
    {
      title: "E-commerce GST Compliance",
      challenge: "A large e-commerce platform struggled with managing GST compliance across multiple states.",
      solution: "Implemented automated GST compliance system with real-time tracking.",
      outcome: "Achieved 100% compliance rate and reduced processing time by 60%."
    },
    {
      title: "Manufacturing Sector GST",
      challenge: "Manufacturing company faced issues with input tax credit reconciliation.",
      solution: "Deployed AI-powered reconciliation system with automated matching.",
      outcome: "Recovered 25% more input tax credit and reduced errors by 90%."
    }
  ],
  'tax-planning': [
    {
      title: "High Net Worth Tax Strategy",
      challenge: "HNI client needed comprehensive tax planning for diverse investment portfolio.",
      solution: "Developed customized tax optimization strategy across multiple asset classes.",
      outcome: "Achieved 30% tax efficiency improvement while maintaining compliance."
    },
    {
      title: "Business Expansion Tax Planning",
      challenge: "Growing business needed tax-efficient expansion strategy.",
      solution: "Created structured tax planning approach with future growth considerations.",
      outcome: "Saved 40% in potential tax liability during expansion phase."
    }
  ],
  'business-advisory': [
    {
      title: "Digital Transformation Success",
      challenge: "Traditional business struggling with digital adoption.",
      solution: "Implemented phased digital transformation strategy.",
      outcome: "Increased operational efficiency by 50% and reduced costs by 30%."
    },
    {
      title: "Market Entry Strategy",
      challenge: "Company faced challenges entering new market segment.",
      solution: "Developed comprehensive market entry strategy with risk assessment.",
      outcome: "Successful market entry with 25% market share in first year."
    }
  ],
  'legal-insights': [
    {
      title: "Compliance Automation",
      challenge: "Company struggling with manual compliance processes.",
      solution: "Implemented automated compliance monitoring system.",
      outcome: "Reduced compliance processing time by 70% and eliminated errors."
    },
    {
      title: "Contract Management",
      challenge: "Organization faced issues with contract lifecycle management.",
      solution: "Deployed digital contract management system with automated workflows.",
      outcome: "Reduced contract processing time by 60% and improved accuracy by 90%."
    }
  ]
};

// Expert tips for each category
const expertTipsTemplates = {
  'gst-updates': [
    "Maintain real-time compliance tracking systems",
    "Implement automated reconciliation processes",
    "Regular staff training on GST updates",
    "Maintain detailed documentation trail",
    "Use technology for deadline management"
  ],
  'tax-planning': [
    "Regular review of tax planning strategies",
    "Document all investment decisions",
    "Monitor regulatory changes",
    "Maintain clear audit trail",
    "Consider long-term implications"
  ],
  'business-advisory': [
    "Focus on data-driven decision making",
    "Regular market analysis",
    "Invest in team development",
    "Monitor industry trends",
    "Maintain risk management protocols"
  ],
  'legal-insights': [
    "Regular compliance audits",
    "Document all legal processes",
    "Stay updated with regulations",
    "Maintain clear communication channels",
    "Regular staff training"
  ]
};

// Industry-specific content templates
const industryTemplates = {
  'manufacturing': {
    intro: [
      "The manufacturing sector faces unique tax challenges in today's dynamic business environment. From production incentives to export benefits, understanding the tax implications is crucial for operational efficiency.",
      "As manufacturing technologies evolve, tax considerations become increasingly complex. This guide explores critical aspects of manufacturing taxation, from input credits to capital asset benefits.",
      "Manufacturing businesses navigate a complex web of tax regulations and incentives. This comprehensive analysis covers key areas impacting manufacturing operations and compliance requirements."
    ],
    aspects: {
      'production': [
        "Production-linked incentives and their tax implications",
        "Raw material input credit optimization",
        "Manufacturing process efficiency and tax benefits",
        "Quality control investments and tax deductions"
      ],
      'technology': [
        "Industry 4.0 implementation tax benefits",
        "Automation and depreciation advantages",
        "R&D tax incentives for manufacturing",
        "Digital transformation tax considerations"
      ],
      'compliance': [
        "Manufacturing-specific compliance requirements",
        "Environmental regulation tax implications",
        "Labor law compliance and tax benefits",
        "Safety standard implementation deductions"
      ],
      'export': [
        "Export incentives for manufacturers",
        "International trade tax benefits",
        "Duty drawback schemes",
        "Foreign market expansion tax planning"
      ]
    },
    challenges: [
      "Complex supply chain tax management",
      "Multi-state manufacturing operations",
      "Raw material cost fluctuations",
      "International competition impacts"
    ]
  },
  'services': {
    intro: [
      "Service sector taxation requires a nuanced understanding of diverse business models. This guide examines key tax considerations for service-based organizations.",
      "In the evolving service economy, tax planning plays a vital role in business success. Explore comprehensive tax strategies for service providers.",
      "Service businesses face unique tax challenges and opportunities. This analysis covers essential aspects of service sector taxation."
    ],
    aspects: {
      'operations': [
        "Service delivery tax implications",
        "Client billing and tax considerations",
        "Resource allocation tax planning",
        "Service quality investments"
      ],
      'technology': [
        "Digital service delivery taxation",
        "Cloud service tax implications",
        "Technology investment benefits",
        "Innovation tax incentives"
      ],
      'compliance': [
        "Service-specific tax compliance",
        "Professional service regulations",
        "Quality certification benefits",
        "Industry standard compliance"
      ],
      'international': [
        "Cross-border service taxation",
        "International client management",
        "Global service delivery",
        "Foreign market tax planning"
      ]
    },
    challenges: [
      "Service quality maintenance costs",
      "Resource optimization",
      "Market competition impacts",
      "Technology adoption expenses"
    ]
  },
  'retail': {
    intro: [
      "Retail businesses operate in a dynamic tax environment requiring careful consideration of inventory, sales, and customer service aspects.",
      "Modern retail taxation encompasses both traditional and digital channels. This guide explores comprehensive tax strategies for retail success.",
      "Retail tax management requires balancing compliance with operational efficiency. Discover key insights for retail tax optimization."
    ],
    aspects: {
      'operations': [
        "Inventory management taxation",
        "Point of sale tax systems",
        "Customer service investments",
        "Retail space optimization"
      ],
      'technology': [
        "E-commerce tax implications",
        "Digital payment systems",
        "Inventory tracking technology",
        "Customer analytics investments"
      ],
      'compliance': [
        "Retail-specific tax compliance",
        "Consumer protection regulations",
        "Product safety standards",
        "Environmental compliance"
      ],
      'expansion': [
        "Multi-store tax management",
        "Market expansion strategies",
        "Franchise tax considerations",
        "International retail taxation"
      ]
    },
    challenges: [
      "Inventory cost management",
      "Multi-channel sales taxation",
      "Customer retention investments",
      "Market competition impacts"
    ]
  }
};

// Enhanced content generation with industry focus
export const generateDetailedContent = (topic, category) => {
  const content = {
    id: uuidv4(),
    topic,
    category,
    sections: [],
    caseStudies: [],
    expertTips: [],
    keyPoints: [],
    upcomingDeadlines: [],
    resources: []
  };

  // Determine industry template
  const getIndustryTemplate = () => {
    if (topic.toLowerCase().includes('manufacturing')) return industryTemplates.manufacturing;
    if (topic.toLowerCase().includes('service')) return industryTemplates.services;
    if (topic.toLowerCase().includes('retail')) return industryTemplates.retail;
    return industryTemplates.manufacturing; // default template
  };

  const template = getIndustryTemplate();
  
  // Generate unique introduction
  content.introduction = template.intro[Math.floor(Math.random() * template.intro.length)];

  // Generate unique sections based on industry aspects
  const aspectKeys = Object.keys(template.aspects);
  content.sections = aspectKeys.map(aspect => {
    const aspectPoints = template.aspects[aspect];
    return {
      title: aspect.charAt(0).toUpperCase() + aspect.slice(1) + ' Considerations',
      content: `In the context of ${topic}, ${aspectPoints[0].toLowerCase()} represents a critical area. 
        Organizations must focus on ${aspectPoints[1].toLowerCase()}, while ensuring 
        ${aspectPoints[2].toLowerCase()}. Additionally, ${aspectPoints[3].toLowerCase()} 
        plays a vital role in maintaining competitive advantage.`
    };
  });

  // Add industry-specific challenges section
  content.sections.push({
    title: 'Industry Challenges and Solutions',
    content: `Key challenges in ${topic} include ${template.challenges[0].toLowerCase()} and 
      ${template.challenges[1].toLowerCase()}. Organizations must develop strategies to address 
      ${template.challenges[2].toLowerCase()}, while managing ${template.challenges[3].toLowerCase()}.`
  });

  // Generate unique case studies
  content.caseStudies = [
    {
      title: `${topic} Optimization Success`,
      challenge: `A leading ${topic.toLowerCase()} organization faced challenges with ${template.challenges[0].toLowerCase()}.`,
      solution: `Implemented comprehensive strategies focusing on ${template.aspects[aspectKeys[0]][0].toLowerCase()}.`,
      outcome: "Achieved 30% improvement in tax efficiency and 25% reduction in compliance costs."
    },
    {
      title: `${topic} Innovation Case`,
      challenge: `Growing ${topic.toLowerCase()} business struggled with ${template.challenges[1].toLowerCase()}.`,
      solution: `Developed integrated approach incorporating ${template.aspects[aspectKeys[1]][1].toLowerCase()}.`,
      outcome: "Realized 40% cost savings and enhanced operational efficiency by 35%."
    }
  ];

  // Generate unique expert tips
  content.expertTips = aspectKeys.map(aspect => 
    `Optimize ${template.aspects[aspect][0].toLowerCase()} in ${topic}`
  );

  // Generate unique key points
  content.keyPoints = [
    `Impact of ${template.aspects[aspectKeys[0]][0].toLowerCase()} on ${topic}`,
    `Strategies for ${template.aspects[aspectKeys[1]][1].toLowerCase()}`,
    `Optimizing ${template.aspects[aspectKeys[2]][2].toLowerCase()}`,
    `Managing ${template.challenges[0].toLowerCase()}`,
    `Future trends in ${template.aspects[aspectKeys[3]][3].toLowerCase()}`
  ];

  // Generate unique conclusion
  content.conclusion = `Success in ${topic} requires a balanced approach to tax management and operational efficiency. 
    Organizations should focus on ${template.aspects[aspectKeys[0]][0].toLowerCase()} and 
    ${template.aspects[aspectKeys[1]][1].toLowerCase()}, while preparing for future developments. 
    Those that effectively implement these strategies while maintaining compliance will achieve sustainable growth 
    in the evolving business landscape.`;

  return content;
};

// Helper function to estimate word count
export const estimateWordCount = (content) => {
  let totalWords = 0;
  
  // Count words in introduction and conclusion
  totalWords += (content.introduction || '').split(' ').length;
  totalWords += (content.conclusion || '').split(' ').length;
  
  // Count words in sections
  content.sections?.forEach(section => {
    totalWords += section.title.split(' ').length;
    totalWords += section.content.split(' ').length;
  });
  
  // Count words in case studies
  content.caseStudies?.forEach(study => {
    totalWords += study.title.split(' ').length;
    totalWords += study.challenge.split(' ').length;
    totalWords += study.solution.split(' ').length;
    totalWords += study.outcome.split(' ').length;
  });
  
  return totalWords;
};

const generateBlogContent = (category) => {
  const titles = {
    'GST Updates': [
      'Latest Changes in GST E-invoicing System for 2024',
      'GST Compliance Requirements for Digital Service Providers',
      'New GST Rates and HSN Code Updates',
      'GST Audit Guidelines: Key Changes and Requirements',
      'E-way Bill System Updates and Compliance Changes'
    ],
    'Tax Planning': [
      'Strategic Tax Planning for High Net Worth Individuals',
      'Tax-Efficient Investment Strategies for FY 2024-25',
      'Maximizing Tax Benefits Through Charitable Donations',
      'Real Estate Investment and Tax Planning Guide',
      'Tax Planning Strategies for Business Expansion'
    ],
    'Business Advisory': [
      'Digital Transformation Roadmap for Traditional Businesses',
      'Mergers and Acquisitions: Strategic Considerations',
      'Business Valuation Methods and Best Practices',
      'Risk Management in the Digital Age',
      'Succession Planning for Family-Owned Businesses'
    ],
    'Legal Insights': [
      'Impact of New Labor Codes on Businesses',
      'Corporate Governance Framework Updates',
      'Legal Aspects of Data Protection and Privacy',
      'Intellectual Property Rights in Digital Business',
      'Contract Management Best Practices'
    ],
    'Industry News': [
      'Impact of Union Budget 2024 on MSMEs',
      'Green Tax Incentives for Sustainable Businesses',
      'Foreign Investment Policy Changes and Impact',
      'Digital Banking Regulations Update',
      'Manufacturing Sector Tax Incentives'
    ],
    'Corporate Compliance': [
      'Directors Responsibility Under Companies Act',
      'Annual Compliance Calendar for Companies',
      'ESG Compliance Requirements for Businesses',
      'Related Party Transaction Guidelines',
      'Corporate Social Responsibility Updates'
    ],
    'International Business': [
      'Transfer Pricing Regulations Update',
      'DTAA Benefits and International Tax Planning',
      'Global Minimum Tax Implementation Guide',
      'Cross-Border Merger Regulations',
      'International Trade Finance Guidelines'
    ]
  };

  const categorySpecificContent = {
    'GST Updates': {
      topics: ['Registration', 'Returns', 'Input Tax Credit', 'E-invoicing', 'Compliance'],
      keyPoints: ['Rate changes', 'Filing deadlines', 'Credit rules', 'Documentation', 'Penalties'],
      regulations: ['CGST Act', 'IGST Rules', 'Circulars', 'Notifications', 'Court rulings']
    },
    'Tax Planning': {
      topics: ['Deductions', 'Exemptions', 'Investments', 'Asset planning', 'Risk management'],
      keyPoints: ['Tax saving', 'Wealth creation', 'Risk mitigation', 'Compliance', 'Future planning'],
      regulations: ['Income Tax Act', 'Wealth Tax', 'Investment guidelines', 'SEBI regulations']
    },
    'Business Advisory': {
      topics: ['Strategy', 'Operations', 'Finance', 'Technology', 'Human Resources'],
      keyPoints: ['Growth planning', 'Risk assessment', 'Market analysis', 'Performance metrics'],
      frameworks: ['SWOT', 'PESTLE', 'Balanced Scorecard', 'Risk matrices']
    },
    'Legal Insights': {
      topics: ['Corporate law', 'Compliance', 'Contracts', 'Disputes', 'Regulations'],
      keyPoints: ['Legal requirements', 'Risk mitigation', 'Documentation', 'Enforcement'],
      regulations: ['Companies Act', 'SEBI guidelines', 'RBI regulations', 'Court precedents']
    },
    'Industry News': {
      topics: ['Policy changes', 'Market trends', 'Technology', 'Regulations', 'Economy'],
      keyPoints: ['Impact analysis', 'Future outlook', 'Opportunities', 'Challenges'],
      sectors: ['Manufacturing', 'Services', 'Technology', 'Finance', 'Infrastructure']
    },
    'Corporate Compliance': {
      topics: ['Statutory compliance', 'Regulatory filing', 'Governance', 'Reporting'],
      keyPoints: ['Due dates', 'Documentation', 'Penalties', 'Best practices'],
      regulations: ['Companies Act', 'SEBI guidelines', 'RBI regulations', 'Tax laws']
    },
    'International Business': {
      topics: ['Cross-border trade', 'Foreign investment', 'Tax treaties', 'Regulations'],
      keyPoints: ['Compliance', 'Risk management', 'Strategy', 'Operations'],
      regulations: ['FEMA', 'DTAA', 'Import-Export', 'Foreign investment']
    }
  };

  const title = titles[category][Math.floor(Math.random() * titles[category].length)];
  const categoryContent = categorySpecificContent[category];

  const generateSpecificParagraph = (topic, context) => {
    const specificContent = categoryContent[context] || categoryContent.topics;
    const relevantPoints = specificContent.sort(() => Math.random() - 0.5).slice(0, 2);
    
    return `In the realm of ${topic}, particularly focusing on ${relevantPoints.join(' and ')}, 
    businesses need to maintain a strategic approach. Recent developments have introduced new 
    considerations in ${relevantPoints[0].toLowerCase()}, requiring careful attention to 
    ${relevantPoints[1].toLowerCase()}. Industry experts emphasize the importance of staying 
    updated with these changes to ensure compliance and optimize business operations.`;
  };

  const introduction = `The landscape of ${category} continues to evolve rapidly in 2024, 
  bringing significant changes to how businesses operate. This comprehensive analysis of 
  ${title.toLowerCase()} explores critical updates and practical implications for businesses. 
  With focus on ${categoryContent.topics.slice(0, 3).join(', ')}, this guide provides 
  actionable insights for professionals and organizations.`;

  const generateSectionContent = (sectionType) => {
    const sections = {
      'Current Landscape': {
        title: 'Current Landscape and Recent Developments',
        paragraphs: [
          generateSpecificParagraph(category, 'topics'),
          generateSpecificParagraph(category, 'keyPoints'),
          `The ${category.toLowerCase()} landscape has seen significant changes, particularly in ${categoryContent.topics[0]} and ${categoryContent.topics[1]}.`
        ]
      },
      'Key Considerations': {
        title: 'Key Considerations and Compliance Requirements',
        paragraphs: [
          generateSpecificParagraph(category, 'regulations'),
          generateSpecificParagraph(category, 'keyPoints'),
          `Organizations must carefully consider these aspects while planning their ${category.toLowerCase()} strategy.`
        ]
      },
      'Implementation': {
        title: 'Implementation Strategies and Best Practices',
        paragraphs: [
          generateSpecificParagraph(category, 'topics'),
          generateSpecificParagraph(category, 'keyPoints'),
          `Successful implementation requires a balanced approach to ${categoryContent.topics[2]} and ${categoryContent.topics[3]}.`
        ]
      },
      'Future Outlook': {
        title: 'Future Outlook and Recommendations',
        paragraphs: [
          generateSpecificParagraph(category, 'topics'),
          generateSpecificParagraph(category, 'keyPoints'),
          `Looking ahead, organizations should focus on ${categoryContent.topics[4]} while maintaining compliance with ${categoryContent.topics[0]}.`
        ]
      }
    };

    return sections[sectionType];
  };

  const sections = [
    generateSectionContent('Current Landscape'),
    generateSectionContent('Key Considerations'),
    generateSectionContent('Implementation'),
    generateSectionContent('Future Outlook')
  ];

  const conclusion = `As the ${category.toLowerCase()} landscape continues to evolve, 
  organizations must stay proactive in adapting to changes. This comprehensive guide has 
  explored key aspects of ${title.toLowerCase()}, highlighting critical considerations in 
  ${categoryContent.topics.slice(0, 2).join(' and ')}. Success in this dynamic environment 
  requires ongoing attention to regulatory updates, strategic planning, and professional guidance. 
  Organizations that effectively implement these insights while maintaining compliance with 
  ${categoryContent.regulations ? categoryContent.regulations[0] : 'relevant regulations'} 
  will be better positioned for sustainable growth.`;

  const totalWords = [
    introduction,
    ...sections.flatMap(section => section.paragraphs),
    conclusion
  ].join(' ').split(/\s+/).length;

  return {
    title,
    content: {
      introduction,
      sections,
      conclusion,
      totalWords
    }
  };
};

export { generateBlogContent }; 