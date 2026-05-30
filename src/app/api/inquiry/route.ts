import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey?.trim()) {
      return NextResponse.json(
        { error: "Inquiry email service is not configured." },
        { status: 503 }
      );
    }

    const body = await req.json();

    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "hello@namitasfemmefitness.in",

      // IMPORTANT:
      // Must be your Resend account email during sandbox mode
      to: "namitaaspartan@gmail.com",

      replyTo: email,

      subject: `New Inquiry — ${name}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          background: #0a0a0a;
          color: #f5f0e8;
          padding: 40px;
        ">
          <div style="
            max-width: 600px;
            margin: auto;
            background: #111111;
            border: 1px solid #C9A84C;
            border-radius: 16px;
            padding: 32px;
          ">
            <h1 style="
              color: #C9A84C;
              margin-bottom: 24px;
            ">
              New Inquiry Received
            </h1>

            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div style="
              background: #1a1a1a;
              padding: 16px;
              border-radius: 12px;
              border: 1px solid #333;
              margin-top: 12px;
            ">
              ${message}
            </div>

            <p style="
              margin-top: 32px;
              font-size: 14px;
              color: #999;
            ">
              Sent from Namita's Femme Fitness website.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend inquiry error", error);

      return NextResponse.json(
        {
          error:
            error.message ||
            "Unable to send inquiry email at this time.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry sent successfully.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Inquiry route error", err);

    return NextResponse.json(
      {
        error: "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}
