'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'Optimized SEO Performance',
    description: 'Improved website ranking and loading speed by 40% for a major product launch.',
    icon: Zap,
    stat: '40% Boost',
  },
  {
    title: 'Advanced Dashboard Delivery',
    description: 'Successfully deployed a multi-tenant dashboard with 50+ interactive charts.',
    icon: Trophy,
    stat: '50+ Charts',
  },
  {
    title: 'Chatbot Success',
    description: 'Reduced customer support response time by 60% through AI chatbot integration.',
    icon: Star,
    stat: '60% Faster',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 -mr-8 -mt-8 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="inline-flex p-4 rounded-2xl bg-sky-500/10 text-sky-500 mb-6 group-hover:rotate-12 transition-transform">
                <achievement.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                {achievement.description}
              </p>
              <div className="text-2xl font-bold text-sky-500">
                {achievement.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
