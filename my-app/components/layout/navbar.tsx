"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/vcmo", label: "vCMO" },
  { href: "/brand-marketing", label: "Brand Marketing" },
  { href: "/in-film", label: "In-Film" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ecosystem", label: "Ecosystem" },
];

function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn("block aspect-[808/264] bg-current", className)}
      style={{ mask: "url(/wordmark.png) center / contain no-repeat", WebkitMask: "url(/wordmark.png) center / contain no-repeat" }}
    />
  );
}

export function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  // Start matched to the page's hero, so the bar doesn't flash and fade in on load. Only Brand Marketing opens light.
  const [theme, setTheme] = useState<"light" | "dark" | "solid">(pathname === "/brand-marketing" ? "light" : "dark");
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Sections declare data-nav="light|dark". Pages without it get a solid bar that is legible on anything.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      let next: "light" | "dark" | "solid" = "solid";
      document.querySelectorAll<HTMLElement>("[data-nav]").forEach((section) => {
        const box = section.getBoundingClientRect();
        if (box.top <= 40 && box.bottom > 40) next = section.dataset.nav as "light" | "dark";
      });
      setTheme(next);
      setAtTop(y < 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 160);
        last = y;
      }
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  const onDark = open || theme === "dark";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,color,background-color] duration-500 ease-expo",
          hidden && !open && "-translate-y-full",
          onDark ? "text-white" : "text-ink",
          !open && !atTop && (onDark ? "bg-ink/25 backdrop-blur-xl" : "bg-paper/80 backdrop-blur-xl"),
          !open && atTop && theme === "solid" && "bg-paper/90 backdrop-blur-xl",
        )}
      >
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1680px] items-center justify-between px-5 md:h-20 md:px-10">
          <Link href="/" aria-label="Untapd home" onClick={() => setOpen(false)}>
            <Wordmark className="h-6 md:h-7" />
          </Link>

          <ul className="hidden items-center gap-8 text-sm lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-expo hover:bg-[length:100%_1px] aria-[current=page]:bg-[length:100%_1px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(
                "hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-500 sm:block",
                onDark ? "bg-white text-brand" : "bg-brand text-white",
              )}
            >
              Let&rsquo;s build together
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="relative -mr-2 size-11 lg:hidden"
            >
              <span aria-hidden className={cn("absolute left-2.5 h-px w-6 bg-current transition-transform duration-500 ease-expo", open ? "top-1/2 rotate-45" : "top-[18px]")} />
              <span aria-hidden className={cn("absolute left-2.5 h-px w-6 bg-current transition-transform duration-500 ease-expo", open ? "top-1/2 -rotate-45" : "top-[26px]")} />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="site-menu"
        inert={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-end bg-brand px-5 pb-10 text-white transition-[clip-path] duration-700 ease-expo lg:hidden",
          open ? "[clip-path:inset(0)]" : "[clip-path:inset(0_0_100%_0)]",
        )}
      >
        <ul>
          {links.map((link) => (
            <li key={link.href} className="border-t border-white/25">
              <Link href={link.href} onClick={() => setOpen(false)} className="block py-3 font-display text-4xl font-medium tracking-[-0.03em]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#contact" onClick={() => setOpen(false)} className="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-medium text-brand">
          Let&rsquo;s build together
        </Link>
      </div>
    </>
  );
}
