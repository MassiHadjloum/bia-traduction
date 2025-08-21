import Image from 'next/image'
import React from 'react'
import { useLocale } from 'next-intl'
import { Link } from "../i18n/navigation"
import LocalSwitcher from './translate/local-switcher'
import { ThemeModeToggle } from './themes/theme-mode-toggle'

const Navbar = () => {
  const locale = useLocale()
  const isRtl = locale === "ar"
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border ring-1 ring-black/5
     bg-white/25 backdrop-blur-md dark:bg-black/10 derk:shadow-sm 
     dark:shadow-gray-500 shadow-md h-14">
      <div className="flex items-center gap-4 h-14 justify-between w-full"
        dir={isRtl ? "rtl" : "ltr"}>
        <div className="flex items-center flex-shrink-0">
          <Link href={"/"}>
            <div className="p-4 flex items-center gap-1">
              <Image
                src="/globe.svg"
                height={40}
                width={40}
                alt="globe"
                className="h-10 w-fit"
              />
            </div>
          </Link>
          <Link href={"/user/form"}>
            <div className="p-4 flex items-center gap-1">
              <p className='text-primary'>
                User form
              </p>
            </div>
          </Link>
          <Link href={"/theming"}>
            <div className="p-4 flex items-center gap-1">
              <p className='text-primary'>
                Theming
              </p>
            </div>
          </Link>
        </div>

        {/* <div className="flex-1" /> */}

        <div className="flex flex-shrink-0 items-center gap-4 mr-5">

          <ThemeModeToggle />
          <LocalSwitcher />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
