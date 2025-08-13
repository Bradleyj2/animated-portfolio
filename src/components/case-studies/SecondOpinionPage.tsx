import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'

const SecondOpinionPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <div className="pt-[20%] pb-16 px-[15%]">
        <div className="w-full">
          {/* Title Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-12 mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Column - Title */}
            <div className="w-[800px] flex-shrink-0">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6 font-sans">
                CASE STUDY – Second Opinion
              </h1>
            </div>
            
            {/* Spacer */}
            <div className="flex-1"></div>
            
            {/* Right Column - Information */}
            <div className="w-[182px] flex-shrink-0">
              <div className="text-sm text-gray-500 mb-4">005</div>
              <div className="text-lg font-bold text-gray-900 mb-4">INFORMATION</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="font-semibold">ROLE</div>
                <div>Product Designer</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">INDUSTRY</div>
                <div>Healthcare</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">PROJECT TYPE</div>
                <div>Mobile app (Android & iOS)</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">DATE</div>
                <div>November 2021 - December 2021</div>
              </div>
            </div>
          </motion.div>

          {/* The Challenge */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge That Reshaped the Project</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  One week into what seemed like a straightforward medication management app project, 
                  our team hit a wall.
                </p>
                <p>
                  The client's initial research focused on tech-savvy caregivers, but our instincts 
                  told us something was missing.
                </p>
                <p>
                  During our first round of user interviews, Maria, a Spanish-speaking woman caring for her 
                  husband, broke down as she described how she couldn't understand his medication 
                  labels. She feared making a mistake that could harm him.
                </p>
                <p className="font-semibold text-gray-900">
                  This wasn't the user our research had prepared us for.
                </p>
                <p>
                  We decided to pause development and expand our research scope, despite tight 
                  deadlines and stakeholder pressure.
                </p>
              </div>
              <div>
                <img 
                  src="/secondop1.png" 
                  alt="Woman overwhelmed by medication bottles" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 1: Maria looking overwhelmed by numerous medication bottles on a counter.</p>
              </div>
            </div>
          </motion.section>

          {/* Leading Through Ambiguity */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leading Through Ambiguity</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                With limited guidance and conflicting priorities, we redefined our team's strategy.
              </p>
              <p>
                I challenged the assumptions that excluded non-English speakers and lower-income caregivers, advocating for a broader, more inclusive research scope by tying user-centered insights 
                to the client's business goals.
              </p>
              <p>
                To balance timelines, we ran parallel workstreams: one for research and one for early 
                interface exploration.
              </p>
            </div>
            
            <div className="mt-8">
              <img 
                src="/secondop2.png" 
                alt="Branching decision tree graphic" 
                className="w-full h-auto rounded-lg mb-2"
              />
              <p className="text-sm text-gray-500 italic text-left">Figure 2: Branching decision tree with highlighted nodes for research, personas, and hypotheses.</p>
            </div>
          </motion.section>

          {/* The Discovery */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Discovery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gray-100 rounded-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">🌐</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Language Barriers</h3>
                  <p className="text-gray-700 text-sm">
                    Caregivers were making dangerous errors because they couldn't read or translate medication labels.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-100 rounded-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Family Coordination</h3>
                  <p className="text-gray-700 text-sm">
                    Multiple caregivers needed synchronized access to patient information, but the tools were siloed.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-100 rounded-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">🚨</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Crisis Access</h3>
                  <p className="text-gray-700 text-sm">
                    Users needed instant access to emergency actions and drug interactions, not buried menus.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Creative Problem-Solving */}
          <motion.section
            className="mb-16 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Creative Problem-Solving Under Pressure</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                With four weeks left, we had to design an MVP for a newly expanded user base.
              </p>
              <p>
                Rather than traditional feature prioritization, I proposed a crisis-first design strategy.
              </p>
              <p className="font-semibold text-gray-900">Drug Interaction Alert System:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Used color-coded icons for low-literacy users
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Offered instant translation options
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Connected directly to healthcare professionals
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Logged critical decisions for transparency
                </li>
              </ul>
              <p className="font-semibold text-gray-900">
                Impact: 100% of test participants—including non-English speakers—correctly identified medication risks.
              </p>
            </div>
            
            <div className="mt-8">
              <img 
                src="/secondop6.png" 
                alt="Multi-panel UI mockup: Caregiving community app" 
                className="w-full h-auto rounded-lg mb-2"
              />
              <p className="text-sm text-gray-500 italic text-left">Figure 3: Multi-panel UI mockup showcasing the caregiving community app interface with message boards, courses, and medication trackers.</p>
            </div>
          </motion.section>

          {/* Community Feature Pivot */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ownership in Action: The Community Feature Pivot</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The original feature request was a static FAQ. But interviews revealed caregivers were 
                  emotionally isolated and needed real-time support.
                </p>
                <p className="font-semibold text-gray-900">I proposed a peer-support feature:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Presented data showing improved patient outcomes for supported caregivers
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Prototyped interface ideas within 48 hours to demonstrate feasibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Suggested a phased rollout plan to reduce risk
                  </li>
                </ul>
                <p className="font-semibold text-gray-900">
                  Outcome: The community feature became the client's most requested enhancement for future releases.
                </p>
              </div>
              <div>
                <img 
                  src="/secondop7.png" 
                  alt="Hand-drawn wireframe sketch of mobile health app interface" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 5: Hand-drawn wireframe sketch of mobile health app interface showing calendar, medication compliance, contacts, pharmacy details, and doctor visit notes.</p>
              </div>
            </div>
          </motion.section>

          {/* Leading Without Clear Direction */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leading Without Clear Direction</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The client wanted complex medication tracking features, but users were overwhelmed by existing tools.
              </p>
              <p className="font-semibold text-gray-900">My leadership approach:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Removed non-essential, high-cognitive-load features
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Prioritized simplicity without sacrificing functionality
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Designed progressive disclosure interfaces that served both basic and power users
                </li>
              </ul>
              <p className="font-semibold text-gray-900">The result was a 'Smart Simplified' interface that:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Showed only essential data by default
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Used clean visuals instead of dense instructions
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Synced automatically across family devices
                </li>
              </ul>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/secondop8.png" 
                  alt="Hand-drawn wireframe sketch of mobile health app interface" 
                  className="w-full h-96 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 4a: Hand-drawn wireframe sketch of mobile health app interface with message boards, courses, community features, and content organization.</p>
              </div>
              <div>
                <img 
                  src="/secondop9.png" 
                  alt="After: Clean UI mockup with expanded panels and icon-guided navigation" 
                  className="w-full h-96 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 4b: Clean UI mockup with expanded panels and icon-guided navigation.</p>
              </div>
            </div>
          </motion.section>

          {/* The Outcome */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Outcome and Learning</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-100 rounded-lg p-6 border border-gray-200 text-center">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="text-gray-900 font-bold">100%</p>
                  <p className="text-sm">Task completion rate in usability testing</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 border border-gray-200 text-center">
                  <div className="text-3xl mb-2">🚫</div>
                  <p className="text-gray-900 font-bold">Zero</p>
                  <p className="text-sm">Critical medication errors</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 border border-gray-200 text-center">
                  <div className="text-3xl mb-2">👍</div>
                  <p className="text-gray-900 font-bold">Approved</p>
                  <p className="text-sm">Full feature expansion by client</p>
                </div>
              </div>
              
              <p className="font-semibold text-gray-900">
                The real success wasn't just the MVP—it was redefining how the client understood their user base and market.
              </p>
              
              <p className="font-semibold text-gray-900">Key takeaways:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Incomplete research demands better questions, not faster execution
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Leadership sometimes means slowing down to avoid the wrong outcome
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Constraints fuel creative innovation
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  When priorities conflict, user needs must guide decision-making
                </li>
              </ul>
              
              <p className="font-semibold text-gray-900">
                Every key decision came back to one question: "Does this help Maria feel more confident as a caregiver?"
              </p>
            </div>
          </motion.section>

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
            <Link to="/case-studies/trace" onClick={() => window.scrollTo(0, 0)}>
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

export default SecondOpinionPage 