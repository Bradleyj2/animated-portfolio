import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'

const TracePage = () => {
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
                CASE STUDY – TRACE
              </h1>
            </div>
            
            {/* Spacer */}
            <div className="flex-1"></div>
            
            {/* Right Column - Information */}
            <div className="w-[182px] flex-shrink-0">
              <div className="text-sm text-gray-500 mb-4">001</div>
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

          {/* Main Content */}
          <div className="space-y-16">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full h-96 bg-gray-100 rounded-lg border border-gray-200 mb-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <p className="text-gray-600 font-mono">Hero Image: Retro-futuristic dream archive</p>
                  <p className="text-gray-500 text-sm">Glowing drawers, memory orbs, brainwave pulses</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mb-8">
                <strong>Nº01</strong> Retro-futuristic dream archive — glowing drawers stretch infinitely into the void, with memory orbs floating in zero gravity. Flickering lights pulse with unseen brainwaves.
              </p>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  TRACE is a playable research experiment built in 8 weeks that uses EEG-based inputs to influence narrative progression. Set within a surreal memory archive, players navigate dream fragments shaped by focus, emotional valence, and clarity of thought. TRACE blurs the line between cognition and storytelling, creating an interactive narrative system grounded in neuropsychology and procedural logic.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By translating psychological metrics into narrative branches, TRACE offers a new model for cognitive storytelling that challenges traditional game design paradigms. The project represents a fusion of scientific rigor and creative expression, pushing the boundaries of what interactive media can achieve in understanding human cognition.
                </p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-full h-96 bg-gray-100 rounded-lg border border-gray-200 mb-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-gray-600 font-mono">Screenshot: TRACE Interface</p>
                  <p className="text-gray-500 text-sm">Drawer navigation, EEG-influenced UI overlays</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mb-8">
                <strong>Nº02</strong> Screenshot of the TRACE interface showing drawer navigation, EEG-influenced UI overlays, and focus-based visual feedback.
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  TRACE is a playable research experiment built in 8 weeks that uses EEG-based inputs to influence narrative progression. Set within a surreal memory archive, players navigate dream fragments shaped by focus, emotional valence, and clarity of thought.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  TRACE blurs the line between cognition and storytelling, creating an interactive narrative system grounded in neuropsychology and procedural logic. By translating psychological metrics into narrative branches, TRACE offers a new model for cognitive storytelling.
                </p>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-full h-96 bg-gray-100 rounded-lg border border-gray-200 mb-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔬</div>
                  <p className="text-gray-600 font-mono">Diagram: Scientific Inputs to Game Mechanics</p>
                  <p className="text-gray-500 text-sm">EEG → Decision Filter → Fragment Outcome</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mb-8">
                <strong>Nº03</strong> Diagram mapping scientific inputs to in-game mechanics (e.g. EEG → Decision Filter → Fragment Outcome).
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Scientific Foundation</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  TRACE is informed by interdisciplinary research in psychology, neuroscience, and interactive narrative systems. Key influences include:
                </p>
                <ul className="space-y-2 ml-6 mb-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Neurofeedback loops for emotional regulation and focus training
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Cognitive mapping theories of memory and decision-making
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Procedural narrative design frameworks from interactive fiction
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    EEG biosignal interpretation mapped to player state (focus, valence, clarity)
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  By translating psychological metrics into narrative branches, TRACE offers a new model for cognitive storytelling.
                </p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-full h-96 bg-gray-100 rounded-lg border border-gray-200 mb-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <p className="text-gray-600 font-mono">UI: Interactive Drawers</p>
                  <p className="text-gray-500 text-sm">Choice interface with EEG metadata</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mb-8">
                <strong>Nº04</strong> Choice interface showing three drawer options, each tagged with EEG metadata (e.g. "High Focus", "Low Clarity").
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dream Fragment: "The Archive"</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Players explore a single dream fragment known as The Archive, a liminal library of forgotten memories. Each drawer contains an interactive moment — a sensory detail, a lost decision, a phantom conversation — dynamically altered by the player's mental state.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each session is unique: even the same drawer may yield different content depending on EEG activity. Narrative outputs are logged and stored, simulating a living memory system.
                </p>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="h-96 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📈</div>
                    <p className="text-gray-600 font-mono">EEG Heatmap Sample</p>
                    <p className="text-gray-500 text-sm">Focus spikes aligned with narrative branches</p>
                  </div>
                </div>
                <div className="h-96 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💾</div>
                    <p className="text-gray-600 font-mono">Player Log JSON</p>
                    <p className="text-gray-500 text-sm">Timestamp, focus level, decision ID</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mb-8">
                <strong>Nº05</strong> Sample EEG heatmap overlaid on player decision points, showing spikes in focus aligning with major narrative branches. Player Log JSON sample — includes timestamp, focus level, decision ID, and resulting narrative state.
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">EEG & Player Log System</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  EEG inputs from a simulated Muse headband stream into TRACE, triggering shifts in narrative direction. These biosignals are logged every 250ms, assigned tags, and paired with player decisions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">Outputs are compiled into session logs — visualized through:</p>
                <ul className="space-y-2 ml-6 mb-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    EEG activity heatmaps
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Timeline-based event charts
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    JSON-formatted decision trees
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  These logs can be explored by the player or exported for research.
                </p>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { title: 'UI Prototype', desc: 'Responsive web-based interface inspired by sci-fi terminals', icon: '🖥️' },
                  { title: 'Dream Fragment Design', desc: 'Fully mapped narrative sequence with visual feedback elements', icon: '🌙' },
                  { title: 'EEG Simulation System', desc: 'Mock data stream engine with noise and pattern injectors', icon: '⚡' },
                  { title: 'Logic Map', desc: 'System linking player biosignals to procedural story outputs', icon: '🗺️' },
                  { title: 'Player Log Generator', desc: 'Tool that logs EEG inputs and decisions as timestamped records', icon: '📝' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center mb-8">
                <strong>Nº06</strong> Each tile includes a thumbnail-style image: UI wireframe, narrative flowchart, EEG simulator dashboard, JSON log viewer, and logic tree.
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Deliverables</h2>
                <p className="text-gray-700 leading-relaxed">
                  The project delivered a complete interactive narrative system with EEG integration, including a responsive web interface, comprehensive documentation, and research tools for analyzing player behavior and narrative outcomes.
                </p>
              </div>
            </motion.div>

            {/* Footer CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link to="/home">
                <motion.button
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg border border-gray-300 hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Command Deck
                </motion.button>
              </Link>
                          <Link to="/case-studies/hemispheres" onClick={() => window.scrollTo(0, 0)}>
              <motion.button
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg border border-gray-300 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Next Mission →
              </motion.button>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TracePage 