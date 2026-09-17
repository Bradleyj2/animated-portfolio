const Footer = () => {
  return (
    <footer className="site-footer relative z-50 w-full border-t border-neutral-800 bg-black py-4 px-6 md:px-10 lg:px-12 xl:px-16">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-start">
        <div
          className="flex items-center gap-2 text-sm text-white"
          style={{ fontFamily: 'monospace' }}
        >
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>New York, NY</span>
          </div>
          <span className="text-white/50">·</span>
          <span>meraabradley.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
