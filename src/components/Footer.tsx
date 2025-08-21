import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { socialMedia } from "@/constants";
import { getTranslations } from "next-intl/server";
import SocialMedia from "./SocialMedia";

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

        <SocialMedia />

      </div>
    </footer>
  );
};

export default Footer;
