import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          0mn1<span className="text-accent">.one</span>
        </Link>
        <div className="flex items-center gap-8 text-sm">
          <Link
            href="#mission"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Mission
          </Link>
          <Link
            href="#pillars"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Pillars
          </Link>
          <Link
            href="#join"
            className="px-4 py-2 bg-accent text-white rounded-full text-sm hover:bg-accent-light transition-colors"
          >
            Join the Mission
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm to-background" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-6">
            Values-Aligned Commerce
          </p>
        </div>
        <h1 className="animate-fade-in-delay-1 text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
          Abundance
          <br />
          <span className="text-accent">for All Life</span>
        </h1>
        <p className="animate-fade-in-delay-2 text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          One apple seed gives you countless apples. That is the beauty of
          nature. We are building the infrastructure to bring that abundance to
          every corner of the earth.
        </p>
        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#mission"
            className="px-8 py-4 bg-accent text-white rounded-full text-base font-medium hover:bg-accent-light transition-colors"
          >
            Explore the Vision
          </Link>
          <Link
            href="#pillars"
            className="px-8 py-4 border border-foreground/10 rounded-full text-base font-medium hover:bg-foreground/5 transition-colors"
          >
            See the Pillars
          </Link>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse-slow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/30"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-6">
          The Mission
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-12 leading-tight">
          Take every living being out of survival mode
          <br />
          <span className="text-foreground/40">and into creative mode.</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-12 text-foreground/70 text-lg leading-relaxed">
          <div>
            <p>
              The systems we inherited — food, medicine, education, housing —
              were not designed for our wellbeing. They were designed for
              extraction. Empty calories, uninspiring entertainment, education
              that doesn&apos;t educate, medicine that suppresses instead of
              heals.
            </p>
          </div>
          <div>
            <p>
              We are not here to fight the old. We are here to build the new. A
              world where clean food is abundant, where homes nourish instead of
              poison, where every community has the resources to thrive. Not a
              revolution — a whole other way of being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    title: "Autonomous Farms",
    description:
      "Human-operated, human + machine, and fully autonomous farms worldwide. Gardens everywhere — maintained by both humans and robots. From seed to table, clean and abundant.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path d="M12 22V12M12 12C12 12 8 8 8 5a4 4 0 1 1 8 0c0 3-4 7-4 7Z" />
        <path d="M5 22h14" />
      </svg>
    ),
  },
  {
    title: "Clean Commerce",
    description:
      "Products that heal instead of harm. Hemp homes, clean food, pure water systems, non-toxic everything. Revenue flows to fund the mission — bloodflow of a living system.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Regenerative Systems",
    description:
      "Working alongside nature, not against it. Geodomes, nurseries, vertical gardens, food forests. Systems that give more than they take — designed to compound forever.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
      </svg>
    ),
  },
  {
    title: "Knowledge & Content",
    description:
      "Education that actually educates. Guides on growing food, clean living, detoxing your home and body. Free knowledge that spreads virally because the intention is genuine.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

function Pillars() {
  return (
    <section id="pillars" className="py-32 px-6 bg-warm">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-6">
          The Pillars
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-16">
          How we grow
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl bg-background border border-foreground/5 hover:border-accent/20 transition-colors"
            >
              <div className="text-accent mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ethos() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-2xl sm:text-4xl font-bold tracking-tight leading-snug mb-8">
          &ldquo;The same tools used to do harm
          <br />
          <span className="text-accent">can be used to do good.</span>&rdquo;
        </blockquote>
        <p className="text-foreground/50 text-lg leading-relaxed max-w-xl mx-auto">
          We are not anti-anything. We are pro-life, pro-nature, pro-abundance.
          We generate revenue not as an end, but as the means to equip ourselves
          abundantly for the real work: healing this world.
        </p>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="py-32 px-6 bg-accent text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          This is just the beginning.
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          We are building something that lasts for eons. From civilization to
          civilization. If you feel the pull — if abundance for all life sounds
          like the only work worth doing — you are already part of this.
        </p>
        <a
          href="mailto:hello@0mn1.one"
          className="inline-block px-8 py-4 bg-white text-accent rounded-full text-base font-medium hover:bg-white/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-foreground/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
        <p>
          0mn1<span className="text-accent">.one</span> — For all life.
        </p>
        <p className="font-mono text-xs">
          One apple seed. Countless apples.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Mission />
      <Pillars />
      <Ethos />
      <Join />
      <Footer />
    </>
  );
}
