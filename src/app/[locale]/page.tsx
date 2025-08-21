import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FloatingNav from "@/components/ui/FloatingNavbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { navItems } from "@/constants";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={locale === "ar" ? navItems.reverse() : navItems} />
        <Hero />
        <Grid />
        <Services />
        {/* <About /> */}
        <Approach />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
