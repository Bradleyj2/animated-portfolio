import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import CaseStudyCard from './CaseStudyCard'
import DividerLabel from './DividerLabel'
import PageMeta from './PageMeta'
import { getHomeArchiveItems, isHeroPairItem, type HomeArchiveItem } from '../data/homeArchiveItems'

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
      imageAspectClass={aspectClass}
      subtitleMaxWidth={subtitleMaxWidth}
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
  const aiMarketingCard = archiveItems.find((item) => item.id === 'ai-marketing-control-center')
  const viuHub = archiveItems.find((item) => item.id === 'viu-hub')
  const showPairedHeroRow = Boolean(aiMarketingCard && viuHub)

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
        <section className="pt-52 pb-28 min-h-[70vh] flex items-center">
          <div className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-4xl">
              {/* Kicker line */}
              <div 
                className="text-base md:text-lg font-medium leading-none tracking-wide mb-4 transition-colors duration-300"
                style={{
                  color: `rgb(${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)})`
                }}
              >
                Design • Narrative • Health + Systems
              </div>
              
              {/* Main headline */}
              <h1 
                className="font-sans font-extrabold tracking-tight leading-[0.9] text-[clamp(2.5rem,6vw+1rem,6rem)] mb-6 transition-colors duration-300"
                style={{
                  color: `rgb(${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)})`
                }}
              >
                ARCHIVIST OF{'\n'}JOURNEYS
              </h1>
              
              {/* Subtitle */}
              <p 
                className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10 transition-colors duration-300"
                style={{
                  color: `rgb(${Math.round(200 - scrollProgress * 150)}, ${Math.round(200 - scrollProgress * 150)}, ${Math.round(200 - scrollProgress * 150)})`
                }}
              >
                I design behavioral UX systems that boost revenue and reshape decisions. Experiments in memory, trust, and play live here. Enter a <button 
                  type="button"
                  onClick={scrollToCaseStudies}
                  className="no-underline hover:no-underline hover:text-purple-400 transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit text-inherit inline"
                >
                  journey
                </button>.
              </p>
              
              {/* Downward arrow */}
              <motion.button 
                onClick={scrollToCaseStudies}
                className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
                style={{
                  color: `rgb(${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)})`
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to case studies"
              >
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Divider visible on first screen heights (id="work" for anchor link from About) */}
        <div id="work">
          <DividerLabel />
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
          {showPairedHeroRow && aiMarketingCard && viuHub ? (
            <div className="mb-10 grid grid-cols-1 gap-8 md:mb-12 md:grid-cols-2 md:auto-rows-fr md:gap-10 lg:gap-12">
              <motion.div
                key={aiMarketingCard.id}
                variants={itemVariants}
                className="min-w-0 h-full"
              >
                <HomeCaseStudyCard item={aiMarketingCard} />
              </motion.div>
              <motion.div
                key={viuHub.id}
                variants={itemVariants}
                className="min-w-0 h-full"
              >
                <HomeCaseStudyCard item={viuHub} />
              </motion.div>
            </div>
          ) : (
            archiveItems
              .filter((item) => item.fullWidth)
              .map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="mb-10 md:mb-12"
                >
                  <HomeCaseStudyCard item={item} />
                </motion.div>
              ))
          )}
          
          {/* Two equal columns — reference card grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:auto-rows-fr md:gap-10 lg:gap-12">
            {archiveItems
              .filter((item) => !item.fullWidth && !isHeroPairItem(item))
              .map((item) => {
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
                      <span className="text-sm font-bold text-gray-400">TOOLS</span>
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
                      <span className="text-sm font-semibold">COMING SOON</span>
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
            )})}
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
              <a href="https://www.linkedin.com/in/jamerabradley/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity lowercase text-neutral-900">
                linkedIn
              </a>
              <span className="text-neutral-500">·</span>
              <a href="/Bradley-Jamera-Senior-Product-Designer-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity lowercase text-neutral-900">
                resume
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage 