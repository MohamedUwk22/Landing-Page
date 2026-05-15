import React from 'react'
import Button from '../../components/Button';
import HeroImg from '../../assets/Images/Hero.jpg'
const Hero = () => {
  return (
     <section id="hero" className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Unlock Your Peak Productivity with Lumina
              </h1>
              <p className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed">
                The all-in-one digital workspace designed for modern teams. Streamline workflows, track progress, and achieve goals faster.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary">Get Started for Free</Button>
                <Button variant="secondary" className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  Watch Demo
                </Button>
              </div>
            </div>
            {/* Abstract Mockup */}
            <div className="relative bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2rem] p-1 shadow-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="bg-white w-full h-full rounded-[1.9rem] shadow-inner p-4 flex flex-col gap-3">
                <div className="flex gap-1.5 border-b border-slate-100 pb-3">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-sm ">
                  <img src={HeroImg} alt="Main Image" className="w-4/4 h-auto " />
                </div>
              </div>
            </div>
          </section>
  )
}

export default Hero
