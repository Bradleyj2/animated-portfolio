const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-4 px-6 md:px-10 lg:px-12 xl:px-16 relative z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-start items-center">
        {/* Left side: Location and social links */}
        <div className="flex items-center gap-2 text-white text-sm" style={{ fontFamily: 'monospace' }}>
          <div className="flex items-center gap-1.5">
            <svg 
              className="w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>New York, NY</span>
          </div>
          <span className="text-white/40">·</span>
          <a 
            href="https://www.linkedin.com/in/jamerabradley/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity lowercase"
          >
            linkedIn
          </a>
          <span className="text-white/40">·</span>
          <a 
            href="/Bradley-Jamera-Senior-Product-Designer-Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity lowercase"
          >
            resume
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
