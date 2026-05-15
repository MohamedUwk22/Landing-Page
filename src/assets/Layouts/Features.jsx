import React from 'react'
import FeatureCard from '../../components/FeatureCard';
const Features = () => {
  return (
          <section id="features" className="bg-slate-50/50 border-t border-b border-slate-100 py-24 text-center">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Streamline Your Operations
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/></svg>}
                  title="Workflow Automation"
                  description="Automate repetitive tasks and reduce manual errors effortlessly."
                />
                <FeatureCard 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-2.533-3.076l-1.408-.47a1.659 1.659 0 01-.992-1.149 1.658 1.658 0 01.385-1.382l.487-.487a6.34 6.34 0 00-6.102-6.102l-.487.487a1.658 1.658 0 01-1.382.385 1.659 1.659 0 01-1.149-.992l-.47-1.409a4.125 4.125 0 00-3.076-2.533 9.307 9.307 0 00-3.133 1.053c.152.015.303.033.454.054a5.001 5.001 0 014.242 4.242c.021.151.039.302.054.454A9.29 9.29 0 0015 19.128z"/></svg>}
                  title="Team Collaboration"
                  description="Connect and communicate seamlessly in one single central hub."
                />
                <FeatureCard 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/></svg>}
                  title="Real-time Analytics"
                  description="Gain valuable, deep insights with flexible dynamic dashboards."
                />
              </div>
            </div>
          </section>
  )
}

export default Features
