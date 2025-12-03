import React from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULTS = {
  siteName: 'Rastogi & Associates',
  baseUrl: 'https://www.rastogiassociates.in',
  title: 'Rastogi & Associates | Litigation and Tax Advisory Services in Delhi NCR',
  description:
    'Trusted tax, litigation, and corporate advisory in Delhi NCR. Expert GST, income tax, international taxation, and compliance services.',
  image: '/images/company/hero.jpg',
  type: 'website'
};

function SEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  keywords,
  image = DEFAULTS.image,
  url,
  type = DEFAULTS.type,
  jsonLd,
  alternates
}) {
  const canonical = url || DEFAULTS.baseUrl;
  const imgUrl = image?.startsWith('http') ? image : `${DEFAULTS.baseUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      {Array.isArray(alternates) && alternates.map((alt) => (
        <link key={`${alt.hrefLang}-${alt.href}`} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={DEFAULTS.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;


