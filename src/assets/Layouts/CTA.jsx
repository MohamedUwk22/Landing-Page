import React from 'react'
import Button from '../../components/Button';
const CTA = () => {
  return (
          <section className="max-w-6xl mx-auto px-6 pb-24">
            <div className="bg-cyan-50 rounded-3xl p-12 md:p-16 text-center space-y-6 border border-cyan-100/50">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Start your free 14-day trial today. No credit card required, cancel anytime you want.
              </p>
              <div className="pt-2">
                <Button variant="blue">Get Started Free</Button>
              </div>
            </div>
          </section>
  )
}

export default CTA
