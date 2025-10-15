export const ROUTES = {
  // Auth routes
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
  },

  // Main pages
  HOME: '/',
  BRANDS: '/brands',

} as const;

// Type for route values
export type RouteValue = typeof ROUTES[keyof typeof ROUTES] extends string 
  ? string 
  : typeof ROUTES[keyof typeof ROUTES] extends Record<string, any>
  ? RouteValue
  : never;

// Helper function to get nested route values
export const getRoute = (path: string): string => {
  const keys = path.split('.');
  let current: any = ROUTES;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      console.warn(`Route path "${path}" not found in ROUTES constant`);
      return '/';
    }
  }
  
  return typeof current === 'string' ? current : '/';
};
