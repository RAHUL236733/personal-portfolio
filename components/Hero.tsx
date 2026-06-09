"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative flex flex-col items-center pt-28 pb-8 md:pt-36 md:pb-12 px-6 sm:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to Opportunities
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Beera <br className="sm:hidden" />
            <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">Bhavani Sankar</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-6">
            AI/ML Engineer
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems at the intersection of deep learning, LLMs, and production-grade web applications.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-green-500/50 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            Contact Me
          </a>
          <a
            href="/CoverLetter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-green-500/50 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            Cover Letter
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-green-500/50 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
