import { motion } from 'framer-motion'
import Navigation from './Navigation'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - Bio */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-black" style={{ lineHeight: '1.6' }}>
                <div className="space-y-4" style={{ fontSize: '22px' }}>
                  <p>
                    Mera is a multidisciplinary designer focused on creating accessible, human-centered digital experiences that bring clarity to complex systems and help people connect more easily. With a background in neuroscience, she's curious about how people think, learn, and interact with the world—and how design can support those behaviors.
                  </p>
                  <p>
                    She works where science meets storytelling, blending cognitive insight, interactivity, and creativity. From crafting intuitive product experiences to unpacking the psychology of game mechanics, her approach is driven by empathy, curiosity, and an experimental spirit.
                  </p>
                  <p>
                    She's interested in how neuroscience can inform and improve interactive media, and looks for thoughtful ways to bring together creativity and research to build experiences that feel intuitive and meaningful.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Professional Details */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                {/* Experience */}
                <div>
                  <h2 className="text-xl font-bold text-black mb-2" style={{ fontSize: '16px' }}>Experience</h2>
                  <div className="space-y-1 text-black" style={{ lineHeight: '1.2' }}>
                    <div>Rightpoint, Lead Interaction Designer</div>
                    <div>Springboard, Peer Mentor</div>
                    <div>North, Product Designer</div>
                    <div>Second Opinion, Product Designer</div>
                  </div>
                </div>



                {/* Volunteering */}
                <div>
                  <h2 className="text-xl font-bold text-black mb-2" style={{ fontSize: '16px' }}>Volunteering</h2>
                  <div className="space-y-1 text-black" style={{ lineHeight: '1.2' }}>
                    <div>Big Break Foundation, Accessibility Specialist</div>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-xl font-bold text-black mb-2" style={{ fontSize: '16px' }}>Contact</h2>
                  <div className="space-y-1 text-black" style={{ lineHeight: '1.2' }}>
                    <div>jamera.bradley@gmail.com</div>
                    <div>https://www.linkedin.com/in/jamerabradley/</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 