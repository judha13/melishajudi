"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Project Name
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="#services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
