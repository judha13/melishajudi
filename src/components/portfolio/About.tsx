'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I am <span className="font-bold text-slate-900 dark:text-white">Melisha Judi S</span>, a dedicated Full Stack Web Developer with 2 years of professional experience in building robust web applications. My passion lies in creating seamless user experiences and efficient backend systems.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Throughout my career, I have worked on various projects, from SEO-optimized product promotion websites to advanced dashboards with complex charting. I thrive on solving technical challenges and staying up-to-date with the latest industry trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { label: 'Experience', value: '2+ Years' },
                { label: 'Projects', value: '10+' },
                { label: 'Clients', value: '5+' },
                { label: 'Hours Code', value: '2000+' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-sky-500 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
