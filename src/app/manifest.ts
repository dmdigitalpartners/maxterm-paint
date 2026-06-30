import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Макстерм ООД',
    short_name: 'Макстерм',
    description: 'Бои, Паркет и Строителни Материали в Пловдив',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      { src: '/icons/android-chrome-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/android-chrome-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
