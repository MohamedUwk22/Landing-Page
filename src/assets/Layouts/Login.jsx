import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      
      {/* Logo & Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link to="/" className="inline-flex items-center gap-2 justify-center">
          <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-sm">L</div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Lumina</span>
        </Link>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Sign in to your account
        </h2>
        <p className="text-sm text-slate-500">
          Or {' '}
          <a href="#signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
            start your 14-day free trial
          </a>
        </p>
      </div>

      {/* Login Card Form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-slate-100 sm:rounded-3xl sm:px-10 text-left">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-semibold text-slate-700">
                  Password
                </label>
                <a href="#forgot" className="text-xs font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded-md accent-blue-600"
                />
                <label htmlFor="remember-me" className="text-xs text-slate-600 font-medium select-none">
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <Button variant="dark" className="w-full py-3 mt-2">
                Sign in
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-medium">Back to safety</span>
            </div>
          </div>

          {/* Back Home Link */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors inline-flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
              </svg>
              Return to Homepage
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}