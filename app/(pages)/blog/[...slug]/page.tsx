import { posts } from "@/config";
import { constructOgImageUri, getUrl } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientPostPage from "@/components/services/ClientPostPage";

interface PostPageParams {
  slug: string[];
}


async function getPostFromParams(params: PostPageParams) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slug === slug);

  return post || null;
}

export async function generateMetadata({
  params,
}: {
  params: PostPageParams;
}): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${getUrl()}/blog/${post.slug}`,
      images: [
        {
          url: constructOgImageUri(
            post.description || post.title,
            post.title,
            post.tags,
            post.slug
          ),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<
  { params: PostPageParams }[]
> {
  return posts.map((post) => ({
    params: { slug: post.slug.split("/") },
  }));
}

// Adjusted PostPage function signature
export default async function PostPage({ params }: { params: PostPageParams }) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const servicesByCategory = post.content.reduce((acc, service) => {
    service.category.forEach((cat) => {
      const categoryName = cat === post.title ? "All" : cat; 
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(service);
    });
    return acc;
  }, {}); 

  if (!servicesByCategory["All"]) {
    servicesByCategory["All"] = post.content; 
  }

  const categories = Object.keys(servicesByCategory).filter(
    (category) => servicesByCategory[category].length > 0
  );

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto relative">
      <div className="relative w-full max-w-4xl px-6 mt-8">
        <div className="flex justify-center relative mx-auto w-full rounded-2xl bg-white shadow-md ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/10 mb-12 min-h-36">
          <h1 className="flex items-center mx-auto p-6 text-3xl font-bold text-center text-slate-900 dark:text-slate-100 ">
            {post.title}
          </h1>
        </div>
        <ClientPostPage servicesByCategory={servicesByCategory} categories={categories} />
      </div>
    </div>
  );
}
