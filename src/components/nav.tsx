import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          0mn1<span className="text-accent">.one</span>
        </Link>
        <div className="flex items-center gap-8 text-sm">
          <Link
            href="/#mission"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Mission
          </Link>
          <Link
            href="/#pillars"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Pillars
          </Link>
          <Link
            href="/blog"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#join"
            className="px-4 py-2 bg-accent text-white rounded-full text-sm hover:bg-accent-light transition-colors"
          >
            Join the Mission
          </Link>
        </div>
      </div>
    </nav>
  );
}
