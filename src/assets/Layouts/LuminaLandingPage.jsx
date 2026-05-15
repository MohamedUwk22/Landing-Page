import React from 'react';
import Button from '../../components/Button';
import FeatureCard from '../../components/FeatureCard';
import TestimonialCard from '../../components/TestimonialCard';
import Pricing from './Pricing';
import FAQ from './FAQ.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import About from './About.jsx';
import CTA from './CTA.jsx';
import Footer from './Footer.jsx';
import Testimonials from './Testimonials.jsx';

export default function LuminaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-cyan-100">
      
      <Navbar/>
      {/* --- HERO SECTION --- */}
     
        <Hero/>
      {/* --- FEATURES SECTION --- */}
        <Features/>
      {/* --- PRICING SECTION --- */}
        <Pricing/>
      {/* --- ABOUT / BENEFITS SECTION --- */}
        <About/>
        {/* --- FAQ SECTION --- */}
        <FAQ/>
      {/* --- TESTIMONIALS SECTION --- */}
        <Testimonials/>
      {/* --- FINAL CTA SECTION --- */}
        <CTA/>
         {/* --- CONTACT SECTION --- */}
        <Contact/>
       {/* --- FOOTER --- */}
      <Footer/>

    </div>
  );
}