import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FrontendLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function FrontendLayout({ children, className = "" }: FrontendLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
