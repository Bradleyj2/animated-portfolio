import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'

const HemispheresPage = () => {
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
                GAME DESIGN DOCUMENT – Hemispheres
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
                <div>Gaming</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">PROJECT TYPE</div>
                <div>Game Design Document</div>
                <hr className="border-gray-300 my-2" />
                <div className="font-semibold">DATE</div>
                <div>June 2025-August 2025</div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-16 mt-32">
            {/* Section 1 */}
                        <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="relative group">
                  <img 
                    src="/hemispheres10.png" 
                    alt="Two avatars on opposite cliffs" 
                    className="w-full h-auto rounded-lg"
                  />
                  
                  {/* Hover note */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-left">Note: This image is AI-generated and are intended solely as visual reference.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic text-left mt-2">Figure 1: Two avatars on opposite cliffs - Logic and Intuition overlooking fragmented mindscape.</p>
              </div>

              
              <div className="flex flex-col lg:flex-row gap-8 items-start mt-16">
                <div className="flex-1 prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Hemispheres is a storytelling case study that explores how environmental narrative and dual perspective can transform internal struggle into interactive experience. The project challenges traditional narrative approaches by embodying psychological states through interactive environments and dual-avatar mechanics.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By making internal conflict externally playable, Hemispheres creates a new model for emotional storytelling in games that prioritizes empathy and introspection over traditional power fantasies.
                  </p>
                </div>
                
                <div className="flex-1">
                  <div className="relative group">
                    <img 
                      src="/hemispheres2.png" 
                      alt="Split-screen concept art showing Logic and Intuition interacting with different puzzles." 
                      className="w-full h-auto rounded-lg"
                    />
                    
                    {/* Hover note */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-left">Note: This image is AI-generated and are intended solely as visual reference.</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-left mt-2">Figure 2: Split-screen concept art showing Logic and Intuition interacting with different puzzles.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >

              
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Storytelling Challenge</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">Core Problem:</span> How do you make the invisible visible? Internal psychological processes resist traditional narrative approaches.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Traditional Solutions and Their Limitations:
                  </p>
                  <ul className="space-y-2 ml-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Exposition-heavy dialogue: Risks becoming preachy or clinical
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      Linear recovery arcs: Don't reflect the messy reality of healing
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">•</span>
                      External metaphors: Often feel disconnected from the actual experience
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Hemispheres' Innovative Approach:</span> Embody psychological states through interactive environments and dual-avatar mechanics, making internal conflict externally playable.
                  </p>
                </div>
                

              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >

              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mechanical Metaphor as a Narrative Engine</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Dual Avatar System where players control two characters simultaneously.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Logic (Left Brain)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sharp, angular visuals with a cool color palette</li>
                      <li>• Analyzes, organizes, and deciphers</li>
                      <li>• Represents structured thinking and rationalization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Intuition (Right Brain)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Fluid, organic visuals with warm hues</li>
                      <li>• Empathizes, reshapes, and unlocks memories</li>
                      <li>• Embodies emotional insight and creative thought</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">The Integration Arc:</span> As puzzles grow in complexity, the avatars must cooperate. Early passive aggression evolves into seamless coordination, representing self-integration.
                </p>
              </div>
              
              <div className="mt-8">
                <div className="w-full">
                  <img 
                    src="/hemispheres1.png" 
                    alt="Dual Avatar Integration Mechanics" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 italic text-left mt-2">Dual Avatar Integration Mechanics - Logic and Intuition working together</p>
                </div>
              </div>
              

            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Storytelling Through Symbolic Landscapes</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Mind as Lived Space where each region visualizes a cognitive function that is initially distorted.
                  </p>
                  <div className="space-y-6 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">The Library of Ashes (Memory & Forgetting)</h3>
                      <p className="text-gray-700">Rewriting books and collapsing shelves.</p>
                      <p className="text-gray-700"><span className="font-bold">Puzzle:</span> Sequence burnt pages in truth. Transforms into a sunlit archive.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">The Frozen Stage (Expression & Repression)</h3>
                      <p className="text-gray-700">Frozen mid-performance, actors locked in ice.</p>
                      <p className="text-gray-700"><span className="font-bold">Puzzle:</span> Rehearse scenes to thaw memories. Stage becomes expressive and alive.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">The Desert of Mirrors (Identity & Perception)</h3>
                      <p className="text-gray-700">Distorted mirrors in infinite sand.</p>
                      <p className="text-gray-700"><span className="font-bold">Puzzle:</span> Re-align fragmented reflections. Ends with unified identity reflection.</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Dynamic Environmental Response:</span> Player actions change environments, reinforcing healing and narrative. Solve emotional puzzles, result in world repairs, feedback fuels engagement.
                  </p>
                </div>
                
                <div className="flex-1">
                  <div className="relative group">
                    <img 
                      src="/hemispheres.png" 
                      alt="Environment concept art collage" 
                      className="w-full h-auto rounded-lg"
                    />
                    
                    {/* Hover note */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-left">Note: This image is AI-generated and are intended solely as visual reference.</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-left mt-2">Figure 3: Environment concept art collage showing cognitive regions spatialized through symbolic terrain.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Redefining Conflict: Emotional Resolution Over Combat</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Boss is an Inner Critic. They are emotional states, not just enemies to defeat.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Shadow of Shame (Library Boss)</h3>
                      <p className="text-gray-700">Faced with Intuition, grounded by Logic. Shrinks when acknowledged.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">The Silent Audience (Frozen Stage Boss)</h3>
                      <p className="text-gray-700">Gazes that freeze the player. Melted through vulnerable performance.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Echo Beast (Echoes Boss)</h3>
                      <p className="text-gray-700">Chaos of suppressed thoughts. Harmonized through musical resonance.</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">The Grammar of Emotional Combat:</span> Each boss encounter teaches mirroring, harmonizing, guiding, and accepting. Learning emotional languages becomes key to narrative progression.
                  </p>
                </div>
                
                <div className="flex-1">
                  <div className="relative group">
                    <img 
                      src="/hemispheres5.png" 
                      alt="Three boss designs" 
                      className="w-full h-auto rounded-lg"
                    />
                    
                    {/* Hover note */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-left">Note: This image is AI-generated and are intended solely as visual reference.</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-left mt-2">Figure 5: Three boss designs showing emotional symbolism.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >

              
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Dialogue as Emotional Architecture</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">The Tone System:</span> Dialogue choices reflect emotional processing: Denial, Curiosity, Empathy, Clarity, Avoidance. No "right" answer, only different outcomes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold">Show, Don't Tell:</span> Narrative is told through environmental details, avatar contrast, and symbolic events. Symbolic elements ground emotional storytelling in tangible objects.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">The Player as Unconscious Narrator:</span> The game offers archetypes, not specifics, allowing projection. Universal emotions, flexible symbols, and open interpretation create emergent personal meaning.
                  </p>
                </div>
                

              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >

              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Innovation in Service of Story</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold">The Emotional Inventory System:</span> Collect emotional fragments instead of traditional items: Burnt Letter (unlocks memory paths), Broken Compass (guides toward truth), Echo Stones (reveal buried thoughts). Items symbolize internal growth rather than external tools.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold">Responsive Soundscape:</span> Sound reinforces emotion. Audio distorts during tension, music shifts with healing, character themes contrast and then harmonize.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">The Integration Moment:</span> Final level requires avatars to cooperate in real-time to unlock the core self. Mastery becomes metaphor. Unity of thinking + feeling = narrative climax.
                </p>
              </div>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring Success: Emotional Resonance Over Traditional Metrics</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold">New Success Criteria:</span> Not completion speed or kill count, but personal reflection depth, satisfaction from narrative integration, and emotional resonance in player testimonials.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold">The Empathy Engine:</span> The game functions as a psychological mirror, a healing simulator, and a story generator rooted in personal truth. Hemispheres prioritizes emotional learning loops over traditional power fantasies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">Lessons for Interactive Storytelling:</span> Hemispheres teaches us that mechanics can embody metaphor, abstract emotions can be made tangible, integration {'>'} victory, symbolic systems invite deeper engagement, and emotional progression is meaningful progression.
                </p>
              </div>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="mb-8">
                <div className="relative group">
                  <img 
                    src="/hemispheres9.png" 
                    alt="Final image of avatars standing together" 
                    className="w-full h-auto rounded-lg"
                  />
                  
                  {/* Hover note */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-left">Note: This image is AI-generated and are intended solely as visual reference.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic text-left mt-2">Figure 4: Final image of avatars standing together showing inner harmony finally achieved.</p>
              </div>

              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: The Future of Therapeutic Interactive Media</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hemispheres reimagines games as tools for emotional insight. By turning internal struggle into a playable landscape and fractured selves into dual protagonists, it proves that interactive storytelling can illuminate the journey toward self-integration.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Its innovations lie not just in mechanics or visuals, but in the profound emotional impact it generates. Applications for other projects include addiction recovery avatars, grief-themed environmental puzzles, creative process mechanics, and relationship dynamics as dual-character play.
                </p>
              </div>
            </motion.div>

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
                          <Link to="/case-studies/service-blueprint" onClick={() => window.scrollTo(0, 0)}>
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

export default HemispheresPage 