'use client';

import { useState, FormEvent } from 'react';
import { Send, Copy, Check } from 'lucide-react';
import { SITE_CONFIG, PROJECT_TYPES } from '@/lib/constants';
import { buildMailto, formatContactBody, copyToClipboard } from '@/lib/mailto';

interface ContactPanelProps {
  className?: string;
}

export function ContactPanel({ className = '' }: ContactPanelProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    projectType: 'Complete Package (Physical + Digital)',
    message: '',
  });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `New Lead — ${formData.name} (${formData.projectType})`;
    const body = formatContactBody(formData);

    const mailtoUrl = buildMailto({
      to: SITE_CONFIG.contactEmail,
      subject,
      body,
    });

    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    const body = formatContactBody(formData);
    const success = await copyToClipboard(body);

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 lg:p-10 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              placeholder="Johan Andersson"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              placeholder="johan@example.se"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              placeholder="+46 70 123 4567"
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              City *
            </label>
            <input
              type="text"
              id="city"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              placeholder="Stockholm"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Project Type *
          </label>
          <select
            id="projectType"
            required
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Privacy Notice */}
        <p className="text-xs leading-relaxed text-gray-600">
          We reply within 24 hours. Your info stays private.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          >
            <Send size={18} />
            Send Email
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 active:scale-95"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </form>

      {/* 
        ALTERNATIVE: Netlify Forms
        To switch to Netlify Forms, replace the <form> tag with:
        
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleNetlifySubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          ... rest of form fields ...
        </form>
        
        And handle submission with:
        
        const handleNetlifySubmit = (e: FormEvent) => {
          // Netlify automatically handles the form submission
          // You can add custom success/error handling here
        };
      */}

      {/* 
        ALTERNATIVE: Formspree
        To switch to Formspree, change the form action:
        
        <form 
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          ... rest of form fields ...
        </form>
      */}
    </div>
  );
}
