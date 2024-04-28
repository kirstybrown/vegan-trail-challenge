import nodemailer from "nodemailer";
import SMPTransport from "nodemailer-smtp-transport";

export const smtpEmail = process.env.GOOGLE_EMAIL;
export const smtpPassword = process.env.GOOGLE_PASSWORD;

export const transporter = nodemailer.createTransport(
  SMPTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  })
);
