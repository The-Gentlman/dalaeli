/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server"
import { Email } from "@/components/contact/"
import { smtpEmail, transporter } from "@/lib/nodemailer"
import { render } from "@react-email/components"
import * as z from "zod"

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()
  const { name, email, message, categoty, service } = body  // Include category and service

  const emailHtml = render(
    <Email name={name} email={email} message={message} category={categoty} service={service} />
  )

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Form Submission",
    html: emailHtml,
  };

  try {
    const response = await transporter.sendMail(options)
    return new Response(null, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ issues: error.issues }, { status: 422 });
    }

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 }); 
  }
}
