import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
const Navbar = () => {
  return (
    <>
    {/* --- NAVBAR --- */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 bg-cyan-400 rounded-md flex items-center justify-center font-bold text-white text-xs shadow-sm hover:bg-cyan-500">L</div>
          <span className="text-xl font-bold tracking-tight text-slate-900 hover:text-slate-500"><a href="#hero">Lumina</a></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-slate-900 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About Us</a>
          
        </div>
        <div className="flex items-center gap-4">
          <Button variant="dark">Get Started Free</Button>
          <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-2">
             Login
           </Link>
        </div>
      </nav>
    </>
    
  )
}

export default Navbar
