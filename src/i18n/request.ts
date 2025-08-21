import { getUserLocale } from "../translation/services/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../translation/messages/${locale}.json`)).default, // ✅ Charger les messages correctement
  };
});
