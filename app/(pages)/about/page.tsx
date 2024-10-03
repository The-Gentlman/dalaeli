import { aboutPageConfig, metaConfig } from "@/config";
import { constructOgImageUri, getUrl } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { v4 } from "uuid";

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getUrl()}/about`,
    title: metaConfig.title,
    description: metaConfig.description,
    siteName: metaConfig.title,
    images: [
      {
        url: constructOgImageUri(
          metaConfig.ogTitle,
          "About",
          metaConfig.tags,
          "/about",
        ),
        width: 1200,
        height: 630,
        alt: metaConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaConfig.ogTitle,
    description: metaConfig.description,
    images: [
      constructOgImageUri(
        metaConfig.ogTitle,
        "About",
        metaConfig.tags,
        "/about",
      ),
    ],
    creator: metaConfig.author.twitterAddress,
  },
};

const AboutPage = async () => {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto max-w-3xl px-6 pt-4">
          <div className="scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
            {aboutPageConfig.title}
          </div>
          <div className="mt-4 text-wrap text-lg leading-8 text-slate-600 dark:text-slate-400">
            {aboutPageConfig.description}
          </div>
          {/* Profile Image */}
          <div className="ring-photo shadow-photo lg:aspect-square relative mx-auto mt-4 flex aspect-[16/9] rounded-2xl text-center shadow-md ring-1 sm:aspect-[2/1] lg:max-w-3xl">
            <Image
              src={aboutPageConfig.profileImageUrl ?? ""}
              alt={aboutPageConfig.profileImageDescription ?? ""}
              fill={true}
              priority={true}
              className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <figcaption className="pt-4 text-sm text-slate-500">
            {aboutPageConfig.profileImageCaption}
          </figcaption>
        </div>
        <div className="relative mx-auto max-w-3xl px-6">
          {aboutPageConfig.content.map((section) => (
            <div id={v4()} className="mt-5">
              <div className="scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
                {section.title}
              </div>
              <div className="mt-4 text-wrap text-lg leading-8 text-slate-600 dark:text-slate-400">
                {section.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
