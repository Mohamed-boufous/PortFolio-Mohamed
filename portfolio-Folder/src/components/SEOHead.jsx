import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://mohamedboufous.vercel.app';

/**
 * SEOHead – Reusable component for per-page SEO meta tags.
 * Dynamically updates <title>, <meta description>, canonical URL, 
 * and Open Graph tags for each page using react-helmet-async.
 *
 * @param {string} title – Page title (will be suffixed with " | Mohamed Boufous")
 * @param {string} description – Meta description for the page
 * @param {string} path – URL path (e.g. "/skills")
 * @param {string} [lang="en"] – Language code
 */
const SEOHead = ({ title, description, path = '/', lang = 'en' }) => {
  const fullTitle = title
    ? `${title} | Mohamed Boufous`
    : 'Mohamed Boufous – AI & Big Data Engineer | Portfolio';
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};

export default SEOHead;
