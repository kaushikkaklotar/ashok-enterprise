import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashok Enterprise | Household Products & Wholesale Supply in Surat',
  description: 'Plastic household products, storage solutions, utility items, blue plastic crates and corporate gifting. Contact Ashok Enterprise in Katargam, Surat for enquiries and bulk pricing.',
  icons: { icon: '/logo.png', apple: '/logo.png' },
  openGraph: { title: 'Ashok Enterprise, Surat', description: 'Everyday essentials. Dependable wholesale supply. Practical corporate gifting.', type: 'website', locale: 'en_IN' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
