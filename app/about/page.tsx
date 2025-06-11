import { type Metadata } from 'next';
import { siteConfig } from '@/config/site';

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = 'About Us';
  const pageDescription = `Learn more about ${siteConfig.name}, a project by DevRGD.`;
  const pageUrl = '/about';

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      type: 'article',
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export default function AboutPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">About Icons by DevRGD</h1>
      <p className="mt-4 text-lg">This is the about page where you can describe your project in detail.</p>
    </main>
  );
}
