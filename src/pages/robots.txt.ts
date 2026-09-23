import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/url';
import { products } from '../site.config';

// The hub is served at the host root, so this is the ONLY robots.txt crawlers read for rouraroble.github.io.
// It must therefore advertise every product's sitemap (project sites cannot have their own effective robots.txt).
export const GET: APIRoute = () => {
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${absoluteUrl('/sitemap-index.xml')}`,
    ...products.map((p) => `Sitemap: https://rouraroble.github.io/${p.slug}/sitemap-index.xml`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
