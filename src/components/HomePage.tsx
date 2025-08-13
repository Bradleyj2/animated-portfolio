import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const HomePage = () => {
  const projects = [
    { 
      id: 'hemispheres', 
      title: 'Hemispheres', 
      path: '/case-studies/hemispheres',
      description: 'A storytelling case study using environmental narrative and dual perspective to transform internal struggle into interactive experience.',
      tags: ['Environmental Design', 'Dual Perspective']
    },
    { 
      id: 'service-blueprint', 
      title: 'Service Blueprinting Template', 
      path: '/case-studies/service-blueprint',
      description: 'Taking 4+ different service blueprint formats and transforming them into a unified service blueprint kit.',
      tags: ['Service Design', 'UX Research', 'Organizational Design']
    },
    { 
      id: 'omnichannel-strategy', 
      title: 'Omnichannel Strategy', 
      path: '/case-studies/omnichannel-strategy',
      description: 'A comprehensive approach to creating seamless customer experiences across all touchpoints and channels.',
      tags: ['UX Strategy', 'Digital Transformation']
    },
    { 
      id: 'viu-hub', 
      title: 'VIU by HUB', 
      path: '/case-studies/viu-hub',
      description: 'A comprehensive redesign of the VIU insurtech platform, focusing on improving user experience and accessibility for insurance professionals.',
      tags: ['Platform Design', 'Accessibility', 'Design Systems']
    },
    { 
      id: 'second-opinion', 
      title: 'Second Opinion', 
      path: '/case-studies/second-opinion',
      description: 'A healthcare platform designed to connect patients with medical specialists for second opinions, improving healthcare decision-making.',
      tags: ['Healthcare', 'User Research', 'Product Design']
    },
    { 
      id: 'accessibility', 
      title: 'Accessibility Brand Guidelines', 
      path: '#',
      description: 'Comprehensive accessibility guidelines and standards for creating inclusive digital experiences that work for everyone.',
      tags: ['Accessibility', 'Design Systems', 'Inclusive Design', 'Brand Guidelines']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-40 pb-52">
      <Navigation />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner */}
        <motion.div
          className="w-[26rem] border-2 border-black py-4 mb-12"
          style={{ backgroundColor: '#d3d3ff' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-black tracking-wider">
              WELCOME
            </h1>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Introduction */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-black leading-[44px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hello, my name is Mera!
            </motion.h2>

            <motion.p
              className="text-[24px] font-bold text-black leading-[175%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I design intuitive digital experiences by combining principles of neuropsychology with user-centered design.
            </motion.p>

            <motion.p
              className="text-[18px] leading-[165%] text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I'm a <strong>curious creative</strong> exploring how people think, feel, and play. With a background in neuroscience, interaction design, and AI, I focus on building technology that connects meaningfully with human behavior. Take a look at my work below, and feel free to reach out if you'd like to connect!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center text-black underline hover:text-gray-700 transition-colors duration-300"
              >
                Learn more about me here →
              </Link>
            </motion.div>
          </motion.div>

                    {/* Right Column - Profile Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Shimmery Pink Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Sparkle 1 */}
              <motion.div
                className="absolute top-8 right-16 w-2 h-2 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0
                }}
                style={{
                  boxShadow: '0 0 10px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.5px)'
                }}
              />
              
              {/* Sparkle 2 */}
              <motion.div
                className="absolute top-24 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5
                }}
                style={{
                  boxShadow: '0 0 8px rgba(236, 72, 153, 0.7)',
                  filter: 'blur(0.3px)'
                }}
              />
              
              {/* Sparkle 3 */}
              <motion.div
                className="absolute top-16 right-32 w-1 h-1 bg-pink-200 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
                style={{
                  boxShadow: '0 0 6px rgba(251, 207, 232, 0.5)',
                  filter: 'blur(0.2px)'
                }}
              />
              
              {/* Sparkle 4 */}
              <motion.div
                className="absolute top-32 right-24 w-1.5 h-1.5 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: 1.5
                }}
                style={{
                  boxShadow: '0 0 12px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.4px)'
                }}
              />
              
              {/* Sparkle 5 */}
              <motion.div
                className="absolute top-12 right-40 w-1 h-1 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.9, 1],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: 0.8
                }}
                style={{
                  boxShadow: '0 0 7px rgba(236, 72, 153, 0.6)',
                  filter: 'blur(0.3px)'
                }}
              />
              
              {/* Sparkle 6 */}
              <motion.div
                className="absolute top-4 right-28 w-1.5 h-1.5 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.7, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  delay: 0.3
                }}
                style={{
                  boxShadow: '0 0 9px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.4px)'
                }}
              />
              
              {/* Sparkle 7 */}
              <motion.div
                className="absolute top-20 right-36 w-1 h-1 bg-pink-200 rounded-full"
                animate={{
                  scale: [1, 2.1, 1],
                  opacity: [0.2, 0.9, 0.2],
                }}
                transition={{
                  duration: 2.7,
                  repeat: Infinity,
                  delay: 1.2
                }}
                style={{
                  boxShadow: '0 0 5px rgba(251, 207, 232, 0.5)',
                  filter: 'blur(0.2px)'
                }}
              />
              
              {/* Sparkle 8 */}
              <motion.div
                className="absolute top-36 right-12 w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                  delay: 0.7
                }}
                style={{
                  boxShadow: '0 0 11px rgba(236, 72, 153, 0.7)',
                  filter: 'blur(0.5px)'
                }}
              />
              
              {/* Sparkle 9 */}
              <motion.div
                className="absolute top-28 right-44 w-1 h-1 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.9,
                  repeat: Infinity,
                  delay: 1.8
                }}
                style={{
                  boxShadow: '0 0 8px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.3px)'
                }}
              />
              
              {/* Sparkle 10 */}
              <motion.div
                className="absolute top-6 right-20 w-1.5 h-1.5 bg-pink-200 rounded-full"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: 0.4
                }}
                style={{
                  boxShadow: '0 0 7px rgba(251, 207, 232, 0.5)',
                  filter: 'blur(0.3px)'
                }}
              />
              
              {/* Sparkle 11 */}
              <motion.div
                className="absolute top-14 right-48 w-1 h-1 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.9, 1],
                  opacity: [0.3, 0.9, 0.3],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: 0.9
                }}
                style={{
                  boxShadow: '0 0 6px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.2px)'
                }}
              />
              
              {/* Sparkle 12 */}
              <motion.div
                className="absolute top-40 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.0,
                  repeat: Infinity,
                  delay: 1.3
                }}
                style={{
                  boxShadow: '0 0 10px rgba(236, 72, 153, 0.7)',
                  filter: 'blur(0.4px)'
                }}
              />
              
              {/* Sparkle 13 */}
              <motion.div
                className="absolute top-2 right-36 w-1 h-1 bg-pink-200 rounded-full"
                animate={{
                  scale: [1, 2.2, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3.1,
                  repeat: Infinity,
                  delay: 0.6
                }}
                style={{
                  boxShadow: '0 0 5px rgba(251, 207, 232, 0.5)',
                  filter: 'blur(0.2px)'
                }}
              />
              
              {/* Sparkle 14 */}
              <motion.div
                className="absolute top-30 right-8 w-2 h-2 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.9,
                  repeat: Infinity,
                  delay: 1.6
                }}
                style={{
                  boxShadow: '0 0 12px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.5px)'
                }}
              />
              
              {/* Sparkle 15 */}
              <motion.div
                className="absolute top-18 right-52 w-1.5 h-1.5 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.7, 1],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: 0.2
                }}
                style={{
                  boxShadow: '0 0 8px rgba(236, 72, 153, 0.6)',
                  filter: 'blur(0.3px)'
                }}
              />
              
              {/* Sparkle 16 */}
              <motion.div
                className="absolute top-44 right-32 w-1 h-1 bg-pink-200 rounded-full"
                animate={{
                  scale: [1, 2.0, 1],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1.1
                }}
                style={{
                  boxShadow: '0 0 7px rgba(251, 207, 232, 0.5)',
                  filter: 'blur(0.3px)'
                }}
              />
              
              {/* Sparkle 17 */}
              <motion.div
                className="absolute top-10 right-56 w-1.5 h-1.5 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  delay: 1.7
                }}
                style={{
                  boxShadow: '0 0 9px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.4px)'
                }}
              />
              
              {/* Sparkle 18 */}
              <motion.div
                className="absolute top-34 right-4 w-1 h-1 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.7,
                  repeat: Infinity,
                  delay: 0.8
                }}
                style={{
                  boxShadow: '0 0 6px rgba(236, 72, 153, 0.7)',
                  filter: 'blur(0.2px)'
                }}
              />
              
              {/* Sparkle 19 */}
              <motion.div
                className="absolute top-22 right-60 w-1.5 h-1.5 bg-pink-200 rounded-full"
                animate={{
                  scale: [1, 1.9, 1],
                  opacity: [0.2, 0.9, 0.2],
                }}
                transition={{
                  duration: 3.0,
                  repeat: Infinity,
                  delay: 1.4
                }}
                style={{
                  boxShadow: '0 0 8px rgba(251, 207, 232, 0.5)',
                  filter: 'blur(0.3px)'
                }}
              />
              
              {/* Sparkle 20 */}
              <motion.div
                className="absolute top-48 right-16 w-1 h-1 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 2.1, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: 0.5
                }}
                style={{
                  boxShadow: '0 0 7px rgba(244, 114, 182, 0.6)',
                  filter: 'blur(0.3px)'
                }}
              />
            </div>

            <div className="relative w-[450px] h-[450px]">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border-2 border-gray-300 shadow-lg"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-4 flex items-center justify-center">
                <img 
                  src="/profile1.png" 
                  alt="Mera Bradley" 
                  className="w-full h-full object-cover rounded-full border-2 border-white shadow-md"
                />
              </div>

              {/* Design Card - Upper Right */}
              <motion.div
                className="absolute bg-white border border-black px-4 py-3 rounded-lg shadow-lg"
                style={{ 
                  width: '250px',
                  top: '-26px',
                  right: '-16px'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h3 className="text-lg font-bold text-black mb-1">designer</h3>
                <p className="text-xs text-black">Interaction designer specialising in UI design and design systems.</p>
              </motion.div>

              {/* Amateur Coder Card - Bottom */}
              <motion.div
                className="absolute bg-white border border-black px-4 py-3 rounded-lg shadow-lg"
                style={{ 
                  width: '250px',
                  bottom: '-18px',
                  left: 'calc(50% - 130px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-lg font-bold text-black mb-1">amateur coder</h3>
                <p className="text-xs text-black">Front-end developer learning to write simple, neat, and effective code.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title with Centered Line */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="px-6 text-sm font-bold text-black tracking-wider uppercase">
                SOME OF MY LATEST WORK
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                {project.id === 'accessibility' ? (
                  // Accessibility tile with overlay
                  <div className="relative h-64 bg-white border border-gray-300 rounded-lg overflow-hidden cursor-not-allowed shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🛠️</div>
                        <p className="text-black font-semibold">Coming soon</p>
                        <p className="text-sm text-gray-600 mt-2">Case study in progress!</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular project tile
                  <Link to={project.path} onClick={() => window.scrollTo(0, 0)}>
                    <motion.div
                      className="relative h-64 bg-white border border-gray-300 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        borderColor: 'transparent',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00ffff'
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 20px rgba(0, 255, 255, 0.3)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'transparent'
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                      }}
                    >

                      {/* Default state - title only */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="w-16 h-1 bg-yellow-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Hover overlay - description and tags */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        {/* Center content */}
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center space-y-3">
                            <p className="text-sm text-gray-200 leading-relaxed mb-3">
                              {project.description}
                            </p>
                            <div className="flex flex-nowrap justify-center gap-1">
                              {project.tags.map((tag, index) => (
                                <span 
                                  key={index}
                                  className="px-2 py-1 text-black text-xs font-medium rounded-full"
                                  style={{ backgroundColor: '#d3d3ff' }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomePage 