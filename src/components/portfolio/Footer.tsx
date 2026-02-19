'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Image 
              src="/footer/logo_light.png" 
              alt="Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto object-contain dark:hidden" 
            />
            <Image 
              src="/footer/logo_dark.png" 
              alt="Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto object-contain hidden dark:block" 
            />
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-slate-500 hover:text-sky-500 transition-colors">About</a>
            <a href="#projects" className="text-sm text-slate-500 hover:text-sky-500 transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-slate-500 hover:text-sky-500 transition-colors">Skills</a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-sky-500 transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            {[Github, Linkedin, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href={Icon === Github ? "#" : Icon === Linkedin ? "https://www.linkedin.com/in/melisha-judi-s-036860371?utm_source=share_via&utm_content=profile&utm_medium=member_android" : Icon === Mail ? "mailto:melishajudi2002@gmail.com" : "#"}
                className="p-3 rounded-full glass hover:bg-sky-500/10 hover:text-sky-500 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-900">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Melisha Judi S. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-sky-500 transition-colors"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
