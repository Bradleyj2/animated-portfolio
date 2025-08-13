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
                  <div>Design Lead</div>
                  <div>Design Ops</div>
                  <div>UX Researcher</div>
                  <hr className="border-gray-300 my-2" />
                  <div className="font-semibold">INDUSTRY</div>
                  <div>InsurTech</div>
                  <hr className="border-gray-300 my-2" />
                  <div className="font-semibold">PROJECT TYPE</div>
                  <div>End-to-End Website</div>
                  <div>Mobile App</div>
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
            <p className="text-sm text-gray-500 italic text-left">Figure 1: Insurance platform interface showcasing modern UI dashboards, data visualization, and user workflows.</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem: Lost in an Insurance Maze</h2>
                <p>
                  Sarah, like millions of others, was drowning. Not in water, but in insurance jargon, endless forms, and competing quotes that made no sense. She needed renters insurance but felt like she needed a PhD to understand her options.
                </p>
                <p>
                  <span className="font-bold">This was the reality for VIU by HUB's users:</span> overwhelming choices, confusing language, and zero guidance. The insurance industry had created a maze with no map—and people were getting lost at every turn.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge: Building a Better Way</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900">
                How do you turn the most confusing purchase decision into the simplest one?
              </p>
              <p>
                We set out to create more than a website. We envisioned a digital insurance guide that would hold users' hands through every step, transforming anxiety into confidence.
              </p>
              <p className="font-semibold text-gray-900">
                Our mission: Make insurance feel approachable, trustworthy, and enjoyable.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution: User-Centered Design at Every Step</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Understanding Real People</h3>
                <p>
                  We dove deep into user research, mapping every emotional touchpoint of the insurance journey. We discovered that people didn't just need information—they needed reassurance and clarity at moments of decision.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Simplifying the Complex</h3>
                <p>
                  We broke down insurance-speak into plain English, creating intuitive product pages and clear user flows. Every page became a signpost guiding users toward their goal.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Building Trust Through Design</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Visual Identity:</span> Calming blues and greens paired with friendly, rounded typography
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Motion Graphics:</span> Custom animations that made complex concepts digestible
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Consistent Experience:</span> Unified design system across web, mobile, and all touchpoints
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impact: Numbers That Tell a Story</h2>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quote Selection Page Redesign</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Problem: High drop-off rates on our most critical conversion page</li>
                    <li>• Solution: Complete page overhaul based on user feedback and A/B testing</li>
                    <li>• Result: Significant increase in conversions, more users stayed and chose quotes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expansion Success</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Successfully launched condo, renters, and landlord insurance lines
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Built a scalable design system that supported rapid business growth
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Created partner portal and embedded widgets that expanded our reach
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