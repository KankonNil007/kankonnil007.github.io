import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { personalInfo } from '@/data/portfolioData';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kankon Mondal | Machine Learning Developer & ECE Student',
  description:
    'Kankon Mondal is an Electronics and Communication Engineering student and machine learning developer working with Python, AI, deep learning, and web development.',
  keywords: [
    'Kankon Mondal',
    'Kankon Mondal portfolio',
    'Kankon developer',
    'Kankon machine learning',
    'Kankon AI',
    'Kankon GitHub',
    'Machine Learning Developer',
    'Machine Learning student',
    'Python developer',
    'ECE student',
    'Electronics and Communication Engineering student',
    'Machine learning projects',
    'Deep learning projects',
    'AI projects',
    'Python projects',
    'KUET ECE',
  ],
  authors: [{ name: 'Kankon Mondal', url: 'https://github.com/KankonNil007' }],
  creator: 'Kankon Mondal',
  metadataBase: new URL('https://kankon.dev'),
  alternates: {
    canonical: 'https://kankon.dev/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kankon.dev/',
    title: 'Kankon Mondal | Machine Learning Developer & ECE Student',
    description:
      'Portfolio of Kankon Mondal — an ECE student and machine learning developer working with Python, AI, deep learning, web development, and electronics.',
    siteName: 'Kankon Mondal Portfolio',
    images: [
      {
        url: 'https://kankon.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kankon Mondal | Machine Learning Developer & ECE Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kankon Mondal | Machine Learning Developer & ECE Student',
    description:
      'Portfolio of Kankon Mondal — an ECE student and machine learning developer.',
    images: ['https://kankon.dev/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/assets/profile.png',
  },
};

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Kankon Mondal',
    url: 'https://kankon.dev/',
    jobTitle: 'Machine Learning Developer',
    description:
      'Electronics and Communication Engineering student and machine learning developer interested in AI, deep learning, Python, web development, and electronics.',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Khulna University of Engineering & Technology',
      alternateName: 'KUET',
    },
    sameAs: [
      'https://github.com/KankonNil007',
      'https://www.linkedin.com/in/kankon-mondal/',
      'https://facebook.com/KankonNil/',
    ],
    knowsAbout: [
      'Machine Learning',
      'Deep Learning',
      'Python',
      'Data Science',
      'Artificial Intelligence',
      'Web Development',
      'Electronics and Communication Engineering',
      'Computer Vision',
      'FastAPI',
      'Embedded Systems',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Old Domain Redirect Safeguard: safely redirect any legacy kankonnil007.github.io visits to kankon.dev */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname === 'kankonnil007.github.io') {
                window.location.replace('https://kankon.dev' + window.location.pathname + window.location.search + window.location.hash);
              }
            `,
          }}
        />
        {/* JSON-LD ProfilePage and Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#060911] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}

