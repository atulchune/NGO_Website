import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Configure transporter
    // For production, use environment variables:
    // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    });

    const mailOptions = {
      from: `"Vapi Foundation Website" <${process.env.SMTP_USER || "noreply@vapifoundation.org"}>`,
      to: process.env.CONTACT_EMAIL || "info@vapifoundation.org",
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1E3A8A, #3B82F6); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1E3A8A; width: 100px;">Name:</td>
                <td style="padding: 10px 0; color: #334155;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1E3A8A;">Email:</td>
                <td style="padding: 10px 0; color: #334155;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1E3A8A;">Phone:</td>
                <td style="padding: 10px 0; color: #334155;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1E3A8A;">Subject:</td>
                <td style="padding: 10px 0; color: #334155;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="font-weight: bold; color: #1E3A8A; margin-top: 0;">Message:</p>
              <p style="color: #334155; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Only send if SMTP credentials are configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      // Development mode: log to console
      console.log("📧 Contact form submission (email not configured):", {
        name,
        email,
        phone,
        subject,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
