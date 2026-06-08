"use client";
import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages",       skills: ["Python", "JavaScript", "Java", "SQL"] },
  { title: "Frontend",        skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend & APIs",  skills: ["FastAPI", "Django", "REST APIs", "Django ORM"] },
  { title: "AI / ML",         skills: ["Scikit-Learn", "TensorFlow", "EfficientNet", "Deep Learning", "CNN", "OpenAI API"] },
  { title: "Generative AI",   skills: ["Prompt Engineering", "GPT Embeddings", "RAG", "LLM Integration", "Vector Search"] },
  { title: "Databases",       skills: ["MySQL", "SQLite"] },
  { title: "Tools",           skills: ["Git", "GitHub", "VS Code"] },
  { title: "Core CS",         skills: ["DSA", "OOP", "DBMS", "OS"] },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-12 md:py-16 px-6 sm:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-[3px] text-green-500 font-semibold mb-2">Skills</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Tech Stack</h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Technologies I work with across the full development lifecycle.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillGroups.map((g) => (
          <motion.div
            key={g.title}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="h-full bg-white/[0.03] backdrop-blur-md border border-green-500/10 rounded-xl p-4 transition-all duration-300 hover:border-green-500/40 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:bg-white/[0.05] flex flex-col justify-start items-start group"
          >
            <p className="text-[11px] uppercase tracking-widest text-green-500 font-semibold mb-3 group-hover:text-green-400 transition-colors w-full text-left">
              {g.title}
            </p>
            <div className="flex flex-wrap gap-2 w-full justify-start items-start">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="bg-green-500/5 backdrop-blur-sm border border-green-500/20 text-slate-200 text-[11px] px-2.5 py-1 rounded-full transition-colors group-hover:border-green-500/40"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
