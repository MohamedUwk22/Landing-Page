import React from 'react';
import Button from '../../components/Button';

const PricingCard = ({ title, price, description, features, isPopular }) => (
  <div className={`p-8 rounded-3xl border transition-all duration-200 relative ${
    isPopular 
      ? 'bg-slate-950 text-white border-slate-950 shadow-xl scale-105 z-10' 
      : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'
  }`}>
    {isPopular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        Most Popular
      </span>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className={`text-sm mb-6 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
    <div className="mb-6 flex items-baseline gap-1">
      <span className="text-4xl font-extrabold tracking-tight">{price}</span>
      {price !== 'Custom' && <span className={`text-sm ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>}
    </div>
    
    <Button variant={isPopular ? 'primary' : 'dark'} className="w-full mb-8">
      {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
    </Button>

    <ul className="space-y-4 text-sm text-left">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <svg className={`w-4 h-4 shrink-0 ${isPopular ? 'text-cyan-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
          </svg>
          <span className={isPopular ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24 text-center space-y-16">
      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Flexible Plans for Every Team</h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Choose the perfect plan for your business. Start small and scale as your team grows with our transparent pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-4 items-center">
        <PricingCard 
          title="Starter"
          price="$0"
          description="Perfect for individuals tracking personal workflows."
          features={['1 User Workspace', 'Up to 5 Projects', 'Basic Analytics', 'Community Support']}
          isPopular={false}
        />
        <PricingCard 
          title="Pro"
          price="$29"
          description="Best for growing teams needing advanced collaboration tools."
          features={['Up to 15 Users', 'Unlimited Projects', 'Real-time Dashboards', 'Priority Email Support', 'Custom Integrations']}
          isPopular={true}
        />
        <PricingCard 
          title="Enterprise"
          price="Custom"
          description="Tailored security and control for large organizations."
          features={['Unlimited Users', 'Dedicated Account Manager', 'Advanced Security & SSO', '99.9% Uptime SLA', '24/7 Phone Support']}
          isPopular={false}
        />
      </div>
    </section>
  );
}