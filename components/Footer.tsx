"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-slate-400 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-300 font-medium">© 2025 Bhavani Sankar Beera. All rights reserved.</p>
          <p className="text-xs text-slate-500 mt-2">Built with <span className="text-green-500/80">Next.js 14</span> &amp; <span className="text-green-500/80">Tailwind CSS</span></p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">Open to Opportunities</p>

          <div className="flex items-center justify-center md:justify-end gap-5">
            <a
              href="https://github.com/Rahul236733"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-green-400 transition-all hover:scale-110"
              title="GitHub"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.21 9.14 7.67 10.61.56.1.76-.24.76-.53 0-.26-.01-1.12-.01-2.03-3.12.68-3.78-.76-4.02-1.46-.14-.36-.74-1.46-1.26-1.76-.43-.26-1.05-.9-.01-.92 0 0 .84-.06 1.44.8.85 1.24 2.22.88 2.76.67.09-.52.33-.88.6-1.08-2.49-.28-5.11-1.24-5.11-5.52 0-1.22.43-2.22 1.14-3.01-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.15a10.6 10.6 0 0 1 2.78-.37c.94.01 1.89.12 2.78.37 2.12-1.46 3.05-1.15 3.05-1.15.61 1.53.22 2.66.11 2.94.71.79 1.14 1.79 1.14 3.01 0 4.29-2.63 5.24-5.13 5.52.34.29.64.86.64 1.74 0 1.26-.01 2.28-.01 2.6 0 .29.2.64.77.53 4.46-1.47 7.67-5.66 7.67-10.61C23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/bhavani-sankar-beera/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-green-400 transition-all hover:scale-110"
              title="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.8V24H19V16.2c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H8z" />
              </svg>
            </a>

            <a
              href="mailto:beerarahul2@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-green-400 transition-all hover:scale-110"
              title="Email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6.5l-10 7L2 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
