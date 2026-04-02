import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Switchax',
    short_name: 'Switchax',
    description: 'Authorized Zoho Premium Partner',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2C83ED',
    icons: [
      {
        src: '/switchax-logo-removebg-preview.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/switchax-logo-removebg-preview.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/switchax-logo-removebg-preview.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
