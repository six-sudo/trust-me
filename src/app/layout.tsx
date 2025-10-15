import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trust Me',
  description: 'A trusted platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
