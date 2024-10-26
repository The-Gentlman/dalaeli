import { ContactForm } from "@/components/contact";
import { metaConfig } from "@/config";
import ContactPageConfig from "@/config/contact";
import { constructOgImageUri, getUrl } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";
import { v4 as uuidv4 } from 'uuid';

export const metadata: Metadata = {
  title: "Contact us",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getUrl()}/contact`,
    title: metaConfig.title,
    description: metaConfig.description,
    siteName: metaConfig.title,
    images: [
      {
        url: constructOgImageUri(
          metaConfig.ogTitle,
          "Contact",
          metaConfig.tags,
          "/contact",
        ),
        width: 1200,
        height: 630,
        alt: metaConfig.title,
      },
    ],
  }
};

const ContactPage = () => {
  return (
    <>
      <div className="relative mx-auto max-w-3xl px-6">
        {ContactPageConfig.content.map((section) => (
          <div key={uuidv4()} className="mt-5">
            <div className="scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
              {section.title}
            </div>
            <div className="mt-4 text-wrap text-lg leading-8 text-slate-600 dark:text-slate-400">
              {section.description}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto max-w-4xl px-6 py-4">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
