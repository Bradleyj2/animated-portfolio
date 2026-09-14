import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import CaseStudyCard from './CaseStudyCard'
import DividerLabel from './DividerLabel'
import PageMeta from './PageMeta'
import { getHomeArchiveItems, isSideProjectItem, type HomeArchiveItem } from '../data/homeArchiveItems'

function HomeCaseStudyCard({
  item,
  aspectClass = 'aspect-[16/9]',
  subtitleMaxWidth,
}: {
  item: HomeArchiveItem
  aspectClass?: string
  subtitleMaxWidth?: number
}) {
  const card = (
    <CaseStudyCard
      href={item.path}
      title={item.title}
      cardHeading={item.cardHeading}
      companyName={item.companyName}
      subtitle={item.subtitle}
      description={item.description}
      imageSrc={item.image}
      imageAlt={item.title}
      role={item.role}
      year={item.year}
      metric={item.metric}
      imageAspectClass={aspectClass}
      subtitleMaxWidth={subtitleMaxWidth}
      useCustomThumbnail={item.useCustomThumbnail}
    />
  )

  if (!item.draft) {
    return <div className="h-full">{card}</div>
  }

  return (
    <div className="relative h-full rounded-[10px] ring-2 ring-amber-300 ring-offset-2">
      <span className="absolute right-3 top-3 z-10 rounded bg-amber-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-950">
        Draft
      </span>
      {card}
    </div>
  )
}

/** Full-bleed featured card — same visual language as Side Projects / Hemispheres */
function HomeFeaturedProjectCard({ item }: { item: HomeArchiveItem }) {
  const heading = item.cardHeading || item.title
  const body = item.subtitle || item.tagline
  const roleYear = [item.role, item.year].filter(Boolean).join(' · ')

  return (
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
          <p className="mb-4 text-[0.9375rem] md:text-base font-normal leading-relaxed text-white/75 max-w-md">
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
        {item.metric && (
          <p className="mb-2 text-sm font-medium text-purple-400">{item.metric}</p>
        )}
        {roleYear && (
          <p className="mt-3 text-xs text-white/40">{roleYear}</p>
        )}
        <span className="mt-6 inline-block text-sm md:text-base font-medium text-white transition-opacity group-hover:opacity-70">
          {item.draft ? 'Coming soon' : 'View project →'}
        </span>
      </div>
    </Link>
  )
}

