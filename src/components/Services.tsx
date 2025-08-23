import { GlowingEffect } from "./ui/glowing-effect";
import { services } from "@/data";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Services() {
  const local = await getLocale() as "fr" | "en" | "ar";
  const t = await getTranslations("services");
  return (
    <section id="services" className="md:py-20 py-10">
      <h1 className="heading">
        {t.rich("title", {
          s_title: (chunks) => <span className="text-purple">{chunks}</span>,
        })}
      </h1>

      {/* Intro */}
      <div className="max-w-full pt-14 pb-6 px-4 md:px-8 lg:px-10 flex justify-center"
        dir={local === "ar" ? "rtl" : "ltr"}>
        <p className="text-neutral-700 max-w-3xl dark:text-neutral-300 text-center text-lg md:text-base">
          {t("description")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        dir={local === "ar" ? "rtl" : "ltr"}>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="relative rounded-2xl border p-2 md:rounded-3xl md:p-3"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] min-h-[220px]">
                <div className="flex flex-col items-start gap-3">
                  <Icon className="w-12 h-12 text-indigo-600" />
                  <h2 className="font-sans text-xl md:text-2xl font-semibold text-black dark:text-purple">
                    {service.title[local]}
                  </h2>
                  <p className="text-start text-gray-700 dark:text-white-100 mt-2 font-medium">
                    {service.desc[local]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
