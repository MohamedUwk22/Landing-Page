import React from 'react';

const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-2.5 rounded-full font-medium transition-all duration-200 text-sm";
  const variants = {
    primary: "bg-cyan-400 hover:bg-cyan-500 text-slate-900 shadow-md hover:shadow-lg",
    secondary: "border border-slate-300 hover:border-slate-400 text-slate-700 bg-white",
    dark: "bg-slate-950 hover:bg-slate-900 text-white shadow-md",
    blue: "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;