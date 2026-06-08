"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const links = [
  { icon: "✉", label: "Email", val: "beerarahul2@gmail.com", href: "mailto:beerarahul2@gmail.com" },
  { icon: "in", label: "LinkedIn", val: "linkedin.com/in/bhavani-sankar-beera", href: "https://www.linkedin.com/in/bhavani-sankar-beera/" },
  { icon: "GH", label: "GitHub", val: "github.com/Rahul236733", href: "https://github.com/Rahul236733" },
  { icon: "📞", label: "Phone", val: "7396179921", href: "tel:7396179921" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xjglwpoe", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("done");
      form.reset();
    } else {
      setStatus("idle");
      alert("Something went wrong — please email me directly.");
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-6 sm:px-8 max-w-4xl mx-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="text-xs uppercase tracking-[3px] text-green-500 font-semibold mb-2">Contact</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Get In Touch</h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Open to internships, full-time roles, and interesting collaborations.
        </p>
      </motion.div>

      <div className="flex flex-col gap-10 items-center w-full">
        {/* Contact Cards - First */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {links.map((l) => (
            <motion.a
              key={l.label}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-4 hover:border-green-500/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 text-lg font-bold shrink-0 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                {l.icon}
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mb-0.5">{l.label}</p>
                <p className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors truncate">{l.val}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form - Second */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative z-10">
                <label className="text-[10px] uppercase tracking-wider font-medium text-slate-400 block mb-1.5">Your Name</label>
                <input
                  name="name" required
                  className="w-full bg-black/40 border border-white/10 text-white text-sm px-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-black/60 transition-all placeholder-slate-600"
                  placeholder="Ramya"
                />
              </div>
              <div className="relative z-10">
                <label className="text-[10px] uppercase tracking-wider font-medium text-slate-400 block mb-1.5">Email Address</label>
                <input
                  name="email" type="email" required
                  className="w-full bg-black/40 border border-white/10 text-white text-sm px-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-black/60 transition-all placeholder-slate-600"
                  placeholder="Ramya@example.com"
                />
              </div>
            </div>
            <div className="relative z-10">
              <label className="text-[10px] uppercase tracking-wider font-medium text-slate-400 block mb-1.5">Your Message</label>
              <textarea
                name="message" required rows={4}
                className="w-full bg-black/40 border border-white/10 text-white text-sm px-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-black/60 transition-all placeholder-slate-600 resize-none"
                placeholder="How can we collaborate?"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "done"}
              className="relative z-10 mt-2 w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:hover:bg-green-500 text-black font-bold py-3 rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2"
            >
              {status === "idle" && (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "done" && "Message Sent ✓"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
