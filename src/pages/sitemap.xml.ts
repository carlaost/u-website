import type { APIRoute } from 'astro';

const baseUrl = 'https://undermind.ai'; // Replace with your actual domain

function formatDate(date: Date): string {
  return date.toISOString().substring(0, 10);
}

const pages = [
  // Static pages with their canonical URLs
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/privacy', changefreq: 'monthly', priority: 0.2 },
  { url: '/terms', changefreq: 'monthly', priority: 0.2 },
  { url: '/refund', changefreq: 'monthly', priority: 0.2 },
  { url: '/whitepaper.pdf', changefreq: 'monthly', priority: 0.8 },
  // Pages with external canonical URLs
  {
    url: '/pricing',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: 'https://app.undermind.ai/?auth=login',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://app.undermind.ai/?auth=register',
    changefreq: 'monthly',
    priority: 0.8,
  },
];

export const GET: APIRoute = async () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${
            page.url.startsWith('http') ? page.url : `${baseUrl}${page.url}`
          }</loc>
          <lastmod>${formatDate(new Date())}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
