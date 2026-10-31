import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pages = [
  { href: "/vcmo", label: "vCMO" },
  { href: "/brand-marketing", label: "Brand Marketing" },
  { href: "/in-film", label: "In-Film" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ecosystem", label: "Ecosystem" },
];

const contacts = [
  { href: "mailto:mahek@thinkuntapd.com", label: "mahek@thinkuntapd.com" },
  { href: "tel:+917208198797", label: "+91 72081 98797" },
  { href: "https://www.thinkuntapd.com", label: "www.thinkuntapd.com" },
];

export function Footer() {
  return (
    <footer id="contact" data-nav="dark" className="scroll-mt-0 overflow-clip bg-ink pt-20 text-white md:pt-32">
      <div className="mx-auto max-w-[1680px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-5 text-xs font-medium tracking-wide text-white/75">Connect</p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,5.5rem)] font-medium leading-[1] tracking-[-0.04em]">Let&rsquo;s build together.</h2>
            <a href="mailto:mahek@thinkuntapd.com" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-ink">
              Start the conversation
              <span aria-hidden className="grid size-9 place-items-center rounded-full bg-brand text-white transition-transform duration-500 ease-expo group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          </div>
          <nav aria-label="Footer" className="md:col-span-2 md:col-start-8">
            <p className="mb-4 text-xs font-medium tracking-wide text-white/75">Explore</p>
            <ul className="space-y-2 text-sm">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="underline-offset-4 hover:underline">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-medium tracking-wide text-white/75">Contact</p>
            <ul className="space-y-2 text-sm">
              {contacts.map((contact) => (
                <li key={contact.href}>
                  <a href={contact.href} className="underline-offset-4 hover:underline">
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex justify-between border-t border-white/20 pt-4 text-xs text-white/70 md:mt-32">
          <p>© {new Date().getFullYear()} Untapd. All rights reserved.</p>
          <p>@thinkuntapd</p>
        </div>
      </div>

      <p aria-hidden className="mt-4 select-none whitespace-nowrap text-center font-display text-[17.2vw] font-medium leading-[0.86] tracking-[-0.055em]">
        Think <span className="font-serif font-normal italic tracking-[-0.03em]">Beyond.</span>
      </p>
    </footer>
  );
}
