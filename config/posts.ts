import { PostType } from "@/types";
import { servicesType1, servicesType2 } from "@/config/services";

const posts: PostType[] = [
  {
    id: "1",
    title: "Residential",
    description: "description",
    imageUrl: "/images/blogs/blog-post-1.jpg",
    imageDescription: "This is a caption of image",
    category: "Next.js",
    slug: "Residential",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    content: servicesType1,
  },
  {
    id: "2",
    title: "Commercial",
    description: "description",
    imageUrl: "/images/blogs/blog-post-1.jpg",
    imageDescription: "This is a caption of image",
    category: "Next.js",
    slug: "Commercial",
    tags: ["Next.js", "Css", "TypeScript"],
    content: servicesType2,
  },
];

export default posts;
