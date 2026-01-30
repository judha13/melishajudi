'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-2 rounded-full glass text-sm font-medium text-sky-500 mb-6 inline-block">
            Full Stack Web Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I&apos;m <span className="heading-gradient">Melisha Judi S</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            A passionate Full Stack Developer with 2 years of experience crafting modern, scalable, and user-centric web applications. Specializing in Nest.js, Next.js, and advanced dashboard solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-medium transition-all shadow-lg shadow-sky-600/25 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full glass hover:bg-white/20 dark:hover:bg-slate-800 transition-all font-medium border border-slate-200 dark:border-slate-800"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6">
            {[
              { Icon: Github, href: 'https://github.com' },
              { Icon: Linkedin, href: 'https://linkedin.com' },
              { Icon: Mail, href: 'mailto:melishajudi2002@gmail.com' }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:text-sky-500 transition-colors bg-white/10 dark:bg-slate-800/20 glass"
              >
                <item.Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto overflow-hidden rounded-3xl border-2 border-white/20 dark:border-slate-800/50 shadow-2xl">
            <Image
              src="/home/profile.png"
              alt="Melisha Judi S"
              fill
              className="object-cover object-[center_10%]"
              priority
            />
          </div>
          
          {/* Floating icons with logos or text */}
          <div className="absolute -top-6 -right-6 animate-float">
            <div className="px-6 py-3 rounded-2xl glass font-bold text-sky-500 shadow-xl border border-white/40">
              React
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 animate-float-delayed">
            <div className="px-6 py-3 rounded-2xl glass font-bold text-blue-500 shadow-xl border border-white/40">
              NestJS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
