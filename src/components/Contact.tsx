"use client";
import { Mail, Phone, MapPin, Clock, Facebook } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { socialMedia } from "@/constants";
import FormContact from "./FormContact";
import { useLocale, useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  const locale = useLocale() as "fr" | "en" | "ar";
  return (
    <section id="contact" className="py-20">
      <h1 className="heading">
        {t.rich("title", {
          s_title: (chunks) => <span className="text-purple">{chunks}</span>,
        })}
      </h1>

      <div className="grid lg:grid-cols-2 pt-14  gap-10 ">
        {/* Google Map */}
        {/* <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"> */}
        <div className="relative flex-1 rounded-2xl min-h-[400px] border p-1 md:rounded-3xl md:p-2 h-full ">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.330838798634!2d4.1767235!3d36.7705727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dbbbe87045e59%3A0xdc74a4718add37a2!2sPolyclinique%20Tiqoba%C9%99in%20Wagnun!5e0!3m2!1sfr!2sdz!4v1692200000000"

              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Heures d’ouverture */}
        <div className="relative flex-1 rounded-2xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] min-h-[220px]">
            <div className="flex flex-col items-start gap-3" dir={locale === "ar" ? "rtl" : "ltr"}>
              {/* Heures d'ouverture */}
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                {t("contactInfo.openingHours")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("contactInfo.openingDays.week")}</strong> {t("contactInfo.openingDays.hours")} <br />
                <strong>{t("contactInfo.openingDays.weekend")}</strong> {t("contactInfo.openingDays.closed")}
              </p>

              {/* Adresse */}
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                {t("contactInfo.addressTitle")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {t("contactInfo.addressValue")}
              </p>

              {/* Téléphone */}
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-600" />
                {t("contactInfo.phoneTitle")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300" dir="ltr" >
                {t("contactInfo.phoneValue")}
              </p>

              {/* Email */}
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                {t("contactInfo.emailTitle")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {t("contactInfo.emailValue")}
              </p>

              {/* Réseaux sociaux */}
              <h2 className="text-xl font-semibold mb-2">
                {t("contactInfo.socialTitle")}
              </h2>
              <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((info) => {
                  const Icon = info.img;
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

          </div>
        </div>
      </div>
      <FormContact />
    </section>
  );
}

export default Contact;
