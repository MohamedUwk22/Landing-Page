import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 py-5 text-left">
      <button 
        className="flex justify-between items-center w-full text-left font-semibold text-slate-950 text-base py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} 
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50/50 border-t border-b border-slate-100 py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm">Have questions? We're here to help you understand how Lumina works.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mt-8">
          <FAQItem 
            question="Can I change or cancel my plan later?" 
            answer="Yes, you can upgrade, downgrade, or cancel your subscription at any time right from your dashboard settings. If you cancel, your premium features will remain active until the end of your billing cycle."
          />
          <FAQItem 
            question="Is there a free trial available for the Pro plan?" 
            answer="Absolutely! We offer a 14-day free trial for our Pro plan, no credit card required. You can experience all premium collaboration features completely free."
          />
          <FAQItem 
            question="How secure is my data with Lumina?" 
            answer="Data security is our top priority. We use industry-standard AES-256 encryption for data at rest and TLS encryption during transit. Your information is safely guarded on enterprise-grade servers."
          />
          <FAQItem 
            question="Do you offer discounts for educational or non-profit setups?" 
            answer="Yes, we support organizations making a positive impact. Reach out to our sales team with proof of your non-profit or educational status to receive a special pricing plan."
          />
        </div>
      </div>
    </section>
  );
}