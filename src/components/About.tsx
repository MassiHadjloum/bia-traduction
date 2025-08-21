import React from "react";
import Image from "next/image";
import { Button } from "./ui/MovingBorders";
import { aboutData } from "@/data";
import { getLocale, getTranslations } from "next-intl/server";

const About = async () => {
  const t = await getTranslations("about");
  const locale = await getLocale() as "fr" | "en" | "ar";
  return (
    <div className="py-20 w-full" id="about">
      <h1 className="heading">
        {t.rich("title", {
          s_title: (chunks) => <span className="text-purple">{chunks}</span>
        })}
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {aboutData.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-center text-center p-6 gap-4">
              <Image
                src={card.thumbnail}
                alt={card.title[locale]}
                width={48}
                height={48}
                className="w-16 h-16"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold">{card.title[locale]}</h2>
                <p className="text-white-100 mt-3 font-semibold">{card.desc[locale]}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default About;
