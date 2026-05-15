import React from 'react'
import TestimonialCard from '../../components/TestimonialCard';
import JaneImg from '../../assets/Images/person-1.jpg'
import AlexImg from '../../assets/Images/person-2.jpg'
const Testimonials = () => {
  return (
        <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24 text-center space-y-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Trusted by Innovators Worldwide
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard 
            name="Jane D."
            role="CEO TechCorp"
            img={JaneImg}
            quote="Lumina has completely changed how our team operates. Highly recommend to any fast-growing startup!"
          />
          <TestimonialCard 
            name="Alex M."
            role="Product Lead"
            img={AlexImg}
            quote="The UI is incredibly clean, and the automation tools saved us hours of manual development syncs every week."
          />
        </div>
      </section>
  )
}

export default Testimonials
