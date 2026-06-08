"use client";
import { motion } from "framer-motion";

interface Project {
  icon: string;
  name: string;
  desc: string;
  stack: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    icon: "🚀",
    name: "JobFlow Engine — AI Career Intelligence Platform",
    desc: "Architected an end-to-end AI career platform using n8n workflows and Google Gemini AI to extract skills from resumes, calculate ATS scores, detect skill gaps, generate cover letters, and create personalized career roadmaps. Built a smart job-matching engine that scrapes live listings and ranks opportunities with AI compatibility scores, deployed on Vercel + Railway with React.js dashboard and Application Tracker.",
    stack: ["React.js", "n8n", "Google Gemini AI", "Supabase", "Railway", "Vercel"],
    github: "https://github.com/Rahul236733",
    demo: "https://ai-job-matcher-eight.vercel.app",
  },
  {
    icon: "🔬",
    name: "DermaVision — AI Skin Disease Classifier",
    desc: "Fine-tuned EfficientNet with transfer learning and image augmentation to classify dermatological conditions; achieved 93%+ validation accuracy on multi-class skin disease dataset. Integrated React.js front-end with FastAPI back-end for real-time browser-based inference; full-stack deployment with SQLite for prediction history.",
    stack: ["Python", "EfficientNet", "FastAPI", "React.js", "SQLite", "TensorFlow"],
    github: "https://github.com/Rahul236733",
  },
  {
    icon: "📚",
    name: "Library Management System",
    desc: "Developed a web-based library platform for book inventory, member management, and borrowing history with role-based Django ORM models and admin dashboard. Automated book issuance and return workflows with a responsive UI, reducing manual effort and improving data retrieval efficiency.",
    stack: ["Python", "Django", "MySQL"],
    github: "https://github.com/Rahul236733",
  },
  {
    icon: "🌐",
    name: "Personal Portfolio",
    desc: "Designed and deployed a fully responsive portfolio with continuous delivery on Vercel; integrated Formspree for serverless contact form handling with zero-downtime updates. Features modern UI with smooth animations, dark theme, and mobile-first responsive design.",
    stack: ["React.js", "Tailwind CSS", "Formspree", "Vercel"],
    github: "https://github.com/Rahul236733",
    demo: "https://personal-portfolio-tau-dusky-89.vercel.app",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-12 md:py-16 px-6 sm:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-[3px] text-green-500 font-semibold mb-2">Projects</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">What I've Built</h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Production-style applications spanning AI, ML, and full-stack development.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.name}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group min-h-[340px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-green-500/40 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(34,197,94,0.12)] relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div>
              <div className="flex items-start justify-between mb-6 gap-3">
                <span className="text-4xl drop-shadow-md">{p.icon}</span>
                <div className="flex flex-wrap gap-2 z-10 relative">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-black/40 border border-white/10 text-slate-300 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10 text-xs px-3 py-1.5 rounded-lg transition-all"
                  >
                    GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black hover:border-green-500 text-xs px-3 py-1.5 rounded-lg transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{p.name}</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6">{p.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="bg-green-500/5 border border-green-500/20 text-green-400 text-xs px-2.5 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
