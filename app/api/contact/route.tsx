import { NextRequest, NextResponse } from "next/server";
import { Email } from "@/components/contact/";
import { smtpEmail, transporter } from "@/lib/nodemailer";
import { render } from "@react-email/components";
import * as z from "zod";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, category, service } = body;

  const emailHtml = render(
    <Email 
      name={name} 
      email={email} 
      message={message} 
      category={category}  
      service={service}    
    />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Form Submission",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(options);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ issues: error.issues }, { status: 422 });
    }

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 }); 
  }
}
