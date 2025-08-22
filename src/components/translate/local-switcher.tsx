import { useLocale, useTranslations } from "next-intl"
import LocalSwitcherSelect from "./local-switcher-select"
import { SelectContent, SelectItem } from "../ui/select"
import { locales } from "@/i18n/config"

const LocalSwitcher = ({ className }: { className?: string }) => {
  // const t = await getTranslations('localeSwitcher')
  const t = useTranslations('localeSwitcher')
  const locale = useLocale()
  return (
    <LocalSwitcherSelect className={className}
      label={t("label")} defaultValue={locale} >
      <SelectContent className="shad-select-content z-[10000] ">
        {locales.map((cur, i) => (
          <SelectItem key={cur + i} value={cur}>
            <div className="flex cursor-pointer items-center z-50 gap-2">
              <p>{t("locale", { locale: cur })}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </LocalSwitcherSelect>
  )
}

export default LocalSwitcher