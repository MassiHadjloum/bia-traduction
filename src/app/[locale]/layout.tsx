import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { locales } from "@/i18n/config";
import { seoMetadata } from "@/seo/metadata";
import { Toaster } from "@/components/ui/toaster"

const font = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  return seoMetadata[locale] || seoMetadata["fr"]; // fallback en FR
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: any; // Adjust type as needed, e.g., { locale: string }
};

export default async function RootLayout({
  children, params
}: Readonly<RootLayoutProps>) {
  const { locale } = params;
  if (!hasLocale(locales, locale)) {
    notFound();
  } 
  return (
    <html lang={locale} >
      <body
        className={`${font.variable} bg-white dark:bg-dark-300 font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {/* <HashChecker /> */}
            {children}
             <Toaster />
          </NextIntlClientProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}
