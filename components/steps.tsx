'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepsProps {
  steps: readonly Step[];
}

export function Steps({ steps }: StepsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {steps.map((step) => (
        <motion.div 
          key={step.number} 
          variants={fadeInUp} 
          className="group relative"
        >
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
            {/* Number Badge */}
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110">
              {step.number}
            </div>
            
            {/* Content */}
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {step.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {step.description}
            </p>

            {/* Decorative gradient on hover */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/0 to-emerald-500/0 opacity-0 blur-2xl transition-opacity group-hover:from-blue-500/20 group-hover:to-emerald-500/20 group-hover:opacity-100" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
