// 'use client';
// import { useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import { notFound } from 'next/navigation';

// export default function HashChecker() {
//   const pathname = usePathname();

//   useEffect(() => {
//     if (window.location.hash) {
//       // On pourrait trigger un redirect ou afficher un message
//       notFound(); // ⚠ attention: `notFound()` côté client ne déclenche pas ton page server
//     }
//   }, [pathname]);

//   return null;
// }
