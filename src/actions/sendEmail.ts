"use server";

import { ZodTypeProp } from "@/app/contact/_components/Schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: ZodTypeProp) => {
  const { name, email, message, subject } = data;

  const emailContent = `
    Subject: ${subject}
    From: ${name} <${email}>
    Message: ${message}
  `;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "itxti909@gmail.com",
      subject: subject,
      text: emailContent,
    });

    return 1;
  } catch (err) {
    
    return 0;
  }
};
