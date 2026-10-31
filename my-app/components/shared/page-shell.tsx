import { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "./motion-provider";

/** Everything every page has around its content: skip link, nav, main landmark, footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </MotionProvider>
  );
}
