import { metaConfig, posts } from "@/config";
import {
  constructOgImageUri,
  formatDate,
  getUrl,
  shimmer,
  toBase64,
} from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

export const metadata: Metadata = {
  title: "IQTEL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getUrl()}/blog`,
    title: metaConfig.title,
    description: metaConfig.description,
    siteName: metaConfig.title,
    images: [
      {
        url: constructOgImageUri(
          metaConfig.ogTitle,
          "Blog",
          metaConfig.tags,
          "/blog",
        ),
        width: 1200,
        height: 630,
        alt: metaConfig.title,
      },
    ],
  },
};
const BlogPage = async () => {
  return (
    <>
      <div className="mx-auto max-w-5xl h-[80lvh] place-content-center p-0">
        <div className="relative mx-auto max-w-4xl px-6">
          <span className="mb-4 block text-balance text-center text-lg leading-8 text-slate-600 dark:text-slate-500 "></span>
          <div className="flex flex-wrap gap-4 justify-center ">
            {posts.map((post) => (
              <div
                key={v4()}
                className="relative w-full max-w-xs rounded-2xl bg-white/20 p-2.5 shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 dark:bg-white/5 dark:shadow-white/5 dark:ring-white/10"
              >
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 opacity-[0.15] blur-lg dark:from-sky-500 dark:to-sky-600"></div>
                <div className="relative max-w-full rounded-[0.62rem] bg-white shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 hover:bg-gray-50 dark:bg-slate-800 dark:shadow-white/5 dark:ring-white/10 dark:hover:bg-slate-900/50">
                  <div className="group mx-auto p-5">
                    <Link
                      href={`blog/${post.slug}`}
                      className="relative isolate flex flex-col gap-8 "
                    >
                      <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                        <Image
                          src={post.imageUrl}
                          alt={post.imageDescription}
                          fill={true}
                          priority={true}
                          placeholder="blur"
                          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(256, 256)
                          )}`}
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="flex justify-center items-baseline gap-4">
                        <div className="group flex justify-center relative max-w-xl min-h-28 m-0">
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-slate-400">
                            {post.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
