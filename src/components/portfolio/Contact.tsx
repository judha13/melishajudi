'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'melishajudi2002@gmail.com',
    href: 'mailto:melishajudi2002@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9894659379',
    href: 'tel:+919894659379',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/melishajudi',
    href: 'https://linkedin.com/in/melishajudi',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/melishajudi',
    href: 'https://github.com/melishajudi',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 flex items-center gap-6 group"
              >
                <div className="p-4 rounded-2xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <info.icon size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{info.label}</p>
                  <p className="text-lg font-semibold dark:text-slate-200">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form Mock */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl glass bg-white/5 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl glass bg-white/5 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl glass bg-white/5 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
