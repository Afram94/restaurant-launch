'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Card } from './card';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureListProps {
  features: readonly Feature[];
}

export function FeatureList({ features }: FeatureListProps) {
  const iconColors = [
    'from-blue-500 to-blue-600',
    'from-emerald-500 to-emerald-600',
    'from-orange-500 to-orange-600',
    'from-purple-500 to-purple-600',
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {features.map((feature, index) => {
        const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Package;
        
        return (
          <motion.div key={feature.title} variants={fadeInUp} className="flex">
            <Card className="flex flex-col">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[index]} shadow-lg`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
