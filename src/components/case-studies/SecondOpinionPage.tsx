import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../Navigation'
import PageMeta from '../PageMeta'
import CaseStudyLayout from '../CaseStudyLayout'

const SecondOpinionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    // Force white background for case study page, overriding any scroll-based theme
    document.documentElement.style.setProperty('background-color', '#ffffff', 'important')
    document.body.style.setProperty('background-color', '#ffffff', 'important')
    document.documentElement.style.setProperty('--scroll-bg-color', '#ffffff')
    
    return () => {
      // Cleanup: reset to default when leaving page
      document.documentElement.style.removeProperty('background-color')
      document.body.style.removeProperty('background-color')
      document.documentElement.style.removeProperty('--scroll-bg-color')
    }
  }, [])
  return (
    <>
      <PageMeta
        title="When Information Overwhelms Care: Rebuilding Trust in the Home — Mera Bradley"
        description="Researched and prototyped a caregiver platform simplifying critical decisions and establishing trust centered patterns through study with 18+ users."
        ogImage="/og/second-opinion.png"
      />
      <Navigation scrollProgress={1} />
      <CaseStudyLayout
        previousCase={{
          title: "VIU by HUB",
          path: "/case-studies/viu-hub"
        }}
        nextCase={{
          title: "Hemispheres",
          path: "/case-studies/hemispheres"
        }}
      >
        <div className="w-full">
          {/* Magazine-Style Header - Full Width */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px] px-6 md:px-6 lg:px-[98px] xl:px-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category Label */}
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Case study —
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              When Information Overwhelms Care: Rebuilding Trust in the Home
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Researched and prototyped a caregiver platform simplifying critical decisions and establishing trust centered patterns through study with 18+ users.
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Mera Bradley</span> • Product Designer & UX Researcher
              </div>
              <div className="text-sm text-gray-500">
                Healthcare mobile app, 2021
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="mb-12 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full">
              <img
                src="/secondop1.png"
                alt="Second Opinion platform interface"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 1] Second Opinion platform is designed for trust and accessibility.
            </p>
          </motion.div>

          {/* Narrative Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-end">
              <p className="text-lg leading-relaxed text-gray-700 max-w-[66.67%] text-left">
                Second Opinion is a caregiving app designed to help professional and family caregivers manage the daily responsibilities of supporting someone's health. I led the design of the product, creating a system that brings together vitals, medications, appointments, and care notes in one place. The project focused on making complex medical information easier to understand and act on, while building an experience that caregivers could rely on to stay organized, informed, and connected throughout the care journey.
              </p>
            </div>
          </motion.section>

          {/* Image Section 2 */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-full">
              <img
                src="/secondop8.png"
                alt="Hand-drawn sketches with annotations for medical compliance and calendar features"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 2] Hand-drawn sketches with annotations for medical compliance and calendar features.
            </p>
          </motion.div>

          {/* Building trust through clarity + User quotes image - 50/50 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Building trust through clarity.</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Caregivers needed to understand what information was collected and how it was used. I designed clear privacy explanations and transparent data states so users could confidently track and share sensitive health information.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/secondop3.png"
                  alt="User quotes from caregiver interviews"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 text-left mt-4">
                  [fig 3] User quotes from interviews.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Image Section 3 - Key themes */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              <div className="relative">
                <img
                  src="/secondop2.png"
                  alt="Patient consultation workflow design"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 text-left mt-4">
                  [fig 4] Key themes from affinity mapping.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Narrative Section 3 - same positioning as VIU "Improving clarity" (right column, left-aligned) */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div></div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-left">Simplifying complex workflows.</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-12 text-left">
                  Caregiving tasks often involve multiple steps and decisions. I redesigned key workflows into clear, manageable actions, using structure and progress cues to help caregivers understand what to do and what comes next.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Image Section 4 */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="relative w-full">
              <img
                src="/secondop7.png"
                alt="Second Opinion platform interface and user research insights"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 5] Second Opinion wireframes
            </p>
          </motion.div>

        </div>
      </CaseStudyLayout>
    </>
  );
};

export default SecondOpinionPage;