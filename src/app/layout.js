import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'GNAN Automations - Industrial Training Institute | PLC, HMI, SCADA Courses in Ameerpet',
  description: 'Master industrial automation with hands-on PLC, HMI, VFD, SCADA training. Siemens, Allen Bradley, Delta courses up to ₹25,000. Located in Ameerpet, Hyderabad.',
  keywords: 'PLC training, HMI programming, SCADA systems, VFD parameterization, industrial automation, Ameerpet, Hyderabad, Siemens, Allen Bradley',
  authors: [{ name: 'K Paramesh', url: 'https://gnanautomations.com' }],
  openGraph: {
    title: 'GNAN Automations - Industrial Training Institute',
    description: 'Hands-on PLC, HMI, SCADA training in Ameerpet',
    url: 'https://gnanautomations.com',
    siteName: 'GNAN Automations',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <ThemeToggle />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
