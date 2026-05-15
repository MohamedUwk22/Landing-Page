import React from 'react'
import AboutImg from '../../assets/Images/About.jpg'
const About = () => {
  return (
          <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-slate-50 rounded-2xl aspect-video flex items-center justify-center border border-slate-100 shadow-inner">
          <div className="w-full h-full flex items-center justify-center">
            <img src={AboutImg} alt="About Image" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
        <div className="text-left space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Designed for Sustainable Growth
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Lumina empowers startups and tech teams to scale efficiently. Our intuitive tools centralize your operations, boost performance, and eliminate workflows bottlenecks. Reclaim your time and focus on true innovation.
          </p>
          <ul className="grid grid-cols-1 gap-3 pt-2 text-slate-700 text-sm font-medium">
            {['Enhanced Efficiency', 'Seamless Integrations', 'Data Security', 'Global Accessibility'].map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>
  )
}

export default About
