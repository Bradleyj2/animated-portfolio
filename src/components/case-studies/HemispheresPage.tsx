import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../Navigation'
import PageMeta from '../PageMeta'
import CaseStudyLayout from '../CaseStudyLayout'

const HemispheresPage = () => {
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
        title="Hemispheres — Mera Bradley"
        description="Case study: Hemispheres interactive experience. Creating immersive digital narratives that explore the intersection of technology and human emotion."
        ogImage="/og/hemispheres.png"
      />
      <Navigation scrollProgress={1} />
      <CaseStudyLayout
        previousCase={{
          title: "Second Opinion",
          path: "/case-studies/second-opinion"
        }}
        nextCase={{
          title: "Service Blueprint Template",
          path: "/case-studies/service-blueprint"
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
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              Game design document —
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Hemispheres
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed w-full">
              Created a neuroadaptive storytelling system into real-time narrative outcomes, laying the groundwork for therapeutic and adaptive experiences.
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Mera Bradley</span> • Lead Game Designer
              </div>
              <div className="text-sm text-gray-400">
                Game Design Project, 2025–2026
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
                src="/hemispheres10.png"
                alt="Logic and Intuition characters representing different parts of the mind"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 1] Logic and Intuition characters representing different parts of the mind.
            </p>
          </motion.div>

          {/* Narrative Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-12 max-w-[80ch] ml-auto text-right">
              Hemispheres is a narrative-driven video game I am developing that explores how environments, memory, and player choice shape emotional experience. It is designed to experiment with how mechanics, visual systems, and interactive storytelling can work together to create meaning through play. The project focuses on creating cohesive world logic, intuitive interaction patterns, and a scalable design framework that supports both gameplay and narrative, while documenting the process from early concept through prototype and iteration.
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
                alt="Logic and Intuition characters working together"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 2] Logic and Intuition characters working together.
            </p>
          </motion.div>

          {/* Narrative Section 2 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Dual control, shared limits.</h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
                You control Logic and Intuition at the same time, but only one ability can be used at a time. Like real decisions, acting on one means letting go of the other.
              </p>
            </div>
          </motion.section>

          {/* Game UI Wireframe */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="relative w-full">
              <img
                src="/hemispheres1.png"
                alt="Game UI wireframe showing dual function mechanics"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 3] Game UI wireframe showing dual function mechanics.
            </p>
          </motion.div>

          {/* Image Section 3 */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative w-full">
              <img
                src="/hemispheres.png"
                alt="Visual representation of psychological spaces in Hemispheres"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 4] Visual representation of psychological spaces in Hemispheres.
            </p>
          </motion.div>

          {/* Narrative Section 3 - same positioning as VIU "Improving clarity" (right column, left-aligned in block) */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div></div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-left">Worlds shaped by player progress.</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-12 text-left">
                  Locations like the Library of Ashes, the Frozen Stage, and the Desert of Mirrors evolve over time, using environmental changes to represent growth and resolution.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Image Section 4 */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="relative w-full">
              <img
                src="/hemispheres5.png"
                alt="Boss emotions within the game"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 5] Boss emotions users will face within the game.
            </p>
          </motion.div>

          {/* Narrative Section 4 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Progress through confrontation, not just combat.</h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
                While some encounters involve action, others are resolved through presence and action. Players must decide when to attack and when to face challenges without force, making engagement itself the core mechanic.
              </p>
            </div>
          </motion.section>

          {/* Final Image */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <div className="relative w-full">
              <img
                src="/hemispheres9.png"
                alt="Final integration scene in Hemispheres"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 6] Final integration scene in Hemispheres.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">WE WERE BUSY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">2</div>
                <div className="text-lg text-gray-600">Characters controlled simultaneously</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-lg text-gray-600">Psychological spaces designed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-lg text-gray-600">Emotional boss encounters</div>
              </div>
            </div>
          </motion.section>



        </div>
      </CaseStudyLayout>
    </>
  );
};

export default HemispheresPage;