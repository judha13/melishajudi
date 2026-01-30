'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Use useMotionTemplate for reactive background
  const darkBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(56, 189, 248, 0.15), transparent 80%)`;
  const lightBackground = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, rgba(14, 165, 233, 0.12), transparent 80%)`;

  if (!isMounted) return null;

  return (
    <>
      {/* Dark mode spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 hidden dark:block"
        style={{
          background: darkBackground,
        }}
      />
      
      {/* Light mode spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 block dark:hidden"
        style={{
          background: lightBackground,
        }}
      />
    </>
  );
}
