import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../Navigation'
import PageMeta from '../PageMeta'
import CaseStudyLayout from '../CaseStudyLayout'

const OmnichannelStrategyPage = () => {
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
        title="Connecting Self Service and Live Support — Mera Bradley"
        description="Led the early redesign and mapping of customer support across touchpoints, eliminating context breaks between digital and human channels."
        ogImage="/og/omnichannel.png"
      />
      <Navigation />
      <CaseStudyLayout
        previousCase={{
          title: "Hemispheres",
          path: "/case-studies/hemispheres"
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
              Connecting Self Service and Live Support
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-full">
              Led the early redesign and mapping of customer support across touchpoints, eliminating context breaks between digital and human channels.
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Mera Bradley</span> • Strategy & Design Lead
              </div>
              <div className="text-sm text-gray-500">
                Enterprise Initiative, 2025
              </div>
            </div>
          </motion.div>

          {/* Intro paragraph - right aligned above image */}
          <motion.div
            className="mb-8 flex justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 max-w-[66.67%] text-right">
              A major utility company came to us with a problem. Their customers would start solving issues online, hit a wall, call for help, and then... start completely over. The agent had no idea what the customer had already tried, what information they'd entered, or where they got stuck. It was like watching someone retell their entire story to a new person every time they switched channels.
            </p>
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
                src="/omni1.png"
                alt="Omnichannel strategy framework overview"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              The omnichannel strategy unifies customer experiences across all touchpoints
            </p>
          </motion.div>

          {/* Narrative Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The company wanted to reduce call handle times. But the real problem wasn't the calls themselves, it was the broken handoff between digital and human touchpoints. Customers were frustrated. Agents were frustrated. Everyone was wasting time repeating information that should have been captured the first time.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I decided we needed to design a smarter way to connect these experiences. A strategy that would make every channel feel like one continuous conversation, not a series of disconnected interactions.
            </p>
          </motion.section>


          {/* Image Section 2 */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-full">
              <img
                src="/omni.png"
                alt="Omnichannel strategy kickoff and planning session"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              Strategy kickoff session: mapping out the problem space
            </p>
          </motion.div>

          {/* Narrative Section 3 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Talking to the people who live it.</h2>
              </div>
              <div className="flex items-center">
                <p className="text-lg leading-relaxed text-gray-700">
                  We interviewed 18 customer service representatives. They told me about the frustration of asking customers to repeat information they'd already entered online. They described the awkward pauses while customers tried to remember what they'd typed. They shared how much time was wasted on information gathering instead of problem solving. The insights were clear: we needed to design a system that captured context and made it instantly available.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Image Section 3 */}
          <motion.div
            className="mb-20 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative w-full">
              <img
                src="/omni4.png"
                alt="User interview analysis and customer insights visualization"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              Insights from 18 CSR interviews showed the real pain points behind the data
            </p>
          </motion.div>

          {/* Narrative Section 4 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Mapping the invisible handoff.</h2>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    We created journey maps for both customers and agents. The customer journey showed frustration points where context was lost. The agent journey revealed inefficiencies where information gathering took priority over problem solving.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Then, we designed a unified service blueprint that showed how data could flow seamlessly between channels, making every interaction feel connected, not disconnected.
                  </p>
                </div>
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
                src="/omni2.png"
                alt="Customer and CSR journey mapping visualization"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              Two journey maps and one unified service blueprint, connecting the experiences
            </p>
          </motion.div>

          {/* Narrative Section 5 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The strategy I designed wasn't just about connecting channels, but designing a system where context travels with the customer. Where agents see what customers tried online. Where data flows seamlessly between touchpoints. Where every interaction builds on the last one, instead of starting from scratch.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The result? A framework that reduces call handle times, improves customer satisfaction, and makes both customers and agents feel like they're part of one continuous conversation. Because that's what omnichannel should really mean, not just multiple channels, but one unified experience.
            </p>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">THE RESULT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">18</div>
                <div className="text-lg text-gray-600">CSR interviews conducted</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">2</div>
                <div className="text-lg text-gray-600">Journey maps created</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">1</div>
                <div className="text-lg text-gray-600">Unified service blueprint</div>
              </div>
            </div>
          </motion.section>

        </div>
      </CaseStudyLayout>
    </>
  );
};

export default OmnichannelStrategyPage;