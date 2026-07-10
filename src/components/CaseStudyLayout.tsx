import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface CaseStudyLayoutProps {
  children: React.ReactNode
  previousCase?: {
    title: string
    path: string
  }
  nextCase?: {
    title: string
    path: string
  }
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ 
  children, 
  previousCase, 
  nextCase 
}) => {
  return (
    <div className="min-h-screen bg-white text-black" data-case-study="true">
      {/* Main Content Container with Side Navigation */}
      <div className="flex min-h-screen">
        {/* Left Navigation - Previous Case Study */}
        {previousCase && (
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
            <Link
              to={previousCase.path}
              className="group flex items-center justify-center px-2 py-6 hover:bg-black/10 transition-all duration-300 rounded-r-lg"
            >
              <div className="text-center">
                <div className="text-xs text-black/40 group-hover:text-black/70 uppercase tracking-widest transform -rotate-90 whitespace-nowrap font-medium transition-colors duration-300">Last Project</div>
              </div>
            </Link>
          </div>
        )}

        {/* Center Content - Full width between navigation buttons */}
        <div className="flex-1 px-6 py-16 pt-32" style={{marginLeft: '98px', marginRight: '98px'}}>
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>

        {/* Right Navigation - Next Case Study */}
        {nextCase && (
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
            <Link
              to={nextCase.path}
              className="group flex items-center justify-center px-2 py-6 hover:bg-black/10 transition-all duration-300 rounded-l-lg"
            >
              <div className="text-center">
                <div className="text-xs text-black/40 group-hover:text-black/70 uppercase tracking-widest transform rotate-90 whitespace-nowrap font-medium transition-colors duration-300">Next Project</div>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Navigation - Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-black/20 p-4">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          {previousCase && (
            <Link
              to={previousCase.path}
              className="flex items-center space-x-2 px-4 py-2 text-black/80 hover:text-black transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Previous Project</span>
            </Link>
          )}
          {nextCase && (
            <Link
              to={nextCase.path}
              className="flex items-center space-x-2 px-4 py-2 text-black/80 hover:text-black transition-colors duration-300"
            >
              <span className="text-sm">Next Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CaseStudyLayout