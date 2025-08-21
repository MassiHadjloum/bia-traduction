"use client"

import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { ReactNode, useTransition } from "react"
import { Label } from "../ui/label";
import { Select, SelectTrigger } from "../ui/select";
import clsx from "clsx";
import { LucideLanguages } from "lucide-react";
import { setUserLocale } from "../../translation/services/locale";

interface LocalSwitcherProps {
  children?: ReactNode;
  defaultValue?: string;
  label?: string;
}

const LocalSwitcherSelect = ({ children, defaultValue
}: LocalSwitcherProps) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter();
  const pathname = usePathname()
  const params = useParams()

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
      setUserLocale(nextLocale)
      router.replace(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }
  return (
    <Label className={clsx("relative backdrop-blur-md bg-transparent",
      isPending && "transition-opacity [&:disabled]:opacity-30"
    )}>
      {/* <p className="sr-only">{label}</p> */}
      <Select onValueChange={onSelectChange} defaultValue={defaultValue}
        disabled={isPending}>
        <SelectTrigger aria-label="Changer de langue" className="bg-transparent z-50 border-none">
          {/* <LanguagesIcon /> */}
          <LucideLanguages size={20} />
        </SelectTrigger>
        {children}
      </Select>
    </Label>
  )
}

export default LocalSwitcherSelect