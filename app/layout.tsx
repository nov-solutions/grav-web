import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Prata } from 'next/font/google';
import './globals.css';
const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const prata = Prata({
  subsets: ['latin'],
  variable: '--font-prata',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    template: `%s • grav`,
    default: `grav • tech-oriented holding company`,
  },
  description: 'grav is a tech-oriented holding company that represents the interests of Hunter Chemelli and Thatcher Thornberry.',
  applicationName: 'grav',
  referrer: 'origin-when-cross-origin',
  keywords: ['grav', 'tech-oriented holding company', 'Hunter Chemelli', 'Thatcher Thornberry'],
  authors: [{ name: `grav` }],
  creator: `grav`,
  publisher: `grav`,
  metadataBase: new URL('https://grav.solutions'),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/assets/img/favicon.png',
    shortcut: '/assets/img/favicon.png',
    apple: '/assets/img/apple_touch_icon.png',
  },
  appleWebApp: {
    title: 'grav',
    statusBarStyle: 'default',
  },
  manifest: 'https://grav.solutions/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: `grav • tech-oriented holding company`,
    description: 'grav is a tech-oriented holding company that represents the interests of Hunter Chemelli and Thatcher Thornberry.',
    images: {
      url: 'https://grav.solutions/assets/img/social.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://grav.solutions',
              name: 'grav',
              description: 'grav is a tech-oriented holding company that represents the interests of Hunter Chemelli and Thatcher Thornberry.',
              foundingDate: '2023',
              logo: '/assets/img/logo.png',
              sameAs: ['https://www.linkedin.com/company/grav-solutions'],
            }),
          }}
        />
      </head>
      <body
        className={`${notoSans.className} ${notoSans.variable} ${prata.variable} font-sans items-center antialiased flex flex-col min-h-screen overscroll-none scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