const HomePage = () => {
  const location = useLocation()
  const [isLightMode, setIsLightMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (location.hash === '#work') {
      const el = document.getElementById('work')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  useEffect(() => {
    // Scroll-based dark to light transition
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      
      // Calculate progress (0 to 1) - transition happens over first viewport height (faster)
      const transitionHeight = windowHeight * 0.8
      const progress = Math.min(scrollTop / transitionHeight, 1)
      
      setScrollProgress(progress)
      
      // Interpolate between dark and light
      const bgColor = `rgb(${Math.round(progress * 255)}, ${Math.round(progress * 255)}, ${Math.round(progress * 255)})`
      const textColor = `rgb(${Math.round(255 - progress * 255)}, ${Math.round(255 - progress * 255)}, ${Math.round(255 - progress * 255)})`
      const textColorLight = `rgb(${Math.round(200 - progress * 85)}, ${Math.round(200 - progress * 85)}, ${Math.round(200 - progress * 85)})`
      const textColorLighter = `rgb(${Math.round(180 - progress * 50)}, ${Math.round(180 - progress * 50)}, ${Math.round(180 - progress * 50)})`
      
      // Apply to body and root with !important via setProperty
      document.body.style.setProperty('background-color', bgColor, 'important')
      document.documentElement.style.setProperty('background-color', bgColor, 'important')
      
      // Set CSS custom properties for use in child components
      document.documentElement.style.setProperty('--scroll-bg-color', bgColor)
      document.documentElement.style.setProperty('--scroll-text-color', textColor)
      document.documentElement.style.setProperty('--scroll-text-color-light', textColorLight)
      document.documentElement.style.setProperty('--scroll-text-color-lighter', textColorLighter)
      
      // Update isLightMode for component logic
      setIsLightMode(progress > 0.5)
    }
    
    handleScroll() // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.querySelector('.case-studies-section')
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const archiveItems = getHomeArchiveItems()
  const fullWidthItems = archiveItems.filter(
    (item) => item.fullWidth && !isSideProjectItem(item)
  )
  const mainGridItems = archiveItems.filter(
    (item) => !item.fullWidth && !isSideProjectItem(item)
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <>
      <PageMeta
        title="Mera Bradley — Portfolio"
        description="Multidisciplinary designer shaping accessible, human-centered digital experiences. Explore case studies in design, research, and interactive systems."
        ogImage="/og/home.png"
      />
      <div 
        className="min-h-screen w-full homepage-main transition-colors duration-300" 
        style={{
          backgroundColor: `rgb(${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)})`,
          width: '100vw'
        }}
      >
        <Navigation scrollProgress={scrollProgress} />
        
        {/* Hero Title Section */}
        <section className="pt-40 md:pt-44 pb-20 md:pb-24">
          <div className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-4xl">
              {/* Name line */}
              <div className="text-sm font-normal tracking-widest text-gray-400 uppercase mb-3">
                Mera Bradley — Lead Product Designer
              </div>

              {/* Kicker line */}
              <div 
                className="text-base md:text-lg font-medium leading-none tracking-wide mb-5 transition-colors duration-300"
                style={{
                  color: `rgb(${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)})`
                }}
              >
                Insurtech • Healthcare • Agentic AI
              </div>
              
              {/* Main headline */}
              <h1 
                className="font-sans font-extrabold tracking-tight leading-[0.9] text-[clamp(2.25rem,5.5vw+1rem,5.25rem)] mb-6 md:mb-8 transition-colors duration-300"
                style={{
                  color: `rgb(${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)})`
                }}
              >
                Archivist of{'\n'}journeys
              </h1>
              
              {/* Subtitle */}
              <p 
                className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10 transition-colors duration-300"
                style={{
                  color: `rgb(${Math.round(200 - scrollProgress * 150)}, ${Math.round(200 - scrollProgress * 150)}, ${Math.round(200 - scrollProgress * 150)})`
                }}
              >
                I design behavioral UX systems that make complex, high-stakes decisions feel trustworthy and human. Insurtech, healthcare, and agentic AI — the systems where trust is the product. Enter a <button 
                  type="button"
                  onClick={scrollToCaseStudies}
                  className="no-underline hover:no-underline hover:text-purple-400 transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit text-inherit inline"
                >
                  journey
                </button>.
              </p>
              
              {/* Contact link */}
              <Link
                to="/about#contact"
                className="inline-block text-base md:text-lg text-white hover:text-purple-400 transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </section>

        {/* Divider visible on first screen heights (id="work" for anchor link from About) */}
        <div id="work">
          <DividerLabel label="Selected Work" />
        </div>

        {/* Project Grid - Rockstar Newswire Layout */}
        <motion.main 
          className="w-full case-studies-section transition-colors duration-300"
          style={{
            backgroundColor: `rgb(${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)})`
          }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Rockstar-like centered container & gutters */}
        <div className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-12 xl:px-16 pb-20 md:pb-24 lg:pb-32">
          {fullWidthItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="mb-10 md:mb-12"
            >
              <HomeFeaturedProjectCard item={item} />
            </motion.div>
          ))}

          {/* Two equal columns — primary case studies */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:auto-rows-fr md:gap-10 lg:gap-12">
            {mainGridItems.map((item) => {
              const aspectClass = 'aspect-[16/9]'
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="min-w-0 h-full"
                >
                  {item.comingSoon ? (
                    <div className="text-center relative h-full">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center mt-16 opacity-60">
                        <span className="text-sm font-bold text-gray-400">Tools</span>
                      </div>
                      <h3 className="font-serif text-xl mb-3 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm mb-3 text-gray-300">
                        {item.subtitle}
                      </p>
                      <p className="text-xs mb-6 text-gray-400">
                        {item.category}
                      </p>
                      <div className="px-6 py-2 rounded-lg inline-block cursor-not-allowed opacity-50 bg-gray-700 text-gray-300">
                        <span className="text-sm font-semibold">Coming soon</span>
                      </div>
                    </div>
                  ) : (
                    <HomeCaseStudyCard
                      item={item}
                      aspectClass={aspectClass}
                      subtitleMaxWidth={
                        item.id === 'second-opinion'
                          ? 500
                          : item.id === 'omnichannel'
                            ? 520
                            : undefined
                      }
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
        </motion.main>

        {/* Homepage footer: white background to match page */}
        <footer
          className="homepage-footer-light w-full border-t border-gray-200 py-4 px-6 md:px-10 lg:px-12 xl:px-16 relative z-50 bg-white"
          style={{
            backgroundColor: '#ffffff',
            color: '#171717',
            minHeight: '3rem',
            display: 'block',
            visibility: 'visible',
            opacity: 1,
          }}
        >
          <div className="max-w-screen-2xl mx-auto flex justify-start items-center">
            <div className="flex items-center gap-2 text-sm text-neutral-900" style={{ fontFamily: 'monospace' }}>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-neutral-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>New York, NY</span>
              </div>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-900">meraabradley.com</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage 