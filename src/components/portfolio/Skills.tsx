'use client';

import { motion } from 'framer-motion';
import { Layout, Server, Database, Cloud, Settings, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React JS', 'Next JS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Nest JS'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'AI Tools',
    icon: Bot,
    skills: ['Antigravity', 'Copilot', 'Cotx'],
  },
  {
    title: 'Deployment',
    icon: Cloud,
    skills: ['Vercel', 'Render'],
  },
  {
    title: 'Tools',
    icon: Settings,
    skills: ['GitHub', 'OneDrive', 'VS Code', 'Postman', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full glass bg-white/5 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
