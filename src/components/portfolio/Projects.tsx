'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Sales Admin Dashboard',
    description: 'A comprehensive dashboard for sales management with real-time data visualization and advanced filtering capabilities.',
    tags: ['React', 'Next.js', 'Chart.js', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    title: 'Product Promotion Website',
    description: 'SEO-optimized landing page for product marketing with a "Book Demo" feature and lead generation forms.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    github: '#',
  },
  // {
  //   title: 'Chatbot Integration',
  //   description: 'Seamless integration of an AI-powered chatbot into existing web platforms to enhance customer support.',
  //   tags: ['NestJS', 'OpenAI', 'WebSocket'],
  //   link: '#',
  //   github: '#',
  // },
  {
    title: 'Personal Portfolio',
    description: 'A modern, clean portfolio website showcasing my skills, experience, and projects.',
    tags: ['Next.js', 'Tailwind CSS', 'Glassmorphism'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card group flex flex-col"
            >
              {/* Mockup Placeholder */}
              <div className="h-48 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-t-2xl flex items-center justify-center overflow-hidden">
                 <div className="text-sky-500 opacity-30 group-hover:scale-110 transition-transform duration-500">
                    <LaptopIcon size={100} />
                 </div>
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-sky-500/10 text-sky-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} className="text-slate-500 hover:text-sky-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="text-slate-500 hover:text-sky-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LaptopIcon({ size = 24 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
            <line x1="2" x2="22" y1="20" y2="20" />
        </svg>
    )
}
