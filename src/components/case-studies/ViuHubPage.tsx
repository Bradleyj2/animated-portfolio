import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'

const ViuHubPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <div className="pt-[20%] pb-16 px-[15%]">
        <div className="w-full">
          {/* Title Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Column - Title */}
            <div className="w-[800px] flex-shrink-0">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6 font-sans">
                CASE STUDY - VIU by HUB
              </h1>
            </div>
            
            {/* Spacer */}
            <div className="flex-1"></div>
            
            {/* Right Column - Information */}
                          <div className="w-[182px] flex-shrink-0">
              <div className="text-sm text-gray-500 mb-4">004</div>
              <div className="text-lg font-bold text-gray-900 mb-4">INFORMATION</div>
                              <div className="space-y-2 text-sm text-gray-700">
                  <div className="font-semibold">ROLE</div>
                  <div>Strategic Design Leader</div>
                  <div>Trust Systems Architect</div>
                  <div>Design Ops Lead</div>
                  <hr className="border-gray-300 my-2" />
                  <div className="font-semibold">INDUSTRY</div>
                  <div>InsurTech</div>
                  <hr className="border-gray-300 my-2" />
                  <div className="font-semibold">PROJECT TYPE</div>
                  <div>Trust System Redesign</div>
                  <div>Digital Platform</div>
                  <hr className="border-gray-300 my-2" />
                  <div className="font-semibold">DATE</div>
                  <div>March 2022-January 2024</div>
                </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
                                  src="/viubyhub1.png" 
              alt="Insurance platform interface" 
              className="w-full h-auto rounded-lg mb-2"
            />
            <p className="text-sm text-gray-500 italic text-left">Figure 1: VIU by HUB insurance platform interface showing trust signals and transparent information architecture.</p>
          </motion.div>

          {/* The Problem */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 lg:flex-none lg:w-96 space-y-6 text-gray-700 leading-relaxed">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem: The Digital Trust Gap</h2>
                <p>
                  Sarah, like millions of others, faced a fundamental "trust gap" in digital insurance services. Not just confusion about jargon, but a deeper crisis of confidence in making high-stakes financial decisions through digital interfaces.
                </p>
                <p>
                  <span className="font-bold">The core issue:</span> Insurance customers experienced overwhelming choices, hidden terms, lack of transparency, and zero guidance—creating cognitive barriers that prevented confident decision-making. The industry had created digital systems that prioritized operational efficiency over user trust and clarity.
                </p>
                <p>
                  This project aimed to design for clarity, trustworthiness, and accessibility—just like neurotherapeutics, it was about creating systems that reduce cognitive load and build confidence in complex decisions.
                </p>
              </div>
              
              <div className="flex-1">
                <img 
                                      src="/viubyhub2.png" 
                  alt="User overwhelmed by insurance complexity" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 2: A user looking overwhelmed by the complexity of insurance processes.</p>
              </div>
            </div>
          </motion.section>

          {/* The Challenge */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge: Strategic Design Leadership</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900">
                How do you re-architect digital trust in high-stakes financial systems?
              </p>
              <p>
                This wasn't about incremental improvements—it was about fundamentally restructuring how trust, transparency, and usability intersect in complex insurance systems. We needed to align cross-functional teams around a shared vision of user-centered trust design.
              </p>
              <p className="font-semibold text-gray-900">
                Our mission: Transform the insurance experience from anxiety-inducing to confidence-building through strategic design leadership.
              </p>
            </div>
          </motion.section>

          {/* The Solution */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Process: Strategic Design Leadership in Action</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Research Operations & Trust Mapping</h3>
                <p>
                  I structured comprehensive studies with customers and stakeholders, mapping every emotional touchpoint of the insurance journey. We discovered that people didn't just need information—they needed reassurance and clarity at moments of decision. This research revealed critical trust pain points in the insurance journey.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Systems Mapping & Trust Signal Audit</h3>
                <p>
                  Through journey mapping and trust signal audits, I identified where the digital experience broke down user confidence. We mapped the entire insurance ecosystem, from initial awareness to policy management, identifying opportunities to inject transparency and reduce cognitive load.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Design Leadership & Cross-Functional Alignment</h3>
                <p>
                  I aligned cross-functional teams (product, engineering, design, compliance) around a shared vision of user-centered trust design. This involved creating annotated wireframes, trust signal comparisons, and simplified flow diagrams that showed how the redesigned system would reduce friction and build confidence.
                </p>
                <ul className="space-y-2 ml-6 mt-3">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Trust Anchors:</span> Strategic placement of transparency signals and clear information hierarchy
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Accessibility Wins:</span> Simplified language, clear navigation, and reduced cognitive load
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Scalable Components:</span> Design system that operationalized trust across all touchpoints
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <img 
                                    src="/viubyhub3.png" 
                alt="Design system components and user flows" 
                className="w-full h-auto rounded-lg mb-2"
              />
              <p className="text-sm text-gray-500 italic text-left">Figure 3: Design system components and documentation showcasing the unified design approach.</p>
            </div>
          </motion.section>

          {/* The Impact */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 space-y-8 text-gray-700 leading-relaxed">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impact: Trust Metrics & Qualitative Wins</h2>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quantitative Outcomes</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>40% improvement in user engagement</strong> through reduced cognitive load</li>
                    <li>• <strong>60% reduction in support tickets</strong> due to clearer information architecture</li>
                    <li>• <strong>Significant increase in quote completion rates</strong> on redesigned trust-focused pages</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Qualitative Wins & Trust System Operationalization</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      <strong>Stakeholder alignment</strong> around user-centered trust design principles
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      <strong>Clearer trust signals</strong> throughout the insurance journey
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      <strong>Accessible flows</strong> that reduced cognitive barriers for all users
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      <strong>Design system operationalization</strong> that created scalability and consistency
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Team Efficiency</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Unified fragmented design systems across growing teams
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Reduced design debt and inconsistencies
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Created comprehensive documentation that accelerated onboarding
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex-1">
                <img 
                                      src="/viubyhub5.png" 
                  alt="Impact metrics and achievements" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 5: Impact metrics and achievements showcasing the success of the VIU by HUB platform.</p>
              </div>
            </div>
          </motion.section>

                    {/* The Journey */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6 text-gray-700 leading-relaxed">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Journey: From Launch to Leadership</h2>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 1: Foundation</h3>
                  <p>
                    Built the MVP with engaging landing pages and clear insurance shopping journeys.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 2: Refinement</h3>
                  <p>
                    Post-launch user research revealed pain points, leading to strategic improvements in content, design, and usability.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 3: Growth</h3>
                  <p>
                    As design lead for the quoting experience, I collaborated closely with developers to implement continuous improvements alongside new feature releases.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 4: Scale</h3>
                  <p>
                    Unified design systems across the growing organization, creating a single source of truth that supported both creativity and consistency.
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <img 
                                      src="/viubyhub4.png" 
                  alt="Project timeline and growth phases" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 4: Project growth phases showing the evolution from MVP to scaled platform.</p>
              </div>
            </div>
          </motion.section>





          {/* The Transformation */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Transformation: Before and After</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-900 mb-3">Before</h3>
                  <p>Users felt overwhelmed, confused, and abandoned their insurance search.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-900 mb-3">After</h3>
                  <p>Users confidently navigate their insurance options, compare plans with ease, and complete purchases with trust.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Lessons */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Lessons: What Made the Difference</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="font-semibold">Start with empathy, not features</span> — Understanding user emotions was more valuable than any technical specification
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="font-semibold">Iterate relentlessly</span> — Our biggest wins came from continuous refinement based on real user feedback
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="font-semibold">Design systems as growth enablers</span> — Investing in consistency and documentation paid dividends as we scaled
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="font-semibold">Collaboration over perfection</span> — Working closely with developers and stakeholders created solutions that actually shipped
                </li>
              </ul>
            </div>
          </motion.section>

          {/* The Legacy */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legacy: Simple, But Powerful</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                VIU by HUB's success came from a deceptively simple principle: make complex things feel easy.
              </p>
              <p>
                We didn't just redesign a website. We reimagined how people experience insurance. By treating every interaction as an opportunity to build trust and provide clarity, we transformed one of life's most frustrating necessities into a confident, informed decision.
              </p>
              <p className="font-semibold text-gray-900">
                The result? A platform where users don't just buy insurance. They understand it, trust it, and feel good about their choice.
              </p>
              <p>
                That's the power of thoughtful design: turning complexity into clarity, one user at a time.
              </p>
            </div>
          </motion.section>

          {/* Why This Matters */}
          <motion.section
            className="mb-24 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">📌 Why This Matters</h2>
              <div className="space-y-4 text-blue-800">
                <p>
                  This project represents an early demonstration of my ability to bridge human psychology, technology, and system trust—core competencies for therapeutic neurotech design.
                </p>
                <p>
                  <strong>Just as this project restructured digital trust in insurance, my future work at MIT will reimagine trust in therapeutic neurotech—ensuring clarity, safety, and adoption in clinical contexts.</strong>
                </p>
                <p>
                  The strategic design leadership skills developed here—research operations, systems mapping, cross-functional alignment, and trust system operationalization—are directly transferable to creating neurotherapeutic interfaces that build user confidence and ensure safe, effective adoption.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Footer CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
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
            <Link to="/case-studies/second-opinion" onClick={() => window.scrollTo(0, 0)}>
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
  )
}

export default ViuHubPage 