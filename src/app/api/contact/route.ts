import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

// This route validates and logs incoming contact requests.
// To actually deliver emails, wire in an email provider (Resend, SendGrid,
// Nodemailer + SMTP, etc.) here using environment variables — see
// DEPLOYMENT.md in the project root for step-by-step instructions.
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: send an email notification to ambuskarpornima@gmail.com here.
    console.log("New VastuSakhhi contact enquiry:", {
      name,
      email,
      phone,
      service,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 }
    );
  }
}
