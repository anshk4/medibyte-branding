import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mic, Youtube, ArrowUp, Instagram } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_COVER_IMAGES } from "@/lib/data";
import { PageHeader } from "@/components/site/page-header";
import { PlaceholderImage } from "@/components/site/placeholder-image";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Field Notes — HJ Unicare Blog" },
      {
        name: "description",
        content:
          "Conversations from the operating theatre and beyond — patient guides, hospital spotlights, recovery tips, and industry notes from Gurvinder Jit Singh.",
      },
      { property: "og:title", content: "Field Notes — HJ Unicare Blog" },
      {
        property: "og:description",
        content: "Patient guides, hospital spotlights, recovery tips, and industry notes.",
      },
    ],
  }),
  component: BlogIndex,
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
    month: "short",
    day: "numeric",
  });
}

function BlogIndex() {
  const [category, setCategory] = useState<string>("All");

  const filtered =
    category === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category);

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        section="§ 05 — Field Notes"
        title={
          <>
            Conversations from
            <br />
            <em>the operating theatre</em> and beyond.
          </>
        }
        lead="Patient guides, hospital spotlights, recovery tips, and industry notes — written by Gurvinder Jit Singh and the HJ Unicare team."
      />

      {/* CATEGORY FILTERS + POST GRID */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* filter bar */}
          <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-ink/10">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-[13px] font-medium transition-smooth ${
                  category === cat
                    ? "bg-ink text-paper"
                    : "bg-cream text-muted-foreground hover:bg-ink/10 hover:text-ink border border-ink/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {filtered.map((post) => {
              const Icon = ICON_MAP[post.icon] ?? ArrowUp;
              const cover = post.image ?? BLOG_COVER_IMAGES[post.slug];
              return (
                <Link
                  key={post.slug}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group bg-paper p-7 hover:bg-cream transition-smooth flex flex-col min-h-[320px]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
                      {post.category}
                    </span>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  {cover ? (
                    <div className="aspect-[16/10] mb-6 rounded-sm overflow-hidden bg-cream">
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
                      aspect="aspect-[16/10]"
                      className="mb-6"
                    />
                  )}
                  <h3 className="font-serif text-2xl text-ink leading-snug">{post.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-ink/10">
                    <div className="text-xs text-muted-foreground">
                      <span className="text-ink/70">{post.author}</span>
                      <span className="mx-2">·</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{post.readTime}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No posts in this category yet. Check back soon.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
