"use server"

import { getLocale, getTranslations } from "next-intl/server";
import { Resend } from "resend";

export const sendEmailing = async (email: string, name: string, message: string) => {
  const t = await getTranslations("admin");
  const resend = new Resend(process.env.BIA_RESENd_API_KEY)
  // const resend = new Resend(process.env.RESENd_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: `${t("from")} <onboarding@resend.dev>`,
      to: email,
      subject: 'No reply',
      html: await getConfirmationTemplate({ name }),
    });
    // console.log("errorr ", error)
    await resend.emails.send({
      from: `${t("from")} <onboarding@resend.dev>`,
      // to: "massihadjloum@gmail.com",
      to: "bia.traduction.com",
      replyTo: email,
      subject: "📩 Nouveau message",
      html: await getAdminTemplate({ name, email, message }),
    });


    if (error) {
      console.error(error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
};
const getConfirmationTemplate = async ({ name }: { name: string }) => {
  const t = await getTranslations("email_confirmation"); // 👈 namespace
  const locale = await getLocale();
  const rtlStyles = locale === "ar"
    ? 'direction: rtl; text-align: right;'
    : "";

  return `
  <!DOCTYPE html>
  <html lang="${locale}" ${locale === "ar" ? 'dir="rtl"' : ""}>
    <head>
          <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9fafb;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 8px rgba(0,0,0,0.05);
          ${rtlStyles}
        }
        .header {
          background: #1e3a8a;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 20px;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #1e3a8a;
        }
        .info {
          margin-bottom: 15px;
        }
        .info p {
          margin: 5px 0;
        }
        .message {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 6px;
          white-space: pre-line;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #777;
          padding: 15px;
          background: #f9fafb;
        }
      </style>
    </head>
    <body>
      <div class="container" style={{}} ${locale === "ar" ? "" : ""}>
        <div class="header">
          <h1>${t("subject")}</h1>
          <p>${t("location")}</p>
        </div>
        <div class="content" ${locale === "ar" ? 'dir="rtl"' : ""}>
          <h2>${t("title", { name })}</h2>
          <p>${t("intro")}</p>
          <p>${t("followup")}</p>
          <p>${t("info")}</p>
          <div class="cta">
            <a href="http://bia-traduction.vercel.app/">${t("cta")}</a>
          </div>
        </div>
        <div class="footer" ${locale === "ar" ? 'dir="rtl"' : ""}>
          <p>${t("footer_address")}</p>
          <p>${t("footer_phone")}</p>
          <p>${t("footer_email")}</p>
        </div>
      </div>
    </body>
  </html>`;
};

const getAdminTemplate = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const t = await getTranslations("admin"); // 👈 namespace "admin"
  const locale = await getLocale(); // si tu veux mettre lang dans <html>
  const rtlStyles = locale === "ar"
    ? 'direction: rtl; text-align: right;'
    : "";
  return `
  <!DOCTYPE html>
  <html lang="${locale}">
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9fafb;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 8px rgba(0,0,0,0.05);
          ${rtlStyles}
        }
        .header {
          background: #1e3a8a;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 20px;
        }
        .content {
          padding: 20px;
          ${rtlStyles}
        }
        .content h2 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #1e3a8a;
        }
        .info {
          margin-bottom: 15px;
        }
        .info p {
          margin: 5px 0;
        }
        .message {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 6px;
          white-space: pre-line;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #777;
          padding: 15px;
          background: #f9fafb;
          ${rtlStyles}
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${t("subject")}</h1>
        </div>
        <div class="content">
          <h2>${t("contactDetails")}</h2>
          <div class="info">
            <p><strong>${t("name")} :</strong> ${name}</p>
            <p><strong>${t("email")} :</strong> ${email}</p>
          </div>
          <h2>${t("message")}</h2>
          <div class="message">
            ${message}
          </div>
        </div>
        <div class="footer">
          <p>${t("footer.location")}</p>
          <p>${t("footer.note")}</p>
        </div>
      </div>
    </body>
  </html>
  `;
};

