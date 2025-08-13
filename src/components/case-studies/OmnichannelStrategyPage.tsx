import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'

const OmnichannelStrategyPage = () => {
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
                CASE STUDY - Omnichannel Strategy
              </h1>
            </div>
            
            {/* Spacer */}
            <div className="flex-1"></div>
            
            {/* Right Column - Information */}
            <div className="w-[182px] flex-shrink-0">
              <div className="text-sm text-gray-500 mb-4">003</div>
              <div className="text-lg font-bold text-gray-900 mb-4">INFORMATION</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="font-semibold">ROLE</div>
                <div>Service Designer</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">INDUSTRY</div>
                <div>Utility</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">PROJECT TYPE</div>
                <div>Strategy & Service Design</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">DATE</div>
                <div>September 2024-December 2024</div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-16 mt-32">
                                                     {/* The Problem */}
               <motion.section
                 className="mb-24"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
               >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem: When Digital Meets Human, Context Gets Lost</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Meet Jennifer, a utility customer trying to report a power outage through the company's mobile app. After filling out forms and uploading photos, she gets frustrated and calls customer service. The agent, Mark, starts from scratch, asking Jennifer to repeat everything she just submitted online.
                </p>
                <p className="font-semibold text-gray-900">
                  The disconnect was costing everyone:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>•Customers: Frustrated by repetitive processes</li>
                  <li>•Agents: Longer call times without context</li>
                  <li>•Company: Reduced efficiency and satisfaction scores</li>
                </ul>
                <p>
                  This major utility company was losing the battle against fragmented customer experiences, with digital self-service and live agents operating in complete silos.
                </p>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/omni1.png" 
                  alt="Customer frustration with disconnected channels" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 1: Customer frustration with disconnected channels showing digital and human service gaps.</p>
              </div>
            </motion.section>

                          {/* The Vision */}
              <motion.section
                className="mb-24 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Vision: Seamless Handoffs, Instant Context</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">
                  What if every customer interaction picked up exactly where the previous one left off?
                </p>
                <p>
                  Our mission was ambitious yet clear: create an omnichannel experience where customer data flows seamlessly from digital touchpoints to live agents, reducing call handle times while dramatically improving service quality.
                </p>
                <p className="font-semibold text-gray-900">
                  The goal wasn't just integration—it was transformation.
                </p>
              </div>
            </motion.section>

                          {/* The Discovery Journey */}
              <motion.section
                className="mb-24 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Discovery Journey: Building Understanding Before Solutions</h2>
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 1: Alignment Through Shared Vision</h3>
                  <p>
                    Our kickoff wasn't just another meeting—it was a collaborative exploration. We brought together cross-functional teams to experience real omnichannel scenarios, sparking creative ideas and building collective ownership of the solution.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 2: Deep Research, Real Insights</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Competitive Intelligence</h4>
                      <p>
                        We analyzed industry leaders to understand what worked, what didn't, and where opportunities existed. The landscape revealed clear gaps in true omnichannel integration.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Voice Analysis</h4>
                      <p>
                        Mining existing customer interview databases, we validated behaviors and identified critical expectations during service transitions. The message was clear: customers wanted continuity, not repetition.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Agent Reality Check</h4>
                      <p>
                        18 interviews across 4 CSR teams revealed the human side of the challenge:
                      </p>
                      <ul className="space-y-2 ml-6 mt-2">
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-2">•</span>
                          Technology friction points
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-2">•</span>
                          Communication gaps
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-2">•</span>
                          Workflow inefficiencies
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-2">•</span>
                          The desire to truly help customers
                        </li>
                      </ul>
                      <p className="mt-2">
                        From these insights, we crafted a comprehensive CSR persona representing shared experiences and needs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Journey Mapping Reality</h4>
                      <p>
                        We didn't just theorize—we experienced. Using CSR training software and creating test accounts, we walked through both sides of the service equation:
                      </p>
                      <ul className="space-y-2 ml-6 mt-2">
                        <li>• Customer journey: Every click, form, and frustration point</li>
                        <li>• CSR workflow: Every screen, process, and bottleneck</li>
                      </ul>
                      <p className="mt-2">
                        This dual perspective revealed the exact moments where experiences broke down.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/omni4.png" 
                  alt="Research and discovery process" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 2: Research and discovery process showing customer and agent journey mapping.</p>
              </div>
            </motion.section>

            {/* The Solution */}
            <motion.section
              className="mb-16 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution: Service Blueprint as North Star</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Connecting Every Dot</h3>
                  <p>
                    Our service blueprint became more than a document. It was a transformation guide that mapped:
                  </p>
                  <ul className="space-y-2 ml-6 mt-2">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Customer actions across all touchpoints
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      CSR workflows and decision points
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Behind-the-scenes processes that make seamless service possible
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">From Abstract to Actionable</h3>
                  <p>
                    The blueprint transformed scattered insights into a unified strategy, providing:
                  </p>
                  <ul className="space-y-2 ml-6 mt-2">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Clear improvement areas with prioritized impact
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Alignment across all stakeholder groups
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      A roadmap for seamless omnichannel implementation
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/omni3.png" 
                  alt="Service blueprint connecting all touchpoints" 
                  className="w-full h-auto rounded-lg mb-2"
                />
                <p className="text-sm text-gray-500 italic text-left">Figure 3: Service blueprint connecting all touchpoints showing unified customer journey.</p>
              </div>
            </motion.section>

                          {/* The Impact */}
              <motion.section
                className="mb-24 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impact: Designing for Tomorrow's Service</h2>
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Wins</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Unified stakeholder vision across previously siloed teams
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Clear roadmap with defined milestones and resource allocation
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Risk mitigation strategy addressing security and change management concerns
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Future-State Benefits</h3>
                  <p className="mb-3">
                    The blueprint positioned the utility company to achieve:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Reduced call handle times through instant context transfer
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Improved customer satisfaction via eliminated repetition
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Enhanced agent efficiency with complete customer histories
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Scalable framework for continuous service evolution
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

                          {/* Key Insights */}
              <motion.section
                className="mb-24 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Insights: What Made the Difference</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Human-Centered Approach</span> — Success came from understanding both sides of the service equation—customer frustrations and agent challenges informed every decision.
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Research Before Design</span> — 18 CSR interviews and comprehensive journey mapping prevented assumptions and ensured solutions addressed real problems.
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Collaborative Discovery</span> — Cross-functional alignment from day one eliminated future roadblocks and built shared ownership of outcomes.
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    <span className="font-semibold">Blueprint as Strategy</span> — The service blueprint wasn't just documentation—it became the strategic foundation for implementation decisions.
                  </li>
                </ul>
              </div>
            </motion.section>

                          {/* The Transformation */}
              <motion.section
                className="mb-24"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Transformation: From Silos to Seamless</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <h3 className="text-lg font-bold text-red-900 mb-3">Before</h3>
                    <p>Customers repeated information across channels while agents worked without context, leading to longer calls and frustrated experiences.</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-bold text-green-900 mb-3">After</h3>
                    <p>A clear pathway to omnichannel excellence where every interaction builds on the last, creating efficiency for agents and satisfaction for customers.</p>
                  </div>
                </div>
              </div>
            </motion.section>

                          {/* Moving Forward */}
              <motion.section
                className="mb-24"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Moving Forward: Ready for Implementation</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The discovery phase achieved its ultimate goal: transforming an abstract vision into a concrete, actionable strategy.
                </p>
                <p className="font-semibold text-gray-900">
                  With the service blueprint as our foundation, the utility company now has:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    A clear understanding of current state challenges
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    A detailed roadmap for omnichannel transformation
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Stakeholder alignment across all teams
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Risk mitigation strategies for smooth implementation
                  </li>
                </ul>
                <p>
                  The vision is no longer a dream—it's ready to become reality.
                </p>
                <p>
                  This project proved that successful omnichannel strategy isn't about technology alone. It's about understanding human needs, mapping real workflows, and designing experiences that work beautifully for everyone involved.
                </p>
                <p className="font-semibold text-gray-900">
                  Next stop: Implementation that transforms customer service from fragmented to flawless.
                </p>
              </div>
            </motion.section>

            {/* Footer CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
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
              <Link to="/case-studies/hemispheres" onClick={() => window.scrollTo(0, 0)}>
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

export default OmnichannelStrategyPage 