import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../Navigation'
import PageMeta from '../PageMeta'
import CaseStudyLayout from '../CaseStudyLayout'

const ViuHubPage = () => {
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
        title="Rebuilding Digital Insurance — Mera Bradley"
        description="Directed a full design transformation aligning product, systems, and experience, simplifying critical financial decisions and driving 25% revenue growth after launch."
        ogImage="/og/viu-hub.png"
      />
      <Navigation scrollProgress={1} />
      <CaseStudyLayout
        previousCase={{
          title: "Omnichannel Strategy",
          path: "/case-studies/omnichannel-strategy"
        }}
        nextCase={{
          title: "Second Opinion",
          path: "/case-studies/second-opinion"
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
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">
              Case study —
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight">
              Rebuilding Digital Insurance
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Directed a full design transformation aligning product, systems, and experience, simplifying<br />
              critical financial decisions and driving 25% revenue growth after launch.
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Mera Bradley</span> • Product Design Lead & Design Operations
              </div>
              <div className="text-sm text-gray-600">
                Website, Mobile app (iOS, Android), 2022–2024
              </div>
            </div>
          </motion.div>

          {/* Full-width Image */}
          <motion.div
            className="mb-24 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full">
              <img
                src="/viubyhub1.png"
                alt="VIU by HUB platform overview"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
              [fig 1] VIU by HUB platform overview.
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
              VIU by HUB is a digital insurance platform created by HUB International to help individuals compare coverage options and enroll in plans that support their health and financial needs. I led the design transformation of the platform, establishing its first unified design system and scaling the design practice to support rapid product growth. This work focused on creating consistent, reusable components and clearer decision flows, enabling teams to build more efficiently while improving clarity and confidence for users navigating complex insurance choices.
            </p>
            <div className="-mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]">
              <div className="relative w-full">
                <img
                  src="/viubyhub2.png"
                  alt="VIU by HUB platform"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
                [fig 2] VIU by HUB user journey and experience.
              </p>
            </div>
          </motion.section>

          {/* Narrative Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-lg font-bold leading-relaxed text-gray-700">
                  Insurance decisions are often complex and difficult to navigate, especially when users are comparing coverage, costs, and eligibility.
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg leading-relaxed text-gray-700">
                  As the platform grew, each new feature introduced additional complexity, making it harder for users to move forward with confidence and for teams to build efficiently. I saw an opportunity to address this at the systems level by creating a unified design foundation that improved clarity for users and scalability for the organization.
                </p>
              </div>
            </div>
            <div className="mt-12 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]">
              <div className="relative w-full">
                <img
                  src="/viubyhub4.png"
                  alt="VIU by HUB user needs evaluation / file management in HUB environment"
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-4 px-6 text-left text-sm text-gray-500 md:px-6 lg:px-[98px] xl:px-[98px]">
                [fig 3] VIU by HUB user needs evaluation.
              </p>
            </div>
          </motion.section>

          {/* Narrative Section 2 - body text 2/3 viewport width */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Building a system that could scale.</h2>
            <div className="viu-hub-narrative-body text-lg leading-relaxed text-gray-700 max-w-[80ch]">
              <p className="mb-6">
                Instead of designing isolated screens, we created a unified design system that defined how the product communicated, behaved, and evolved.
              </p>
              <p className="mb-6">
                This system became the shared language connecting product, engineering, and leadership.
              </p>
              <p className="mb-6">
                It included:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>A comprehensive component library for rapid, consistent product development</li>
                <li>Interaction patterns designed to support clarity and decision confidence</li>
                <li>Documentation and governance models enabling adoption across teams</li>
              </ul>
              <p className="mb-6">
                What once took weeks could now be done in days.
              </p>
              <p>
                Our various internal teams stopped rebuilding and started accelerating.
              </p>
            </div>
            <div className="mt-12 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]">
              <div className="relative w-full">
                <img
                  src="/viubyhub10.png"
                  alt="VIU by HUB design system documentation"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
                [fig 4] VIU by HUB design system: typography, colors, components, and icon library.
              </p>
              <div className="relative mt-10 w-full">
                <img
                  src="/viubyhub11.png"
                  alt="VIU by HUB design system foundations and pattern specifications"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
                [fig 5] VIU by HUB design system—foundations, layout, and core pattern specs.
              </p>
              <div className="relative mt-10 w-full">
                <img
                  src="/viubyhub12.png"
                  alt="VIU by HUB design system usage guidelines and reference"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
                [fig 6] VIU by HUB design system—usage guidelines and implementation reference.
              </p>
            </div>
          </motion.section>

          {/* Narrative Section 3 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div></div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-left">Improving clarity at key decision points.</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-12 text-left">
                  Through continuous iteration and user feedback, we refined the experience around critical flows such as comparing plans, reviewing coverage, and completing enrollment. These improvements reduced friction, clarified next steps, and helped users make informed decisions with greater confidence.
                </p>
              </div>
            </div>
            <div className="mt-12 -mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]">
              <div className="relative w-full">
                <img
                  src="/viubyhub0.png"
                  alt="VIU by HUB improving clarity at key decision points"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]">
                [fig 7] VIU by HUB improving clarity at key decision points.
              </p>
            </div>
          </motion.section>

          {/* Narrative Section 4 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Why this mattered.</h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
              This work improved both the user experience and the organization's ability to build and scale effectively. It demonstrated how a unified design system can strengthen usability, accelerate delivery, and create a more reliable foundation for future growth.
            </p>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">25%</div>
                <div className="text-lg text-gray-600">Revenue growth after launch</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-lg text-gray-600">Components</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-lg text-gray-600">Usability tests conducted</div>
              </div>
            </div>
          </motion.section>

        </div>
      </CaseStudyLayout>
    </>
  );
};

export default ViuHubPage;
