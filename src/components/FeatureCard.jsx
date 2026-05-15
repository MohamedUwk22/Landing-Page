import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-left">
    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-cyan-500">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;