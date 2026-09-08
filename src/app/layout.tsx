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
  title: `${personalInfo.name} | ECE Student & Software Developer`,
  description: `${personalInfo.role} at ${personalInfo.university}. ${personalInfo.tagline}`,
  keywords: [
    'Kankon Mondal',
    'ECE KUET',
    'Electronics and Communication Engineering',
    'Machine Learning',
    'Python Developer',
    'FastAPI',
    'Embedded Systems',
    'Portfolio',
    'Open Source',
  ],
  authors: [{ name: personalInfo.name, url: 'https://github.com/KankonNil007' }],
  creator: personalInfo.name,
  metadataBase: new URL('https://kankonnil007.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kankonnil007.github.io',
    title: `${personalInfo.name} | ECE Student & Software Developer`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/assets/profile.png',
        width: 800,
        height: 800,
        alt: `${personalInfo.name} - ECE KUET`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ECE Student & Software Developer`,
    description: personalInfo.tagline,
    images: ['/assets/profile.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/assets/profile.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-[#060911] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
