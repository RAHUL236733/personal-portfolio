"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "8.4", label: "CGPA / 10.0" },
  { num: "1",   label: "Published Paper" },
  { num: "4+",  label: "AI Projects Built" },
  { num: "4+",  label: "Certifications" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="about" className="pt-10 pb-12 md:pt-12 md:pb-16 px-6 sm:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants}>
          <p className="text-xs uppercase tracking-[3px] text-green-500 font-semibold mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Who I Am</h2>
          <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed max-w-3xl">
            I am an AI/ML engineer specializing in machine learning models and data-driven solutions, focused on solving real-world problems through intelligent systems.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {stats.map((s, i) => (
            <motion.div 
              key={s.label} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all hover:border-green-500/30 hover:bg-white/10"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-green-500 mb-2 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">{s.num}</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h3 className="text-xs uppercase tracking-[2px] text-green-500 font-semibold mb-4">Background</h3>
          <div className="space-y-4">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              I am a final-year B.Tech (AI & ML) student at GMR Institute of Technology with an 8.4 CGPA.
              I build production-quality AI and full-stack applications — from LLM-powered recommendation engines
              using OpenAI GPT embeddings and vector search, to deep learning classifiers like DermaVision which
              uses fine-tuned EfficientNet for multi-class skin disease detection.
            </p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              I have also published a research paper on Bitcoin price prediction using Deep Q-Network (DQN)
              reinforcement learning, bridging deep RL with quantitative finance. I hold certifications in
              Generative AI and Artificial Intelligence from Infosys Springboard, and I bring a full-stack
              skill set across Python, React.js, FastAPI, Django, and SQL.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
