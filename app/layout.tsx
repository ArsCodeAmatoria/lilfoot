import '#/styles/globals.css';
import { AddressBar } from '#/ui/address-bar';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import { Shadows_Into_Light_Two } from 'next/font/google';
import { Providers } from './providers';

// Initialize the Shadows Into Light Two font
const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shadows-into-light',
});

export const metadata: Metadata = {
  title: {
    default: 'lilfoot',
    template: '%s | lilfoot',
  },
  metadataBase: new URL('https://lilfoot.org'),
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
  openGraph: {
    title: 'lilfoot',
    description:
      'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
    images: [`/api/og?title=lilfoot`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`[color-scheme:dark] ${shadowsIntoLightTwo.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/dark-grid.svg')] pb-36">
        <Providers>
          <GlobalNav />

          <div className="lg:pl-72">
            <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
              <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                <div className="rounded-lg bg-black">
                  <AddressBar />
                </div>
              </div>

              <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
              </div>
              <Byline />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
