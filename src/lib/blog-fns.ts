import { createServerFn } from "@tanstack/react-start";

import { BLOG_POSTS } from "@/lib/data";
import { blogInputToRow, mapBlogRecord, mapBlogRow } from "@/lib/blog/mappers";
import {
  adminBlogDeleteSchema,
  adminBlogListSchema,
  adminBlogMutationSchema,
} from "@/lib/schemas/blog";
import { getSupabaseAdmin, verifyAdminAccess } from "@/lib/supabase/server";
import type { BlogPost, BlogPostRecord } from "@/lib/types/blog";

export const getPublishedBlogPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<BlogPost[]> => {
    const supabase = getSupabaseAdmin();
    if (!supabase) return BLOG_POSTS;

    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error || !data?.length) return BLOG_POSTS;
    return data.map((row) => mapBlogRow(row));
  },
);

export const getBlogPostBySlug = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<BlogPost | null> => {
    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
    }

    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error || !data) {
      return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
    }

    return mapBlogRow(data);
  });

export const listAdminBlogPosts = createServerFn({ method: "POST" })
  .validator(adminBlogListSchema)
  .handler(async ({ data }): Promise<BlogPostRecord[]> => {
    const auth = await verifyAdminAccess(data.accessToken);
    if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    let query = supabase.from("blog_posts").select("*").order("published_at", {
      ascending: false,
    });

    if (!data.includeDrafts) {
      query = query.eq("status", "published");
    }

    const { data: rows, error } = await query;
    if (error) throw new Error(error.message);
    return (rows ?? []).map((row) => mapBlogRecord(row));
  });

export const getAdminBlogPost = createServerFn({ method: "POST" })
  .validator((input: { slug: string; accessToken: string }) => input)
  .handler(async ({ data }): Promise<BlogPostRecord | null> => {
    const auth = await verifyAdminAccess(data.accessToken);
    if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    const { data: row, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", data.slug)
      .maybeSingle();

    if (error) throw new Error(error.message);
    return row ? mapBlogRecord(row) : null;
  });

export const upsertAdminBlogPost = createServerFn({ method: "POST" })
  .validator(adminBlogMutationSchema)
  .handler(async ({ data }): Promise<BlogPostRecord> => {
    const auth = await verifyAdminAccess(data.accessToken);
    if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    const row = blogInputToRow({
      slug: data.slug,
      title: data.title,
      category: data.category,
      excerpt: data.excerpt,
      publishedAt: data.publishedAt,
      readTime: data.readTime,
      author: data.author,
      icon: data.icon,
      imageUrl: data.imageUrl,
      content: data.content,
      status: data.status,
    });

    const { data: saved, error } = await supabase
      .from("blog_posts")
      .upsert(row, { onConflict: "slug" })
      .select("*")
      .single();

    if (error) throw new Error(error.message);
    return mapBlogRecord(saved);
  });

export const deleteAdminBlogPost = createServerFn({ method: "POST" })
  .validator(adminBlogDeleteSchema)
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const auth = await verifyAdminAccess(data.accessToken);
    if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    const { error } = await supabase.from("blog_posts").delete().eq("slug", data.slug);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const seedBlogFromStatic = createServerFn({ method: "POST" })
  .validator((input: { accessToken: string }) => input)
  .handler(async ({ data }): Promise<{ imported: number }> => {
    const auth = await verifyAdminAccess(data.accessToken);
    if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    const rows = BLOG_POSTS.map((post) =>
      blogInputToRow({
        slug: post.slug,
        title: post.title,
        category: post.category,
        excerpt: post.excerpt,
        publishedAt: post.date,
        readTime: post.readTime,
        author: post.author,
        icon: post.icon,
        imageUrl: post.image,
        content: post.content,
        status: "published",
      }),
    );

    const { error } = await supabase.from("blog_posts").upsert(rows, { onConflict: "slug" });
    if (error) throw new Error(error.message);
    return { imported: rows.length };
  });
