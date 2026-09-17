import { motion } from 'framer-motion'
import { useState, useEffect, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import DividerLabel from './DividerLabel'
import PageMeta from './PageMeta'
import AiMarketingThumbnail from './thumbnails/AiMarketingThumbnail'
import ViuThumbnail from './thumbnails/ViuThumbnail'
import SecondOpinionThumbnail from './thumbnails/SecondOpinionThumbnail'
import ServiceBlueprintThumbnail from './thumbnails/ServiceBlueprintThumbnail'
import OmnichannelThumbnail from './thumbnails/OmnichannelThumbnail'
import { getHomeArchiveItems, isSideProjectItem, type HomeArchiveItem } from '../data/homeArchiveItems'

const thumbnailMap: Record<string, ReactNode> = {
  'ai-marketing-control-center': <AiMarketingThumbnail />,
  'viu-hub': <ViuThumbnail />,
  'second-opinion': <SecondOpinionThumbnail />,
  'service-blueprint': <ServiceBlueprintThumbnail />,
  'omnichannel': <OmnichannelThumbnail />,
}

/**
 * Homepage work row — Lola Jiang split (text | large media, alternating)
 * + Kyson Dana hierarchy (large headline, pill CTA, hover scale).
 */
function HomeWorkRow({ item }: { item: HomeArchiveItem }) {
  const heading = item.cardHeading || item.title
  const body = item.subtitle || item.tagline
  const roleYear = [item.role, item.year].filter(Boolean).join(' · ')
  const imageOnRight = item.imageRight !== false
  const thumbnail = thumbnailMap[item.id]

  const textPanel = (
    <div className="work-row-text flex flex-col justify-center md:col-span-5">
      <div className="work-row-rule border-l pl-5 md:pl-7">
        <p className="work-row-eyebrow mb-3 text-xs font-medium uppercase tracking-widest">
          {item.projectType || item.category}
        </p>
        <h2 className="work-row-heading mb-4 text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] md:text-3xl lg:text-[2.5rem]">
          {heading}
        </h2>
        {body && (
          <p className="work-row-body mb-4 max-w-md text-[0.9375rem] font-normal leading-relaxed md:text-base">
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
          <p className="work-row-metric mb-3 text-sm font-medium">{item.metric}</p>
        )}
        {roleYear && (
          <p className="work-row-meta text-xs">{roleYear}</p>
        )}
        <span className="work-row-cta mt-8 inline-flex w-fit items-center rounded-full px-6 py-3 text-sm font-medium shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 md:text-base">
          {item.draft || item.comingSoon ? 'Coming soon' : 'View project →'}
        </span>
      </div>
    </div>
  )

  const mediaPanel = (
    <div className="md:col-span-7">
      <div className="work-row-media custom-project-thumbnail relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_16px_48px_rgba(0,0,0,0.14)]">
        {thumbnail ? (
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            {thumbnail}
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        )}
      </div>
    </div>
  )

  const row = (
    <Link
      to={item.path}
      className="group grid grid-cols-1 items-center gap-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 md:grid-cols-12 md:gap-10 lg:gap-14"
    >
      {imageOnRight ? (
        <>
          {textPanel}
          {mediaPanel}
        </>
      ) : (
        <>
          {mediaPanel}
          {textPanel}
        </>
      )}
    </Link>
  )

  if (!item.draft) return row

  return (
    <div className="relative">
      <span className="absolute right-3 top-3 z-10 rounded bg-amber-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-950">
        Draft
      </span>
      {row}
    </div>
  )
}

const HomePage = () => {
  const location = useLocation()
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
      
      // Drive html.light-mode for divider/nav/work-row CSS
      document.documentElement.classList.toggle('light-mode', progress > 0.5)
    }
    
    handleScroll() // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.classList.remove('light-mode')
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

  const workItems = getHomeArchiveItems().filter((item) => !isSideProjectItem(item))

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

        {/* Divider + work share one scroll-synced surface (no black slab mid-transition) */}
        <div id="work" className="bg-transparent">
          <DividerLabel label="Selected Work" />
        </div>

        <motion.main 
          className="w-full case-studies-section bg-transparent transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Lola-style stacked split rows + Kyson hierarchy */}
        <div className="mx-auto max-w-screen-xl px-6 pb-20 md:px-10 md:pb-24 lg:px-12 lg:pb-32 xl:px-16">
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-28">
            {workItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className="min-w-0">
                <HomeWorkRow item={item} />
              </motion.div>
            ))}
          </div>
        </div>
        </motion.main>
      </div>
    </>
  )
}

export default HomePage 