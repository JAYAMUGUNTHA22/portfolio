require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio";
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const YOUR_EMAIL = process.env.YOUR_EMAIL || "ompjamun@gmail.com";

// Contact schema
const contactSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    message: String,
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", contactSchema);

// Create transporter (use YOUR_EMAIL for receiving; EMAIL_USER can be same or a no-reply)
const getTransporter = () => {
  if (!EMAIL_USER || !EMAIL_PASS) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
};

app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    if (!email || !email.trim()) {
      return res.status(400).json({ error: "Email is required" });
    }

    const doc = { firstName: firstName?.trim(), lastName: lastName?.trim(), email: email.trim(), message: message?.trim() || "" };

    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI);
      await Contact.create(doc);
    }

    const transporter = getTransporter();
    if (transporter && YOUR_EMAIL) {
      await transporter.sendMail({
        from: EMAIL_USER,
        to: YOUR_EMAIL,
        subject: `Portfolio contact from ${doc.firstName || ""} ${doc.lastName || ""} (${doc.email})`.trim(),
        text: `Name: ${doc.firstName || ""} ${doc.lastName || ""}\nEmail: ${doc.email}\n\nMessage:\n${doc.message}`,
        html: `<p><strong>Name:</strong> ${doc.firstName || ""} ${doc.lastName || ""}</p><p><strong>Email:</strong> ${doc.email}</p><p><strong>Message:</strong></p><p>${(doc.message || "").replace(/\n/g, "<br>")}</p>`,
      });
    }

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

// Optional: health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
