"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { CanvasRevealCardContent } from "./CanvasRevealCard";


const Approach = () => {
  const t = useTranslations("approach");
  return (
    <section className="w-full py-20" id="approach">
      <h1 className="heading">
        {/* Notre <span className="text-purple">Démarche</span> */}
        {t.rich("title", {
          s_title: (chunks) => <span className="text-purple">{chunks}</span>,
        })}
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <CanvasRevealCardContent />
      </div>
    </section>
  );
};

export default Approach;
