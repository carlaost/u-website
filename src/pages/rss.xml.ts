import rss from '@astrojs/rss';

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: 'Undermind - Radically better research and discovery',
    // `<description>` field in output xml
    description:
      'Undermind is an AI-powered research assistant that autonomously reads hundreds of papers to deliver precisely relevant insights — faster than ever.',
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob('./**/*.md'),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
