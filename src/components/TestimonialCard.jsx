import React from 'react';

const TestimonialCard = ({ name, role, quote ,img }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left relative">
    <div className="flex text-amber-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
    <p className="text-slate-700 text-sm italic mb-6">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
        <img src={img} alt={name} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900">{name}</h4>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
      <div className="ml-auto text-blue-500">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    </div>
  </div>
);

export default TestimonialCard;