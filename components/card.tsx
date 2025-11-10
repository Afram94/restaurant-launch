'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all lg:p-8 ${
        hoverable ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

