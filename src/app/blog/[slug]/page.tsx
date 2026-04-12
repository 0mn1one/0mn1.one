import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — 0mn1.one`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold mt-12 mb-4 text-foreground"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl font-semibold mt-8 mb-3 text-foreground"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold mt-4 mb-2 text-foreground">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("**") && line.includes("**")) {
      const parts = line.split(/\*\*/);
      elements.push(
        <p
          key={i}
          className="text-foreground/70 leading-relaxed mb-4"
        >
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="text-foreground">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(
        <p key={i} className="text-foreground/70 leading-relaxed mb-4">
          {line}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            0mn1<span className="text-accent">.one</span>
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <Link
              href="/blog"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-accent text-sm font-mono hover:underline"
          >
            ← All posts
          </Link>

          <header className="mt-8 mb-12">
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-accent/70 bg-accent/5 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-foreground/50 text-lg leading-relaxed mb-4">
              {post.description}
            </p>
            <time className="text-sm text-foreground/40 font-mono">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <div className="prose-custom">
            {renderMarkdown(post.content)}
          </div>

          <footer className="mt-16 pt-8 border-t border-foreground/10 text-center">
            <p className="text-foreground/40 text-sm">
              One apple seed gives you countless apples.
            </p>
            <Link
              href="/blog"
              className="inline-block mt-4 text-accent text-sm font-mono hover:underline"
            >
              ← More articles
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}
