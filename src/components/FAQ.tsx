"use client";
import { useLocale, useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FAQ = () => {
  const t = useTranslations("faq");
  const locale = useLocale() as "en" | "fr" | "ar"
  return (
    <section className="w-full" id="faq">
      <h1 className="heading mb-5">
        {/* Notre <span className="text-purple">Démarche</span> */}
        {t.rich("title", {
          s_title: (chunks) => <span className="text-purple">{chunks}</span>,
        })}
      </h1>
      {/* remove bg-white dark:bg-black */}
      <Accordion type="single" collapsible className="w-full" 
        >
        {t.raw("items").map((item: any, index: number) => (
          <AccordionItem key={index} value={`faq-${index}`} 
          dir={locale === "ar" ? "rtl" : "ltr"}>
            <AccordionTrigger className="text-lg font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
