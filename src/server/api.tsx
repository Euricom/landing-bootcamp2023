"use server";

import { getDb } from "@/server/db";
import { ObjectId } from "mongodb";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type Record = {
  _id?: ObjectId;
  id: number;
  action: string;
};

type ContactForm = {
  companyName: string;
  email: string;
  phoneNumber: string;
  shortlist: {
    name: string;
    id: number;
  }[];
};
export async function sendEmail(data: ContactForm) {
  const db = await getDb();
  const collection = db.collection("contactForms");

  // insert in DB
  await collection.insertOne(data);

  // send an email
  const intro =
    "Beste Practice Managers, Klant X heeft zonet een aanvraag ingediend om ";

  const bootcampers = data.shortlist.map((item) => `<li>${item.name}</li>`);
  const msg = {
    to: "thomas.claessens@euri.com", // Change to your recipient
    from: "interview-request@landingbootcamp2023.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    html: `
      <h1>Nieuw Interview Request</h1>
      <p>Beste Practice Managers,<p>
      <p>Er heeft zich een nieuwe inschrijving plaatsgevonden op onze bootcamp landingspagina</p>
      <ul>
      <li>Bedrijf: ${data.companyName}</li>
      <li>Telefoon: ${data.phoneNumber}</li>
      <li>Email: ${data.email}</li>
      <li>Bootcampers:<ul>${[...bootcampers]}</ul></li>
      </ul>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (e) {
    console.error(e);
  }
}
export async function addRecord(data: Record) {
  const db = await getDb();
  const collection = db.collection("records");

  // insert in DB
  await collection.insertOne(data);
}
