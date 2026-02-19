'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.E - CSE",
      school: "St. Xavier's Catholic College of Engineering",
      cgpa: 'CGPA: 8.55',
      year: '2019 - 2023',
    },
    {
      degree: 'HSC',
      school: 'Ringle Taube Higher Secondary School',
      cgpa: 'Grade: 83.83%',
      year: '2017 - 2019',
    },
  ];

  const knownLanguages = [
    { name: 'English', level: 'Professional working proficiency' },
    { name: 'Tamil', level: 'Native or bilingual proficiency' },
  ];

  return (
    <section id="education" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 h-full"
                >
                  <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{edu.school}</p>
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-sky-500">{edu.year}</span>
                    <span className="px-2 py-1 rounded-lg glass bg-sky-500/5 text-sky-600 dark:text-sky-400">{edu.cgpa}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                <Languages size={28} />
              </div>
              <h2 className="text-3xl font-bold">Languages</h2>
            </motion.div>

            <div className="space-y-6">
              {knownLanguages.map((lang, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 h-full flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-lg mb-1">{lang.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {lang.level}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                       <div className={`h-full bg-sky-500 ${lang.name === 'Tamil' ? 'w-full' : 'w-[85%]'}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
