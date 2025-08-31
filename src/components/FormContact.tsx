import { useState } from "react";
import { GlowingEffect } from "./ui/glowing-effect";
import { Textarea } from "./ui/textarea";
import { FaLocationArrow } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";
import { sendEmailing } from "@/actions/contact";
import { toast } from "@/hooks/use-toast";
import { LoaderIcon } from "lucide-react";

const FormContact = () => {
  const t = useTranslations("contact");
  const locale = useLocale() as "fr" | "en" | "ar";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await sendEmailing(
        formData.email,
        formData.name,
        formData.message
      );

      if (res?.success) {
        toast({
          title: t("contactForm.successTitle"), 
          description: t("contactForm.successDesc"), 
          variant: "default",
        });
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        throw new Error(t("contactForm.errorDesc"));
      }
    } catch (error) {
      // console.log("=== ", error)
      toast({
        title: t("contactForm.errorTitle"), 
        description: t("contactForm.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="relative flex-1 rounded-2xl border p-2 md:rounded-3xl md:p-3 mt-6" >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="border-0.75 relative flex h-full flex-col gap-6 overflow-hidden rounded-xl p-6 md:p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D] min-h-[320px]"
      dir={locale === "ar" ? "rtl" : "ltr"}>
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            {t("contactForm.title")}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nom et prénom */}
          <input
            type="text"
            name="name"
            placeholder={t("contactForm.fields.name.placeholder")}
            aria-label={t("contactForm.fields.name.label")}
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder={t("contactForm.fields.email.placeholder")}
            aria-label={t("contactForm.fields.email.label")}
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
          />
          {/* Message */}
          <Textarea
            name="message"
            placeholder={t("contactForm.fields.message.placeholder")}
            aria-label={t("contactForm.fields.message.label")}
            rows={5}
            maxLength={1000}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
            style={{ resize: "vertical", maxHeight: "14rem" }} // ~7 rows max
          />
          {/* Bouton */}
          <button
            className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
            type="submit"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* remove px-3 py-1, add px-5 gap-2 */}
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
            >
              {loading ? t("contactForm.sending") : t("contactForm.submit")}
              {loading ? <LoaderIcon className="w-5 h-5" /> : <FaLocationArrow className="w-5 h-5" />} 
            </span>
          </button>

        </form>
      </div>
    </div>
  );
};

export default FormContact;
