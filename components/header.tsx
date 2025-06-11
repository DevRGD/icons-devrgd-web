import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icon, GitHub } from '@/icons';

export default function Header() {
  return (
    <header className="w-full">
      <div className="container mx-auto flex pt-4 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center gap-2">
          <Icon className="h-8 w-8 text-foreground" />
          <span className="font-bold text-xl text-foreground">{siteConfig.name}</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-base">
          <Link href="/about" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GitHub className="h-8 w-8 rounded-full text-lg text-slate-900 bg-slate-300" />
            <span className="sr-only">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
