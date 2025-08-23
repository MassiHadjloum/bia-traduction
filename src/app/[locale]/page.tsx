// import Approach from "@/components/Approach";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Grid from "@/components/Grid";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MobileNavigation from "@/components/MobileNav";
// import Services from "@/components/Services";
import FloatingNav from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
// import ScrollToTop from "@/components/ui/ScrollToTop";
import { navItems } from "@/constants";
import { getLocale } from "next-intl/server";
import dynamic from "next/dynamic";


const Grid = dynamic(() => import("@/components/Grid"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-[#000319] my-2 animate-pulse" /> });
const Services = dynamic(() => import("@/components/Services"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-[#000319] my-2 animate-pulse" /> });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-[#000319] my-2 animate-pulse" /> });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-[#000319] my-2 animate-pulse" /> });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-[#000319] my-2 animate-pulse" /> });
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-[#000319] my-2 animate-pulse" /> });


export default async function Home() {
  const locale = await getLocale();
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <MobileNavigation />
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <FloatingNav navItems={locale === "ar" ? navItems.reverse() : navItems} />
        <TracingBeam>
          <Hero />
          <Grid />
          <Services />
          {/* <About /> */}
          <Approach />
          <FAQ />
          <Contact />
          <Footer />
          <ScrollToTop />
        </TracingBeam>
      </div>
    </main>
  );
}

// j'ai refait l'analyse des performance avec google chrome lighthouse, j'ai 28% sur mobile (tres mauvais)
// Metrics
// Expand view
// First Contentful Paint
// 6.3 s
// Largest Contentful Paint
// 6.5 s
// Total Blocking Time
// 107,580 ms
// Cumulative Layout Shift
// 0
// Speed Index
// 26.5 s

