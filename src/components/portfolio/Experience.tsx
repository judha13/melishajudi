'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company: 'Forward Growth Pvt Ltd',
    period: '2022 - Present',
    points: [
      'Developed advanced dashboards with complex charts for data visualization.',
      'Integrated intelligent chatbots to improve user engagement and support.',
      'Built SEO-optimized product promotion websites featuring book demo functionality.',
      'Designed and managed scalable databases using PostgreSQL and MySQL.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Briefcase size={80} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold heading-gradient">{exp.title}</h3>
                  <p className="text-lg font-medium text-slate-600 dark:text-slate-400">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 rounded-full glass text-sm font-semibold text-sky-500">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 size={24} className="text-sky-500 shrink-0" />
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
