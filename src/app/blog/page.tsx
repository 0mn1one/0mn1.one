import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Nav } from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — 0mn1.one",
  description:
    "Guides on growing food, clean living, detoxing your home, and building abundance. Knowledge that should be free.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Knowledge
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Grow, Learn, Thrive
          </h1>
          <p className="text-foreground/50 text-lg mb-16">
            Guides on growing food, clean living, and building abundance.
          </p>

          <div className="flex flex-col gap-12">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <time className="text-sm text-foreground/40 font-mono">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-2xl font-semibold mt-2 mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/50 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex gap-2 mt-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-accent/70 bg-accent/5 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
