import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'William Pradana Putra, Marketing Manager',
  description:
    'Marketing Manager building brands people feel and growth the numbers can prove, brand, campaigns, and data-driven growth across Meta, TikTok, and marketplaces.',
  metadataBase: new URL('https://williampradana.example'),
  openGraph: {
    title: 'William Pradana Putra, Marketing Manager',
    description:
      'Building brands people feel, and growth the numbers can prove.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
