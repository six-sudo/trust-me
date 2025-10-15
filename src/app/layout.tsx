import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider"
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
    <html suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
