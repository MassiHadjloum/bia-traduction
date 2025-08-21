// // import { routing } from '@/i18n/routing';
// // import createMiddleware from 'next-intl/middleware';
// // import { NextResponse } from 'next/server';

// // const intlMiddleware = createMiddleware(routing);

// // export default async function middleware(req: any) {
// //   const { pathname } = req.nextUrl;
// //   if (pathname === '/') {
// //     const userLocale = req.cookies.get('NEXT_LOCALE')?.value;
// //     const targetLocale =
// //       userLocale && routing.locales.includes(userLocale as any)
// //         ? userLocale
// //         : routing.defaultLocale;
// //     // Si cookie existe → rediriger vers cette locale
// //     if (userLocale && routing.locales.includes(userLocale as any)) {
// //       return NextResponse.redirect(new URL(`/${targetLocale}`, req.url));
// //     }

// //     // Sinon fallback vers la defaultLocale
// //     return NextResponse.redirect(
// //       new URL(`/${routing.defaultLocale}`, req.url)
// //     );
// //   }

// //     // Vérifier la locale dans l'URL
// //   const localeInUrl = pathname.split('/')[1];
// //   // if (localeInUrl && !routing.locales.includes(localeInUrl as any)) {
// //   //   // Renvoie 404 → Next.js affichera app/[locale]/not-found.tsx si elle existe
// //   //   return NextResponse.json({ message: 'Page not found' }, { status: 404 });
// //   // }



// //   return intlMiddleware(req);
// // }

// // export const config = {
// //   // Match all pathnames except for
// //   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
// //   // - … the ones containing a dot (e.g. `favicon.ico`)
// //   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// // }; 
// import { routing } from '@/i18n/routing';
// import createMiddleware from 'next-intl/middleware';
// import { NextResponse } from 'next/server';

// const intlMiddleware = createMiddleware(routing);

// export default async function middleware(req: any) {
//   const { pathname } = req.nextUrl;

//   // Redirection uniquement si la racine est tapée
//   if (pathname === '/') {
//     const userLocale = req.cookies.get('NEXT_LOCALE')?.value;
//     const targetLocale =
//       userLocale && routing.locales.includes(userLocale as any)
//         ? userLocale
//         : routing.defaultLocale;

//     return NextResponse.redirect(new URL(`/${targetLocale}`, req.url));
//   }

//   // Pour le reste, on laisse next-intl middleware gérer la locale
//   return intlMiddleware(req);
// }

// export const config = {
//   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
// };

import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: any) {
  const { pathname } = req.nextUrl;

  // Redirection uniquement sur la racine
  if (pathname === '/') {
    const userLocale = req.cookies.get('NEXT_LOCALE')?.value;
    const targetLocale =
      userLocale && routing.locales.includes(userLocale as any)
        ? userLocale
        : routing.defaultLocale;

    return NextResponse.redirect(new URL(`/${targetLocale}`, req.url));
  }

  // Laisser next-intl gérer la locale pour tout le reste
  return intlMiddleware(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
