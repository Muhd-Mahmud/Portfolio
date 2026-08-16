import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
  { to: "/lab", label: "Lab" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "px-4 py-2 rounded-full text-sm font-semibold transition",
    isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
  ].join(" ");

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "block rounded-xl px-4 py-3 text-base font-semibold transition",
    isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
  ].join(" ");

export function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-30 w-full">
      {/* Desktop pill nav */}
      <nav className="mx-auto hidden max-w-6xl items-center justify-center gap-4 px-6 py-4 md:flex">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-2 py-1 backdrop-blur">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile: floating circular hamburger, top-right */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="fixed right-5 top-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white/90 backdrop-blur transition hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open && (
          <button
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          />
        )}

        {open && (
          <div
            id="mobile-nav"
            className="fixed right-4 top-20 z-40 w-56 rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur"
          >
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
