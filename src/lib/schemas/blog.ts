import { z } from "zod";

const blogBlockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("paragraph"), text: z.string().min(1) }),
  z.object({ type: z.literal("heading"), text: z.string().min(1) }),
  z.object({ type: z.literal("list"), items: z.array(z.string().min(1)).min(1) }),
  z.object({ type: z.literal("quote"), text: z.string().min(1) }),
]);

export const blogPostInputSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1)
    .max(200)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase kebab-case slug"),
  title: z.string().trim().min(1).max(500),
  category: z.enum([
    "Patient Guides",
    "Hospital Spotlights",
    "Recovery Tips",
    "Industry Notes",
  ]),
  excerpt: z.string().trim().min(1).max(2000),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  readTime: z.string().trim().min(1).max(50),
  author: z.string().trim().min(1).max(200),
  icon: z.string().trim().min(1).max(50),
  imageUrl: z.string().url().optional().or(z.literal("")),
  content: z.array(blogBlockSchema).min(1),
  status: z.enum(["draft", "published"]),
});

export const adminBlogMutationSchema = blogPostInputSchema.extend({
  accessToken: z.string().min(1),
});

export const adminBlogDeleteSchema = z.object({
  slug: z.string().min(1),
  accessToken: z.string().min(1),
});

export const adminBlogListSchema = z.object({
  accessToken: z.string().min(1),
  includeDrafts: z.boolean().optional(),
});
