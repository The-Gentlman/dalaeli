import "@/styles/tailwind.css";
import { MainWrapper } from "@/components/main";
import { metaConfig } from "@/config";
import { cn, constructOgImageUri, getUrl } from "@/lib/utils";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

interface RootLayoutProps {
  children: React.ReactNode;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: metaConfig.title,
    template: "%s | IQTEL",
  },
  generator: metaConfig.author.name,
  applicationName: metaConfig.title,
  description: metaConfig.description,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Iqtel",
    "radio",
    "australia",
    "au",
    "fibber",
    "fiber",
    "copper",
    "fix",
    "repair",
    "Engineer",
    "starlink",
    "iqtel",
    "telecommunications",
    "company",
    "telecom",
    "customers",
    "support",
    "commercial",
    "residential",
    "Telstra",
    "Optus",
    "TPG",
    "iiNET",
    "Vodafone",
    "Aussie",
    "Dodo",
    "Gigacomm",
    "Belong",
    "Internode",
    "Cabling",
    "Internet",
    "NBN",
    "MDF",
    "Network",
    "WIFI",
    "CCTV",
    "camera",
    "NTD",
    "NCD",
    "Bridging",
    "Fibre",
    "Fobot",
    "VoIP",
    "PABX",
  ],
  authors: [
    {
      name: metaConfig.author.name,
    },
  ],
  creator: metaConfig.author.name,
  publisher: metaConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(getUrl()),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: ["/favicons/favicon-32x32.png"],
    apple: [
      { url: "/favicons/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicons/apple-icon-precomposed.png",
      },
    ],
  },

  manifest: `${getUrl()}/favicons/manifest.json`,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: getUrl(),
    title: metaConfig.title,
    description: metaConfig.description,
    siteName: metaConfig.title,
    images: [
      {
        url: constructOgImageUri(
          metaConfig.ogTitle,
          "Home",
          metaConfig.tags,
          "/",
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
      constructOgImageUri(metaConfig.ogTitle, "Home", metaConfig.tags, "/"),
    ],
  },
  appleWebApp: {
    capable: true,
    title: metaConfig.title,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="layout" suppressHydrationWarning>
      <body
        className={cn(
          "layout h-full scroll-smooth",
          fontSans.variable,
          calSans.variable,
        )}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <MainWrapper>
          {children}
          <Toaster position="top-center" />
          <VercelAnalytics />
        </MainWrapper>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
