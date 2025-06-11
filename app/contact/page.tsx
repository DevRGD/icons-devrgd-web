import { type Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${siteConfig.name}.`,
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">You can reach us via our social media channels.</p>
      <div className="mt-4">
        <a
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Twitter
        </a>
        <span className="mx-2">|</span>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
