import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import PageMeta from './PageMeta'
import { getSideProjectItems } from '../data/homeArchiveItems'

const SideProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.setProperty('--scroll-bg-color', '#0a0a0a')
    document.documentElement.style.setProperty('background-color', '#0a0a0a')
    document.body.style.setProperty('background-color', '#0a0a0a')

    return () => {
      document.documentElement.style.removeProperty('--scroll-bg-color')
      document.documentElement.style.removeProperty('background-color')
      document.body.style.removeProperty('background-color')
    }
  }, [])

  const sideProjects = getSideProjectItems()

  return (
    <>
      <PageMeta
        title="Side Projects — Mera Bradley"
        description="Personal and experimental work spanning game design, interactive storytelling, and exploratory product experiments."
        ogImage="/og/work.png"
      />
      <Navigation scrollProgress={0} />
      <div
        className="min-h-screen bg-[#0a0a0a] text-white pt-24"
        data-side-projects-page="true"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 xl:px-16 pt-16 md:pt-20 pb-28 md:pb-36">
          <motion.div
            className="mb-12 md:mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-1.5">
              Side Projects
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white max-w-2xl">
              Personal and exploratory work — game design, interactive systems, and other projects that sit alongside the primary case studies.
            </h2>
          </motion.div>

          {sideProjects.length > 0 ? (
            <div className="flex flex-col gap-6 md:gap-8">
              {sideProjects.map((item, index) => {
                const heading = item.cardHeading || item.title
                const body = item.subtitle || item.tagline

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.06 + index * 0.08,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      to={item.path}
                      className="group relative block overflow-hidden rounded-[10px] border border-[#e5e5e5] min-h-[320px] md:min-h-[420px] lg:min-h-[480px] transition-colors hover:border-[#8a8a8a] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

                      <div className="relative z-10 flex h-full min-h-[320px] md:min-h-[420px] lg:min-h-[480px] flex-col justify-end md:justify-center p-6 md:p-10 lg:p-12 max-w-xl">
                        <p className="mb-3 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/55">
                          {item.projectType || item.category}
                        </p>
                        <h2 className="mb-3 text-[1.5rem] md:text-3xl lg:text-4xl font-semibold leading-snug tracking-[-0.01em] text-white">
                          {heading}
                        </h2>
                        {body && (
                          <p className="mb-6 text-[0.9375rem] md:text-base font-normal leading-relaxed text-white/75 max-w-md">
                            {body.includes('\n')
                              ? body.split('\n').map((line, i, arr) => (
                                  <span key={i}>
                                    {line}
                                    {i < arr.length - 1 && <br />}
                                  </span>
                                ))
                              : body}
                          </p>
                        )}

                        <div className="mb-6 grid grid-cols-2 gap-x-8 max-w-sm">
                          <div>
                            <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/45">
                              Role
                            </p>
                            <p className="mt-1 text-[0.8125rem] md:text-sm text-white/85 leading-snug">
                              {item.role || '—'}
                            </p>
                          </div>
                          <div>
                            <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/45">
                              Year
                            </p>
                            <p className="mt-1 text-[0.8125rem] md:text-sm text-white/85 leading-snug">
                              {item.year || '—'}
                            </p>
                          </div>
                        </div>

                        <span className="inline-block text-sm md:text-base font-medium text-white underline underline-offset-4 transition-opacity group-hover:opacity-70">
                          {item.draft ? 'Coming soon' : 'View project →'}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <p className="text-lg text-neutral-500">No side projects published yet.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default SideProjectsPage
