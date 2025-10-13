import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yize Xue | Portfolio',
  description: 'Full-stack developer | Python, C++, JS/TS',
  metadataBase: new URL('https://your-portfolio-domain.com'),
  openGraph: {
    title: 'Yize Xue | Portfolio',
    description: 'Full-stack developer | Python, C++, JS/TS',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Yize Xue Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Yize Xue Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yize Xue | Portfolio',
    description: 'Full-stack developer | Python, C++, JS/TS',
    images: ['/opengraph-image']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  themeColor: '#0b1221'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0b1221] text-white antialiased">
        {children}
      </body>
    </html>
  );
}


