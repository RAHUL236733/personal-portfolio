"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.05 * i, duration: 0.2 },
    }),
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] bg-black/80 backdrop-blur-xl border-b border-green-500/10 shadow-2xl transition-all duration-300">
        <div className="max-w-5xl mx-auto flex h-full items-center justify-between px-4 sm:px-6 md:px-10">
          <a href="#hero" className="text-green-500 font-extrabold text-xl tracking-widest hover:text-green-400 transition-colors">
            BBS
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-slate-300 text-sm font-medium transition-all duration-300 hover:text-green-400"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:border-green-500/30 focus-visible:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu-content"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-4 top-20 z-50 md:hidden rounded-2xl border border-green-500/20 bg-slate-950/95 backdrop-blur-2xl shadow-[0_0_30px_rgba(34,197,94,0.1)] p-4"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li key={l.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <a
                    href={l.href}
                    className="block rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
