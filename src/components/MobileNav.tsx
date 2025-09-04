"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/constants"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Link } from "@/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import MagicButton from "./MagicButton"
import { MenuIcon } from "lucide-react"
import LocalSwitcher from "./translate/local-switcher"
import Image from "next/image"

const MobileNavigation = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname();
  const locale = useLocale() as "en" | "fr" | "ar";
  const t = useTranslations("hero")

  useEffect(() => {
    // Désactiver le scroll automatique du navigateur sur les hash
    const handleHashChange = (e: any) => {
      e.preventDefault();
      return false;
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <header className={`mobile-header absolute z-[5000] top-0 inset-x-0
    bg-black-200 backdrop-blur-md shadow-lg shadow-white-100/50 
    ${locale === "ar" && "flex justify-end"}`}
    >

      <Sheet open={open} onOpenChange={setOpen}
      >
        <div className={`${locale === 'ar' ? 'flex-row-reverse' : 'flex-row'} flex w-full justify-between`}>
          <SheetTrigger aria-label="nav-menu">
            <MagicButton
              title={""}
              icon={<MenuIcon />}
              position="right"
            />
          </SheetTrigger>
          <Image src={"/logo-bg.png"} width={60} height={60} alt="logo" />
        </div>

        <SheetContent className="shad-sheet h-screen px-3 pt-10 z-[5001]"
          aria-describedby="mobile-nav-description"
          side={locale === "ar" ? "right" : "left"}
        >
          <SheetTitle>
            <div className="text-center mt-8">
              <p className="text-purple">{t("navtitle")}</p>
            </div>
          </SheetTitle>
          <SheetDescription className="mb-8 text-center" >
            {t("navDesc")} {/* tu ajoutes une petite phrase pour l’accessibilité */}
          </SheetDescription>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ name, link }) => {
                const isActive = pathname.includes(link);
                return <a key={link}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false); // <-- ferme la Sheet
                    const targetId = link.replace("#", "");

                    // Attendre que le Sheet se ferme puis scroll
                    setTimeout(() => {
                      const el = document.getElementById(targetId);
                      if (el) {
                        // Sauvegarder la position actuelle
                        const currentScroll = window.pageYOffset;

                        // Mettre à jour l'URL sans déclencher de scroll
                        window.history.replaceState(null, '', link);

                        // Restaurer la position si elle a changé
                        if (window.pageYOffset !== currentScroll) {
                          window.scrollTo(0, currentScroll);
                        }

                        // Puis scroll vers la cible
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }
                    }, 350);
                  }}
                  className="lg:w-full" href={link}>
                  <li className={cn('mobile-nav-item', isActive && "border-light-100/20 bg-light-100/10")}>
                    {/* <Image
                      src={"/menu.svg"} alt={name[locale]}
                      width={24} height={24}
                      className={cn("nav-icon", isActive && "nav-icon-active")}
                    /> */}
                    <p className="block">{name[locale]}</p>
                  </li>
                </a>;
              })}
            </ul>
          </nav>

          <div className="w-full flex justify-center mt-36">
            <LocalSwitcher className="w-[200px] border border-white rounded-lg" />
          </div>
        </SheetContent>
      </Sheet>

    </header>
  )
}

export default MobileNavigation
