import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../Navigation'
import PageMeta from '../PageMeta'
import CaseStudyLayout from '../CaseStudyLayout'

const TracePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageMeta
        title="When Thought Becomes Data: Mapping How We Think, Feel, and Decide — Mera Bradley"
        description="Led the creation of a neuroadaptive storytelling system linking brain activity to real-time outcomes, establishing a foundation for therapeutic and adaptive digital experiences."
        ogImage="/og/trace.png"
      />
      <Navigation scrollProgress={1} />
      <CaseStudyLayout
        previousCase={{
          title: "Service Blueprint Template",
          path: "/case-studies/service-blueprint"
        }}
        nextCase={{
          title: "VIU by HUB",
          path: "/case-studies/viu-hub"
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
              When Thought Becomes Data: Mapping How We Think, Feel, and Decide
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Led the creation of a neuroadaptive storytelling system linking brain activity to real-time outcomes, establishing a foundation for therapeutic and adaptive digital experiences.
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Mera Bradley</span> • Experimental Design
              </div>
              <div className="text-sm text-gray-500">
                Research Project, 2024
              </div>
            </div>
          </motion.div>

          {/* TL;DR Section */}
          <motion.div
            className="mb-20 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-full max-w-5xl border border-[#666666] rounded-lg p-8 bg-[#0a0a0a]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                {/* ROLE */}
                <div>
                  <div className="text-sm font-bold text-[#666666] uppercase tracking-wider mb-3">
                    ROLE
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Experimental Design
                  </p>
                </div>
                
                {/* PLATFORM */}
                <div>
                  <div className="text-sm font-bold text-[#666666] uppercase tracking-wider mb-3">
                    PLATFORM
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Experimental Platform
                  </p>
                </div>
                
                {/* DELIVERABLES */}
                <div className="md:col-span-2">
                  <div className="text-sm font-bold text-[#666666] uppercase tracking-wider mb-3">
                    DELIVERABLES
                  </div>
                  <ul className="text-[#666666] space-y-2.5 list-disc list-inside">
                    <li>Experimental interface</li>
                    <li>EEG data integration</li>
                    <li>Narrative system design</li>
                    <li>Personalization framework</li>
                    <li>Research documentation</li>
                  </ul>
                </div>
                
                {/* DURATION */}
                <div>
                  <div className="text-sm font-bold text-[#666666] uppercase tracking-wider mb-3">
                    DURATION
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    2024
                  </p>
                </div>
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
                src="/hemispheres1.png"
                alt="Trace platform interface with EEG visualization"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              Trace uses EEG data to create personalized narrative experiences
            </p>
          </motion.div>

          {/* Narrative Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-12">
              I designed Trace, an experimental platform that uses EEG data to create personalized narrative experiences.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The project explores how brain activity can inform interactive storytelling, creating unique experiences that adapt to individual cognitive patterns.
            </p>
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
                src="/hemispheres2.png"
                alt="EEG data processing and narrative generation system"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              The system processes EEG data to generate adaptive narrative content
            </p>
          </motion.div>

          {/* Narrative Section 2 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Real-time adaptation.</h2>
              </div>
              <div className="flex items-center">
                <p className="text-lg leading-relaxed text-gray-700">
                  The platform combines real-time EEG monitoring with interactive storytelling, creating narratives that respond to the user's cognitive state.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Image Section 3 */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="relative w-full">
              <img
                src="/hemispheres4.png"
                alt="EEG data visualization and interpretation interface"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              The interface makes complex physiological data accessible and meaningful
            </p>
          </motion.div>

          {/* Narrative Section 3 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Designing with physiological data.</h2>
              </div>
              <div className="flex items-center">
                <p className="text-lg leading-relaxed text-gray-700">
                  Designing with EEG data requires new approaches to interaction design. Key principles: making physiological data meaningful to users, creating clear feedback loops, and ensuring technology enhances rather than distracts.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              <div className="relative">
                <img
                  src="/hemispheres5.png"
                  alt="Narrative adaptation system and story generation"
                  className="w-full h-auto"
                />
              </div>
              <div className="relative">
                <img
                  src="/hemispheres9.png"
                  alt="User experience flow and interaction design"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              Physiological data became a creative medium for storytelling
            </p>
          </motion.div>

        </div>
      </CaseStudyLayout>
    </>
  );
};

export default TracePage;