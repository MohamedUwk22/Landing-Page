import React from 'react';
import Button from '../../components/Button';

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div className="text-left space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get in Touch with Us</h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md">
          Have an inquiry, feedback, or need tailored enterprise solutions? Drop us a message, and our team will get back to you within 24 hours.
        </p>
        
        <div className="space-y-4 pt-4 text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            </div>
            <span>support@lumina.io</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"/></svg>
            </div>
            <span>San Francisco, CA Office</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-left">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">First Name</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50" placeholder="John" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Last Name</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Email Address</label>
            <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Your Message</label>
            <textarea rows="4" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50 resize-none" placeholder="Tell us how we can help..."></textarea>
          </div>
          <Button variant="dark" className="w-full pt-3 pb-3">Send Message</Button>
        </form>
      </div>
    </section>
  );
}