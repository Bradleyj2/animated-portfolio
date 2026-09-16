export default function GetInTouchBanner() {
  return (
    <section
      id="contact"
      className="get-in-touch-banner scroll-mt-24 border-t border-neutral-200 bg-white text-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12 lg:px-12">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900 md:text-3xl">
          Get in touch
        </h2>
        <p className="mb-8 max-w-md text-sm text-neutral-500">
          Open to founding designer and senior product design roles in healthcare and AI. Always happy to talk about the work.
        </p>
        <div className="space-y-4">
          <a
            href="mailto:jamera.bradley@gmail.com"
            className="block font-medium text-neutral-900 underline-offset-4 transition-colors duration-200 hover:text-purple-500 hover:underline"
          >
            jamera.bradley@gmail.com
          </a>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="https://www.linkedin.com/in/jamerabradley/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-neutral-900 transition-colors duration-200 hover:text-purple-500"
            >
              LinkedIn{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/Bradley-Jamera-Senior-Product-Designer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-neutral-900 transition-colors duration-200 hover:text-purple-500"
            >
              Resume{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
