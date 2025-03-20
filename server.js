require("dotenv").config({ path: ".env.local" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5001;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

console.log("EMAIL_USER:", process.env.EMAIL_USER ? "OK" : "❌ ");
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "OK" : "❌ ");
console.log("PORT:", process.env.PORT || "Ingen Port");

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.mail.protonmail.me", 
  port:587, // 465 SSL ( 587 TLS)
  secure: false, // true if  SSL
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Alle felt er påkrevd." });
  }

  const mailOptions = {
    from: email,
    to: EMAIL_USER,
    subject: `Ny melding fra ${name}`,
    text: `
      Navn: ${name}
      E-post: ${email}
      Telefon: ${phone}
      Melding: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Meldingen ble sendt!" });
  } catch (error) {
    console.error("❌ Feil ved sending av e-post:", error);
    res.status(500).json({ error: "Noe gikk galt. Prøv igjen." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveren kjører på http://localhost:${PORT}`);
});
