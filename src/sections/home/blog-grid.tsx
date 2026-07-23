import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS, BLOG_COVER_IMAGES } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeBlogGrid() {
  const posts = BLOG_POSTS.slice(0, 4);

  return (
    <section className="bg-primary text-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel dark>§ Insights</SectionLabel>
            <SectionTitle dark className="mt-6">
              Latest news &amp; stories.
            </SectionTitle>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-paper border-b border-paper/30 hover:border-paper pb-1 transition-smooth"
          >
            View all articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => {
            const cover = post.image ?? BLOG_COVER_IMAGES[post.slug];
            return (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group bg-cream border border-ink/10 overflow-hidden hover:bg-paper transition-smooth flex flex-col"
              >
                <div className="aspect-[16/10] bg-paper overflow-hidden">
                  {cover && (
                    <img
                      src={cover}
                      alt={post.title}
                      className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent mb-3">
                  {post.category}
                </div>
                <h3 className="font-serif text-lg text-paper leading-tight mb-2 flex-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                  <span>·</span>
                  {post.readTime}
                </div>
              </div>
            </Link>
          );
          })}
        </div>
      </div>
    </section>
  );
}
