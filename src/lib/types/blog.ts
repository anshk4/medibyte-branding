export type BlogCategory =
  | "Patient Guides"
  | "Hospital Spotlights"
  | "Recovery Tips"
  | "Industry Notes";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  icon: string;
  image?: string;
  content: BlogBlock[];
};

export type BlogPostRecord = BlogPost & {
  id: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
};

export const BLOG_CATEGORIES = [
  "All",
  "Patient Guides",
  "Hospital Spotlights",
  "Recovery Tips",
  "Industry Notes",
] as const;

export const BLOG_ICONS = ["Essay", "Podcast", "YouTube", "Instagram"] as const;
