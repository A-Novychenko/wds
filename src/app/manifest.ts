import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WebDevSynergy - розробка сайтів, інтернет-магазинів, мобільних додатків і дизайну | WDS"',
    short_name: 'WDS',
    description:
      'WebDevSynergy — сучасна вебстудія, що створює надійні, адаптивні і швидкі вебсайти для бізнесу. Індивідуальний підхід, передові технології та прозорість у кожному проєкті.',
    display: 'standalone',
    background_color: '#354483',
    theme_color: '#354483',
    orientation: 'portrait',
    lang: 'uk',
    start_url: '/uk/',
    scope: '/uk/',
    categories: ['technology', 'productivity', 'business'],
    screenshots: [
      {
        src: '/meta/home.png',
        sizes: '2560x1440',
        type: 'image/png',
        label: 'Головна сторінка',
        form_factor: 'wide',
      },
    ],
    icons: [
      {
        src: '/meta/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/meta/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/meta/maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
