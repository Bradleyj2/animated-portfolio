import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import CaseStudyCard from './CaseStudyCard'
import DividerLabel from './DividerLabel'
import PageMeta from './PageMeta'

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

  const archiveItems = [
    {
      id: 'viu-hub',
      title: 'VIU BY HUB',
      subtitle: 'Rebuilding Digital Insurance by driving 25% revenue growth after launch.',
      tagline: 'How do you transform digital trust in the insurance industry?',
      description: '',
      category: 'Strategic Design Leadership',
      image: '/viubyhub1.png',
      path: '/case-studies/viu-hub',
      posterStyle: 'corporate',
      dossierId: 'ARCHIVE/VIU-04',
      stamp: 'CLASSIFIED',
      coordinates: 'X-91.7, Y-67.2',
      companyName: 'VIU by Hub',
      projectType: 'Finance + Design Ops',
      cardHeading: 'VIU by Hub / Digital Insurance',
      role: 'Design Lead & Design Operations',
      year: '2022–2024',
      fullWidth: true
    },
    {
      id: 'hemispheres',
      title: 'HEMISPHERES',
      subtitle: 'When Thought Becomes Data: Mapping Mind and Decision',
      tagline: 'How do you balance two avatars controlled by one player?',
      description: '',
      category: 'Game Design & Interactive Storytelling',
      image: '/hemispheres10.png',
      path: '/case-studies/hemispheres',
      posterStyle: 'split-screen',
      dossierId: 'ARCHIVE/HEMI-01',
      stamp: 'CONFIDENTIAL',
      coordinates: 'X-47.2, Y-12.8',
      companyName: 'Hemispheres',
      projectType: 'Game Design'
    },
    {
      id: 'service-blueprint',
      title: 'SERVICE BLUEPRINT',
      subtitle: 'Turning Complexity into Clarity: Scaling Service Design across 8 departments and eliminating 93% of redundant templates.',
      tagline: 'How do you unify fragmented organizational processes?',
      description: '',
      category: 'Service Design & Organizational Systems',
      image: '/sb1.png',
      path: '/case-studies/service-blueprint',
      posterStyle: 'blueprint',
      dossierId: 'ARCHIVE/SB-02',
      stamp: 'TOP SECRET',
      coordinates: 'X-23.1, Y-45.9',
      companyName: 'Service Blueprint',
      projectType: 'Design Ops',
      cardHeading: 'Service Blueprint / Org-wide service templates',
      role: 'Service Design Lead',
      year: '2024'
    },
    {
      id: 'omnichannel',
      title: 'OMNICHANNEL STRATEGY',
      subtitle: 'Connecting Self Service and Live Support in 1 unified service\nblueprint.',
      tagline: 'How do you bridge digital and human service experiences?',
      description: '',
      category: 'Service Design & Customer Experience',
      image: '/thumbnail3.png',
      path: '/case-studies/omnichannel-strategy',
      posterStyle: 'hud',
      dossierId: 'ARCHIVE/OMNI-03',
      stamp: 'MISSION FILE',
      coordinates: 'X-78.4, Y-33.6',
      companyName: 'Omnichannel Strategy',
      projectType: 'Design Ops',
      cardHeading: 'Omnichannel Strategy / Unified service',
      role: 'Experience Design Lead',
      year: '2025'
    },
    {
      id: 'second-opinion',
      title: 'SECOND OPINION',
      subtitle: 'When Information Overwhelms Care: Rebuilding Trust in the Home\nof 18+ test users.',
      tagline: 'When user research changes everything',
      description: '',
      category: 'Healthcare & User Research',
      image: '/secondop1.png',
      path: '/case-studies/second-opinion',
      posterStyle: 'medical',
      dossierId: 'ARCHIVE/SO-05',
      stamp: 'RESTRICTED',
      coordinates: 'X-34.8, Y-89.1',
      companyName: 'Second Opinion',
      projectType: 'Healthcare',
      cardHeading: 'Second Opinion / Healthcare experience',
      role: 'UX Researcher & Designer',
      year: '2021'
    }
  ]

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
          {/* Full width VIU by Hub card */}
          {archiveItems.filter(item => item.fullWidth).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="mb-10 md:mb-12"
            >
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
                imageAspectClass="aspect-[16/9]"
              />
            </motion.div>
          ))}
          
          {/* Two equal columns — reference card grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {archiveItems.filter(item => !item.fullWidth).map((item) => {
              const aspectClass = 'aspect-[4/3]'
              return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="min-w-0"
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
                    subtitleMaxWidth={item.id === 'second-opinion' ? 500 : item.id === 'omnichannel' ? 520 : undefined}
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