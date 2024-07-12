import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import '@/styles/globals.css';
import styles from './layout.module.css';
import { ReactNode } from 'react';
import Providers from '@/providers/providers';

const jost = Jost({ weight: ['700', '600', '400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Product feedback',
  description: `Frontend mentor user's feedback site`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Providers>
          <div className={styles.container}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
