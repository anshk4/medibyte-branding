import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, Mic, Youtube, ArrowUp, Instagram } from "lucide-react";
import { BLOG_POSTS, GURVINDER_IMAGES, BLOG_COVER_IMAGES, type BlogBlock } from "@/lib/data";
import { PlaceholderImage } from "@/components/site/placeholder-image";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    return BLOG_POSTS.find((p) => p.slug === params.slug) ?? null;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — HJ Unicare Blog` : "Blog — HJ Unicare" },
      { name: "description", content: loaderData?.excerpt ?? "HJ Unicare Blog — Field Notes" },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.title} — HJ Unicare` : "HJ Unicare Blog",
      },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
    ],
  }),
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center bg-paper">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-ink">Post not found</h1>
        <p className="mt-4 text-muted-foreground">This article doesn't exist or has been moved.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-primary transition-smooth"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    </div>
  ),
});

const ICON_MAP: Record<string, typeof Mic> = {
  Podcast: Mic,
  YouTube: Youtube,
  Essay: ArrowUp,
  Instagram: Instagram,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className="text-lg text-ink/85 leading-relaxed text-pretty">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={i} className="mt-12 mb-4 font-serif text-3xl text-ink leading-tight">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={i} className="space-y-3 my-6">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-4 text-ink/85 leading-relaxed">
              <span className="font-mono text-[11px] text-accent shrink-0 mt-1.5">
                {String(j + 1).padStart(2, "0")}
              </span>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-2 border-primary pl-6 font-serif text-2xl text-ink leading-[1.3] italic text-pretty"
        >
          {block.text}
        </blockquote>
      );
  }
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const cover = post ? (post.image ?? BLOG_COVER_IMAGES[post.slug]) : undefined;

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-paper">
        <div className="text-center">
          <h1 className="font-serif text-5xl text-ink">Post not found</h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-primary transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const Icon = ICON_MAP[post.icon] ?? ArrowUp;
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3);
  const fallback = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : [...related, ...fallback].slice(0, 3);

  return (
    <div className="bg-background text-foreground">
      {/* ARTICLE HEADER */}
      <article>
        <section className="bg-paper pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-ink/10">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-ink transition-smooth mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to Field Notes
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
                {post.category}
              </span>
              <span className="text-muted-foreground">·</span>
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground">{post.icon}</span>
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl text-ink leading-[0.98] text-balance">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-pretty">
              {post.excerpt}
            </p>

            {/* author byline */}
            <div className="mt-10 pt-8 border-t border-ink/10 flex items-center justify-between">
              <Link to="/about" className="group flex items-center gap-4">
                <img
                  src={GURVINDER_IMAGES.author}
                  alt="Gurvinder Jit Singh — author headshot"
                  className="h-12 w-12 rounded-full object-cover border border-ink/10"
                  loading="lazy"
                />
                <div>
                  <div className="font-medium text-ink group-hover:text-primary transition-smooth">
                    {post.author}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Co-Founder & COO, HJ Unicare
                  </div>
                </div>
              </Link>
              <div className="text-right text-xs font-mono text-muted-foreground">
                <div>{formatDate(post.date)}</div>
                <div className="mt-1">{post.readTime}</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        <section className="bg-paper">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 py-10">
            {cover ? (
              <div className="aspect-[16/9] w-full rounded-sm overflow-hidden bg-cream shadow-portrait">
                <img
                  src={cover}
                  alt={`Featured image for: ${post.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <PlaceholderImage
                alt={`Featured image for: ${post.title}`}
                aspect="aspect-[16/9]"
                className="shadow-portrait"
              />
            )}
          </div>
        </section>

        {/* ARTICLE BODY */}
        <section className="bg-paper pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-6">
            {post.content.map(renderBlock)}
          </div>
        </section>

        {/* AUTHOR CTA BOX */}
        <section className="bg-cream py-16 border-y border-ink/10">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <div className="bg-paper border border-ink/10 p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6">
              <img
                src={GURVINDER_IMAGES.author}
                alt="Gurvinder Jit Singh — author headshot"
                className="h-16 w-16 rounded-full object-cover border border-ink/10 shrink-0"
                loading="lazy"
              />
              <div className="flex-1 text-center sm:text-left">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Written by
                </div>
                <div className="font-serif text-2xl text-ink mt-1">{post.author}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Co-Founder & COO of HJ Unicare. Building the calm, careful infrastructure behind
                  one of India's most trusted medical-travel companies.
                </p>
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-primary transition-smooth shrink-0"
              >
                Read more about Gurvinder
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* RELATED POSTS */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl text-ink">Related field notes</h2>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-1 transition-smooth"
            >
              All posts
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {relatedPosts.map((rp) => {
              const RpIcon = ICON_MAP[rp.icon] ?? ArrowUp;
              return (
                <Link
                  key={rp.slug}
                  to="/blog/$slug"
                  params={{ slug: rp.slug }}
                  className="group bg-paper p-6 hover:bg-cream transition-smooth flex flex-col min-h-[240px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
                      {rp.category}
                    </span>
                    <RpIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-xl text-ink leading-snug">{rp.title}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-ink/10 mt-4">
                    <span>{formatDate(rp.date)}</span>
                    <span>{rp.readTime}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
