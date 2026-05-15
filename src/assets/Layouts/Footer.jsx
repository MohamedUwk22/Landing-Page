import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white py-16 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-cyan-400 rounded-md flex items-center justify-center font-bold text-white text-xs">L</div>
              <span className="text-lg font-bold tracking-tight text-slate-900">Lumina</span>
            </div>
            <p className="max-w-xs leading-relaxed text-xs">
              The all-in-one digital workspace designed for modern teams.
            </p>
          </div>
          
          {[['Product', 'Features', 'Pricing', 'Security'], 
            ['Company', 'About', 'Careers', 'Press'], 
            ['Resources', 'Blog', 'Documentation', 'Help'], 
            ['Legal', 'Terms', 'Privacy', 'Cookies']].map((column, i) => (
            <div key={i} className="space-y-3 text-left">
              <h4 className="font-semibold text-slate-900 text-xs tracking-wider uppercase">{column[0]}</h4>
              <ul className="space-y-2 text-xs">
                {column.slice(1).map((link, j) => (
                  <li key={j}><a href={`#${link.toLowerCase()}`} className="hover:text-slate-900 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Lumina Inc. All rights reserved.</p>
          <div className="flex gap-4 text-slate-400">
            <a href="#twitter" className="hover:text-slate-600">Twitter</a>
            <a href="#linkedin" className="hover:text-slate-600">LinkedIn</a>
            <a href="#github" className="hover:text-slate-600">GitHub</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
