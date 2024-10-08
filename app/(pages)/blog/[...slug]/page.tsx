import { posts } from "@/config";
import { constructOgImageUri, getUrl } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ClientPostPage from "@/components/services/ClientPostPage";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
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
            post.description ? post.description : post.title,
            post.title,
            post.tags,
            post.slug,
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
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slug.split("/"),
  }));
}
export default async function PostPage({ params }: PostPageProps) {
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

  // Get category names, excluding empty categories
  const categories = Object.keys(servicesByCategory).filter(
    (category) => servicesByCategory[category].length > 0
  );

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto relative">
      <div className="relative w-full max-w-4xl px-6 mt-8">
        <div className="relative mx-auto w-full rounded-2xl bg-white shadow-md ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/10 mb-12">
          <h1 className="mx-auto p-6 text-3xl font-bold text-center text-slate-900 dark:text-slate-100">
            {post.title}
          </h1>
          <div className="relative w-full h-64 mb-4">
            <Image
              src={post.imageUrl}
              alt={post.imageDescription}
              fill={true}
              priority={true}
              className="object-cover transition-all duration-300 ease-in-out rounded-2xl hover:rounded-lg"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-400 dark:text-slate-500 text-center">
            {post.imageDescription}
          </figcaption>
        </div>

        {/* Pass filtered services to client-side component */}
        <ClientPostPage servicesByCategory={servicesByCategory} categories={categories} />
      </div>
    </div>
  );
}
