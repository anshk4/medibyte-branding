import type { BlogBlock, BlogPost, BlogPostRecord } from "@/lib/types/blog";

type BlogRow = {
  id: string;
  slug: string;
  title: string;
  category: BlogPost["category"];
  excerpt: string;
  published_at: string;
  read_time: string;
  author: string;
  icon: string;
  image_url: string | null;
  content: BlogBlock[];
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
};

export function mapBlogRow(row: BlogRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    excerpt: row.excerpt,
    date: row.published_at,
    readTime: row.read_time,
    author: row.author,
    icon: row.icon,
    image: row.image_url ?? undefined,
    content: row.content,
  };
}

export function mapBlogRecord(row: BlogRow): BlogPostRecord {
  return {
    ...mapBlogRow(row),
    id: row.id,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function blogInputToRow(input: {
  slug: string;
  title: string;
  category: BlogPost["category"];
  excerpt: string;
  publishedAt: string;
  readTime: string;
  author: string;
  icon: string;
  imageUrl?: string;
  content: BlogBlock[];
  status: "draft" | "published";
}) {
  return {
    slug: input.slug,
    title: input.title,
    category: input.category,
    excerpt: input.excerpt,
    published_at: input.publishedAt,
    read_time: input.readTime,
    author: input.author,
    icon: input.icon,
    image_url: input.imageUrl || null,
    content: input.content,
    status: input.status,
  };
}
