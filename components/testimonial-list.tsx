'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Card } from './card';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialListProps {
  testimonials: readonly Testimonial[];
}

export function TestimonialList({ testimonials }: TestimonialListProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card hoverable={false}>
            <Quote className="mb-4 h-8 w-8 text-gray-300" />
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              {testimonial.quote}
            </p>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
