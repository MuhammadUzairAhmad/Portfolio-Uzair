import Link from "next/link";
export default function Home() {
  return (
    <main className="screen-container flex min-h-screen flex-col justify-center gap-8 py-20">
      <p className="text-xs tracking-[.2em] text-muted-foreground">
        MUHAMMAD UZAIR AHMAD / FULL-STACK DEVELOPER
      </p>
      <h1>
        Good ideas.
        <br />
        <em className="font-serif font-normal text-primary">
          Carefully built.
        </em>
      </h1>
      <p className="max-w-lg text-muted-foreground">
        A new portfolio for useful products, thoughtful interfaces, and the
        systems behind them.
      </p>
      <Link
        href="mailto:uzairsb321@gmail.com"
        className="w-fit rounded-md bg-primary px-6 py-3 text-sm text-primary-foreground"
      >
        Let’s talk ↗
      </Link>
    </main>
  );
}
