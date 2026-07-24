import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'William Pradana Putra — Brand Lead & Business Strategist',
  description:
    'Bridging creative philosophy, system architecture, and sustainable net profit. Brand Lead, strategist, and builder of resilient business ecosystems.',
  metadataBase: new URL('https://williampradana.example'),
  openGraph: {
    title: 'William Pradana Putra — Brand Lead & Business Strategist',
    description:
      'Bridging creative philosophy, system architecture, and sustainable net profit.',
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
