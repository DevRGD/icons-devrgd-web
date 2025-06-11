import { DefaultSeoProps } from 'next-seo';
import { siteConfig } from './config/site';

const config: DefaultSeoProps = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteConfig.url,
    site_name: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: siteConfig.links.twitter,
    site: siteConfig.links.twitter,
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/icon-192x192.png',
      sizes: '192x192',
    },
  ],
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'nextjs, tailwindcss, icons, devrgd, react, typescript, seo',
    },
  ],
};

export default config;
