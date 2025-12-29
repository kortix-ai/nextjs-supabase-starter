import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-10">
        <ThemeSwitcher />
      </div>
      <main className="relative flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start z-0">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            AI-friendly Next.js starter
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Ready to build. Read{" "}
            <span className="font-medium text-zinc-950 dark:text-zinc-50">
              .ai-guide.md
            </span>{" "}
            for complete documentation and patterns.
          </p>
        </div>
      </main>
    </div>
  );
}
