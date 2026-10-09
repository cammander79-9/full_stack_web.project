"use strict";

require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

app.get("/", (req, res) => {
    res.send("CYBER BACKEND IS RUNNING. BOOOM LETS GO");
});

app.post("/test-email", async (req, res) => {

    try {

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Cyber Girl Backend Test",
            text: "Email system is working."
        });

        res.json({
            success: true,
            message: "Test email sent."
        });

    } catch (error) {
        console.error("error sending test email:", error)

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Email failed."
        });

    }

});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
console.log("winning system and you know cyber girl is comeback with alone 14 year old / haha lol")
