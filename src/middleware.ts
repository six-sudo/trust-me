import createMiddleware from 'next-intl/middleware';
import {locales} from './config';

export default createMiddleware({
    locales,
    defaultLocale: 'en'
});

export const config = {
    matcher: ['/', '/(th|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};