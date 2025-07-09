import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/uk`,
      lastModified: '2025-07-09T00:00:00+03:00',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: '2025-07-09T00:00:00+03:00',
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
