import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
    // Validate locale and fallback to default if invalid
    const validLocale = locales.includes(locale as any) ? locale : 'en';

    return {
        messages: (await import(`./messages/${validLocale}.json`)).default,
        locale: validLocale as string
    }
})