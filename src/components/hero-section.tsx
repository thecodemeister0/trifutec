"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0  opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/20" />
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Empowering South Texas with Advanced Technology Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-xl text-slate-300"
          >
            From San Antonio to Brownsville, we provide cutting-edge technology
            services that transform how businesses operate.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
