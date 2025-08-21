import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { socialMedia } from "@/constants";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer")
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t.rich("title", {
            s_title: (chunk) => <span className="text-purple">{chunk}</span>,
          })}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-[450px] ">
         {t("subtitle")}
        </p>
        <a href="mailto:bia.traduction@gmail.com">
          <MagicButton
            title={t("button")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Bia Traduction
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => {
            const Icon = info.img; // récupérer le composant icône
            return (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center 
                       backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 
                       bg-black-200 rounded-lg border dark:border-white-300 border-black-300"
              >
                <Icon size={20} className="text-black dark:text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
