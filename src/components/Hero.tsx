// "use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { getTranslations } from "next-intl/server";

import dynamic from "next/dynamic";
const TextGenerateEffect = dynamic(() => import("./ui/TextGenerateEffect"), { ssr: false });


const Hero = async () => {
  const t = await getTranslations("hero");
  return (
    <>
      <div className="bg-transparent h-16 w-full" />
      <div className="md:pb-20 pb-0 pt-10" id="hero">
        {/* Spotlights */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div>

        {/* Background grid */}
        <div
          className="h-screen w-full dark:bg-black-100 bg-white 
          dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
          absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center 
            dark:bg-black-100 bg-white 
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        {/* Hero content */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h1 className="uppercase tracking-widest text-center text-blue-100  
                text-sm md:text-lg lg:text-xl max-w-80 ">
              {t.rich("title", {
                s_title: (chunks) => <span className="text-purple">{chunks}</span>,
              })}
            </h1>

            <TextGenerateEffect
              words={t("tagline")}
              className="text-center text-[32px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
              {t("subtitle")}
            </p>

            <a href="#contact">
              <MagicButton
                title={t("button")}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
