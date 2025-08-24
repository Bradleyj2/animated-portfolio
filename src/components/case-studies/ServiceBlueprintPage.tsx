import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'

const ServiceBlueprintPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-8 py-16 pt-32">
        <div className="w-full">
          {/* Magazine-Style Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category Label */}
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 mt-16">
              Service Design & Organizational Systems
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight font-serif">
              Service Design Blueprint Kit: Unifying Organizational Communication
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-serif italic">
              How a simple template standardization transformed cross-team collaboration and service design consistency
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">By Mera Bradley</span> • Service Designer
              </div>
              <div className="text-sm text-gray-500">
                March 2025 — July 2025
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                <img
                                      src="/sb1.png"
                  alt="Service Blueprint Templates"
                  className="w-full h-auto rounded-lg mb-2"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Note: These animated images are derived from live artifacts, with sensitive data removed for security.
                </div>
              </div>
              <p className="text-sm text-gray-500 italic text-left mb-16">Figure 1: Creation of a service design blueprint kit that can be used organization wide, across teams.</p>

              
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Column - Text */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Discovery That Changed Everything</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    It started with a simple question during a cross-team workshop: "Which service blueprint template should we use for this project?" What followed was an uncomfortable silence, then a flurry of conflicting suggestions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">The shocking reality:</span> In the span of 30 minutes, I counted four different service blueprint templates being referenced within one pod—and that's just one pod within the entire company. 
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">My hypothesis:</span> This wasn't just a template problem. It was a communication breakdown that was fragmenting how we understood and designed our services.
                  </p>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <img
                      src="/sb2.png"
                      alt="Workshop discovery moment"
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Note: These animated images are derived from live artifacts, with sensitive data removed for security.
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-left">Figure 2: Four different service blueprint formats showing structural inconsistencies and terminology variations.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Column - Text */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Uncovering the Hidden Cost of Design Fragmentation</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">My investigation revealed:</span> 4+ service blueprint formats in active use, zero consistency in terminology or structure, 2+ hour average meetings to align on shared understanding, redundant work being done in parallel by siloed teams.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">The real business impact:</span> Launch delays caused by misaligned service maps, engineering working without context, cross-team miscommunication creating product mismatches. I reframed this as a company-wide communication breakdown, not just a design problem.
                  </p>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <img
                      src="/sb3.png"
                      alt="Screenshot of 3 different blueprint formats"
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Note: These animated images are derived from live artifacts, with sensitive data removed for security.
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-left">Figure 3: Cross-team workshop revealing multiple templates being used, creating confusion and communication breakdown.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Empathy Through Research</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold">The challenge:</span> How do you conduct research when everyone assumes their system works? I interviewed 10 blueprint consumers (not creators). This flipped the problem: it wasn't about structure—it was about clarity.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">Insight:</span> We needed a shared language—not a one-size-fits-all format.
                </p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="relative group">
                <img
                                      src="/sb4.png"
                  alt="Side-by-side preview of three formats"
                  className="w-full h-auto rounded-lg mb-2"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Note: These animated images are derived from live artifacts, with sensitive data removed for security.
                </div>
              </div>
              <p className="text-sm text-gray-500 italic text-left mb-16">Figure 4: Gathering insight through user interviews on how users interact with the blueprints that were in circulation.</p>

              
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Column - Text */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Designing for Organizational Adoption</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">Design challenge:</span> Create a blueprint system usable by designers, engineers, PMs, sales, and execs. 
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">My approach:</span> Stakeholder mapping, use case analysis, cognitive load testing.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">Solution:</span> A modular system with progressive complexity:
                  </p>
                  <ul className="space-y-2 ml-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Quick Reference Card (exec/sales)
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Collaboration Format (team workshops)
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Comprehensive Blueprint (design/dev)
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Modular designs met people where they were.
                  </p>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <img
                      src="/sb5.png"
                      alt="Screenshot of Miro component library"
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Note: These animated images are derived from live artifacts, with sensitive data removed for security.
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-left">Figure 5: Miro component library showcasing modular blueprint templates with accessibility features and backwards compatibility.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >

              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Scaling Adoption Through Strategic Implementation</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold">Challenge:</span> 200+ people, zero mandate. 
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold">Adoption Strategy:</span> Miro library with modular components, self-guided documentation by role, feedback loop + version control.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">Critical move:</span> Backward compatibility—old formats didn't break, new ones unified. Accessibility and backwards compatibility drove adoption.
                </p>
              </div>
              
              <div className="relative group">
                <img
                                      src="/sb6.png"
                  alt="Strategic implementation and adoption metrics"
                  className="w-full h-auto rounded-lg mb-2"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Note: These animated images are derived from live artifacts, with sensitive data removed for security.
                </div>
              </div>
              <p className="text-sm text-gray-500 italic text-left mb-8">Figure 6: Strategic implementation dashboard showing adoption metrics, user engagement, and organizational impact of the unified blueprint system.</p>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Column - Text */}
                <div className="flex-1 lg:flex-none lg:w-96">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">What began as a template problem led to:</span> Better cross-team handoffs, widespread service literacy, confidence in documentation, democratized design practices.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The new system improved clarity and trust across disciplines.
                  </p>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <img
                      src="/sb7.png"
                      alt="Cross-team workshop with stakeholders"
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Note: These animated images are derived from live artifacts, with sensitive data removed for security.
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-left">Figure 7: Cross-team workshop with stakeholders collaborating around the new blueprint.</p>
                </div>
              </div>
            </motion.div>



            {/* Footer CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Link to="/home">
                <motion.button
                  className="px-8 py-4 bg-transparent text-gray-700 font-bold rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Home
                </motion.button>
              </Link>
                          <Link to="/case-studies/viu-hub" onClick={() => window.scrollTo(0, 0)}>
              <motion.button
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg border border-gray-300 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Next Case Study →
              </motion.button>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceBlueprintPage 