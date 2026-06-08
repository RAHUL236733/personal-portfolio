"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    date: "July 2025",
    title: "Python & Django Developer Intern",
    org: "Topnotch Pvt. Ltd · Remote",
    desc: "Designed and delivered a full-stack Library Management System. Implemented JWT auth, role-based access control (admin/member), and Django ORM models — replacing manual record-keeping end to end.",
  },
  {
    date: "2024–2025",
    title: "Research Publication",
    org: "Bitcoin Price Prediction Using Advanced DQN Technologies",
    desc: "Authored a paper applying Deep Q-Network reinforcement learning to model Bitcoin price movements from OHLCV data, contributing to applied research at the intersection of deep RL and quantitative finance.",
  },
  {
    date: "2023 – Present",
    title: "B.Tech — Information Technology (AI & ML)",
    org: "GMR Institute of Technology · Rajam · CGPA 8.4 / 10.0",
    desc: "Core coursework: DSA, Deep Learning, DBMS, OOP, Operating Systems. Active in ML research, AI project development, and applied learning beyond the curriculum.",
  },
  {
    date: "2021–2023",
    title: "Intermediate (MPC)",
    org: "Sri Chaitanya Junior College · Rajam · 91.3%",
    desc: "",
  },
];

const certs = [
  { name: "Principles of Generative AI", issuer: "Infosys Springboard", year: "2024" },
  { name: "Artificial Intelligence Primer", issuer: "Infosys Springboard", year: "2024" },
  { name: "Python with Django Web App Development", issuer: "Topnotch Softwares", year: "2025" },
  { name: "SQL Intermediate", issuer: "HackerRank", year: "2023" },
  { name: "Deep Learning Essentials", issuer: "L&T EduTech", year: "2023" },
];

export default function Experience() {
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
    <section id="experience" className="py-12 md:py-16 px-6 sm:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[3px] text-green-500 font-semibold mb-2">Experience & Education</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Timeline</h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          My professional and academic journey so far.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Timeline */}
        <motion.div
          className="relative pl-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-green-500/50 via-white/10 to-transparent rounded-full" />
          
          {timeline.map((t, i) => (
            <motion.div key={t.title} variants={itemVariants} className="relative mb-10 last:mb-0 group">
              <div className="absolute -left-[32px] top-1.5 w-[14px] h-[14px] rounded-full bg-green-500 border-[3px] border-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-green-500/20 hover:bg-white/10">
                <p className="text-xs uppercase tracking-wider text-green-500 font-semibold mb-2">{t.date}</p>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{t.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{t.org}</p>
                {t.desc && <p className="text-sm text-slate-300 leading-relaxed">{t.desc}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants} className="text-xs uppercase tracking-[2px] text-green-500 font-semibold mb-6">
            Certifications
          </motion.p>
          <div className="flex flex-col gap-4">
            {certs.map((c) => (
              <motion.div
                key={c.name}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-4 md:p-5 flex items-start gap-4 transition-all duration-300 hover:border-green-500/20 hover:bg-white/10 group"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">{c.name}</p>
                  <p className="text-xs md:text-sm text-slate-400">{c.issuer} · <span className="text-slate-500">{c.year}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
