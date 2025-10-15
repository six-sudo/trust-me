"use client";

import React, { createContext, useContext, ReactNode } from 'react';

interface BrandContextType {
  brandName: string;
  appName: string; // Alias for brandName for backward compatibility
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

interface BrandProviderProps {
  children: ReactNode;
}

export function BrandProvider({ children }: BrandProviderProps) {
  const brandName = process.env.NEXT_PUBLIC_APP_NAME || 'TrustMe';

  const value: BrandContextType = {
    brandName,
    appName: brandName, // Alias for backward compatibility
  };

  return (
    <BrandContext.Provider value={value}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}

// Export the context for advanced usage if needed
export { BrandContext };
