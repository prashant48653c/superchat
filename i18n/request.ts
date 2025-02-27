import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import { cookies } from 'next/headers'; 
 
export default getRequestConfig(async ({requestLocale}) => {
 
  // const locale=cookies.length('next locale')
  let locale = await requestLocale;    
 
 
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});