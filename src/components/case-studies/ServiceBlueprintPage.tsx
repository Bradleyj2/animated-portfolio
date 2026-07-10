import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../Navigation'
import PageMeta from '../PageMeta'
import CaseStudyLayout from '../CaseStudyLayout'

const ServiceBlueprintPage = () => {
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
        title="Turning Complexity into Clarity: Scaling Service Design — Mera Bradley"
        description="Unified blueprinting practices across 8 departments, establishing a shared design language that improved collaboration and eliminated 93% of redundant templates."
        ogImage="/og/service-blueprint.png"
      />
      <Navigation scrollProgress={1} />
      <CaseStudyLayout
        previousCase={{
          title: "Hemispheres",
          path: "/case-studies/hemispheres"
        }}
        nextCase={{
          title: "Omnichannel Strategy",
          path: "/case-studies/omnichannel-strategy"
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
              Turning Complexity into Clarity: Scaling Service Design
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unified blueprinting practices across 8 departments, establishing a shared design language that improved collaboration and eliminated 93% of redundant templates.
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Mera Bradley</span> • Service Design Lead & Researcher
              </div>
              <div className="text-sm text-gray-600">
                Enterprise Initiative, 2025
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
                src="/sb1.png"
                alt="Multiple service blueprint templates showing organizational chaos"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 1] Multiple service blueprint templates showing organizational chaos across different teams.
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
              It started with a simple question: "Which service blueprint template should we use for this project?"
              In 30 minutes, seven different templates surfaced from various teams. This wasn't just a template problem. It was a communication breakdown.
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
                src="/sb2.png"
                alt="Modular service blueprint system with three complexity levels"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 2] Modular service blueprint system with three complexity levels.
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
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Creating a shared language.</h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
                I interviewed 12 people who used blueprints but didn't create the templates. The insight: this wasn't about choosing the "best" template but creating a shared language for service understanding.
              </p>
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
                src="/sb3.png"
                alt="Adoption strategy and champions program"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 3] Adoption strategy and champions program.
            </p>
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
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-left">Visual hierarchy matters.</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-12 text-left">
                  Visual hierarchy mattered more than content completeness. Project managers and engineers could parse complex information if visually organized, but simple information in poor layouts caused confusion.
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
                src="/sb4.png"
                alt="Results dashboard showing adoption metrics"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 4] Results dashboard showing adoption metrics.
            </p>
          </motion.div>

          {/* Narrative Section 4 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">From inconsistent artifacts to a shared standard.</h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
                Service blueprints were created differently across teams, making them hard to use, compare, or build on. I introduced a unified format supported by a component library, clear documentation, and a champions program to help teams adopt it in their daily work. Over 50+ people across 8 departments began using the system, leading to full adoption, less time spent aligning in meetings, and a threefold increase in blueprint creation and sharing.
              </p>
            </div>
          </motion.section>

          {/* The Results Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-lg text-gray-600">People using the system</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">8</div>
                <div className="text-lg text-gray-600">Departments</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">3x</div>
                <div className="text-lg text-gray-600">Increase in blueprint creation and sharing</div>
              </div>
            </div>
          </motion.section>

        </div>
      </CaseStudyLayout>
    </>
  );
};

export default ServiceBlueprintPage;