import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-5 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </p>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-right">
          Built by{' '}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            DevRGD
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
