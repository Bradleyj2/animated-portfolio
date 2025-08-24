import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'

const ViuHubPage = () => {
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
              Strategic Design Leadership
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight font-serif">
              Transforming Digital Trust in the Insurance Industry
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-serif italic">
              How strategic design leadership re-architected trust, transparency, and usability in high-stakes financial systems
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">By Mera Bradley</span> • Strategic Design Leader
              </div>
              <div className="text-sm text-gray-500">
                March 2022 to January 2024
              </div>
            </div>
          </motion.div>

          {/* Hero Image - Magazine Style */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/viubyhub1.png" 
                alt="VIU by HUB insurance platform interface" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded">
                <p className="text-sm text-gray-700 font-medium">VIU by HUB Platform Interface</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center italic">Figure 1: VIU by HUB platform interface showing trust signals and transparent information architecture</p>
          </motion.div>

          {/* The Problem - Magazine Style */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">The Digital Trust Gap</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Sarah, like millions of others, faced a fundamental "trust gap" in digital insurance services. Not just confusion about jargon, but a deeper crisis of confidence in making high-stakes financial decisions through digital interfaces.
                  </p>
                  <p className="leading-relaxed mb-6">
                    <strong>The core issue:</strong> Insurance customers experienced overwhelming choices, hidden terms, lack of transparency, and zero guidance. This created cognitive barriers that prevented confident decision-making. The industry had created digital systems that prioritized operational efficiency over user trust and clarity.
                  </p>
                  <p className="leading-relaxed">
                    This project aimed to design for clarity, trustworthiness, and accessibility, creating systems that reduce cognitive load and build confidence in complex decisions.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <img 
                    src="/viubyhub2.png" 
                    alt="User overwhelmed by insurance complexity" 
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">The Reality</h4>
                    <p className="text-sm text-gray-600">Users felt overwhelmed by complex insurance processes, leading to abandoned purchases and lost trust.</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 text-center italic">Figure 2: User overwhelmed by insurance complexity and decision paralysis</p>
                </div>
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
                  This wasn't about incremental improvements. It was about fundamentally restructuring how trust, transparency, and usability intersect in complex insurance systems. We needed to align cross-functional teams around a shared vision of user-centered trust design.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Strategic Design Leadership in Action</h2>
            
            <div className="space-y-16">
              {/* Research Operations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Phase One</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Operations & Trust Mapping</h3>
                  <div className="prose prose-lg">
                    <p className="leading-relaxed mb-4">
                      I structured comprehensive studies with customers and stakeholders, mapping every emotional touchpoint of the insurance journey. We discovered that people didn't just need information. They needed reassurance and clarity at moments of decision.
                    </p>
                    <p className="leading-relaxed">
                      This research revealed critical trust pain points in the insurance journey, forming the foundation for our strategic approach.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="font-bold text-gray-900 mb-2">Research Insights</h4>
                  <p className="text-sm text-gray-600">Comprehensive user studies and stakeholder interviews revealed trust pain points</p>
                </div>
              </div>

              {/* Systems Mapping */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Phase Two</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Systems Mapping & Trust Signal Audit</h3>
                  <div className="prose prose-lg">
                    <p className="leading-relaxed mb-4">
                      Through journey mapping and trust signal audits, I identified where the digital experience broke down user confidence. We mapped the entire insurance ecosystem, from initial awareness to policy management.
                    </p>
                    <p className="leading-relaxed">
                      This revealed opportunities to inject transparency and reduce cognitive load throughout the user journey.
                    </p>
                  </div>
                </div>
                <div className="lg:order-1">
                  <img 
                    src="/viubyhub3.png" 
                    alt="Systems mapping and journey analysis" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-3 text-center italic">Figure 3: Systems mapping and journey analysis revealing trust breakdown points</p>
                </div>
              </div>

              {/* Design Leadership */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Phase Three</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Leadership & Cross-Functional Alignment</h3>
                  <div className="prose prose-lg">
                    <p className="leading-relaxed mb-4">
                      I aligned cross-functional teams (product, engineering, design, compliance) around a shared vision of user-centered trust design. This involved creating annotated wireframes, trust signal comparisons, and simplified flow diagrams.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mt-6">
                      <h4 className="font-bold text-blue-900 mb-2">Key Deliverables</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Trust Anchors: Strategic transparency signals</li>
                        <li>• Accessibility Wins: Simplified language and navigation</li>
                        <li>• Scalable Components: Operationalized trust system</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="font-bold text-gray-900 mb-2">Team Alignment</h4>
                  <p className="text-sm text-gray-600">Cross-functional collaboration around user-centered trust design</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* The Impact - Magazine Style */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">The Results: Trust Metrics & Qualitative Wins</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Quantitative Metrics */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-900 mb-2">40%</div>
                <h3 className="font-bold text-green-900 mb-2">User Engagement</h3>
                <p className="text-sm text-green-800">Improvement through reduced cognitive load and clearer information architecture</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-900 mb-2">60%</div>
                <h3 className="font-bold text-blue-900 mb-2">Support Reduction</h3>
                <p className="text-sm text-blue-800">Decrease in support tickets due to improved user experience and clarity</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-900 mb-2">↑</div>
                <h3 className="font-bold text-purple-900 mb-2">Quote Completion</h3>
                <p className="text-sm text-purple-800">Significant increase in completion rates on trust-focused redesigned pages</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Qualitative Wins</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Stakeholder alignment</strong> around user-centered trust design principles
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Clearer trust signals</strong> throughout the insurance journey
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Accessible flows</strong> that reduced cognitive barriers for all users
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Design system operationalization</strong> that created scalability and consistency
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="/viubyhub5.png" 
                  alt="Impact metrics and achievements" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-3 text-center italic">Figure 4: Impact metrics and achievements showcasing the success of the VIU by HUB platform</p>
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
                <p className="text-sm text-gray-500 mt-3 text-center italic">Figure 4: Project growth phases showing the evolution from MVP to scaled platform</p>
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
                  <span className="font-semibold">Start with empathy, not features.</span> Understanding user emotions was more valuable than any technical specification.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="font-semibold">Iterate relentlessly.</span> Our biggest wins came from continuous refinement based on real user feedback.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="font-semibold">Design systems as growth enablers.</span> Investing in consistency and documentation paid dividends as we scaled.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="font-semibold">Collaboration over perfection.</span> Working closely with developers and stakeholders created solutions that actually shipped.
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
            <div className="bg-gray-50 border-l-4 border-gray-400 pl-8 py-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Why This Matters</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  This project represents a masterclass in strategic design leadership, demonstrating how to bridge human psychology, technology, and system trust in high-stakes environments.
                </p>
                <p>
                  The skills developed here—research operations, systems mapping, cross-functional alignment, and trust system operationalization—are fundamental to creating interfaces that build user confidence and ensure safe, effective adoption in any complex domain.
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