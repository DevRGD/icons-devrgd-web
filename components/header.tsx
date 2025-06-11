import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icon, GitHub } from '@/icons';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Icon className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/contact" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Contact
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            <GitHub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
