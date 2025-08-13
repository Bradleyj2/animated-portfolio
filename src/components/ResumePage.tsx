import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from './Navigation'

const ResumePage = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const workExperience = [
    {
      company: 'Rightpoint',
      role: 'Lead Interaction Designer',
      period: '02/2022 - Current',
      achievements: [
        'Established foundational frameworks by driving roadmap strategies for omnichannel solutions',
        'Contributed to the design strategy for VIU by HUB (an insurtech brokerage), achieving a 25% revenue increase in the second year post-launch',
        'Created efficient design systems that improved collaboration and reduced hand-off time',
        'Established effective Figma education framework improving operational efficiency'
      ]
    },
    {
      company: 'Springboard',
      role: 'Peer Mentor',
      period: '03/2022 - 08/2023',
      achievements: [
        'Mentored 15+ aspiring designers, providing personalized guidance on portfolio development, project execution, and career growth',
        'Facilitated supportive learning sessions that improved mentees\' proficiency in tackling real-world design issues'
      ]
    },
    {
      company: 'North Agency',
      role: 'Product Designer',
      period: '04/2022 - 03/2023',
      achievements: [
        'Enhanced digital platforms through strategic design improvements, emphasizing accessibility, usability, and consistency',
        'Redesigned client-facing products, improving user interactions by integrating new design patterns, and enhancing functionality'
      ]
    },
    {
      company: 'Second Opinion',
      role: 'Product Designer',
      period: '11/2021 - 12/2021',
      achievements: [
        'Directed creation of a baseline design framework addressing critical usability challenges in caregiver-focused app development',
        'Implemented accessible solutions to streamline vital monitoring and contact handling'
      ]
    }
  ]

  const portfolio = [
    {
      name: 'Portfolio Website',
      url: 'https://meraabradley.cargo.site/',
      description: 'Personal portfolio showcasing design work and case studies'
    },
    {
      name: 'LinkedIn Profile',
      url: 'https://linkedin.com/in/jamerabradley',
      description: 'Professional network and experience overview'
    }
  ]

  const skills = [
    'Design system architecture',
    'Rapid prototyping',
    'User research',
    'Accessibility standards',
    'Component-based design',
    'Figma',
    'Adobe XD',
    'Miro',
    'Designing around complex data',
    'A/B testing',
    'Atlassian Jira',
    'Optimal Workshop',
    'Documentation',
    'Version control',
    'Micro-interactions',
    'Data visualization and table layout'
  ]

  const education = [
    {
      date: '01/2022',
      institution: 'Springboard',
      degree: 'Certificate: UI/UX Design'
    },
    {
      date: '05/2019',
      institution: 'Occidental College',
      degree: 'Bachelor: Cell and Molecular Biology'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-space">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold hologram-text mb-4">
              RESUME
            </h1>
            <p className="text-xl text-neon-blue terminal-text">
              MERA BRADLEY - INTERACTION DESIGNER
            </p>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-hologram-pink text-dark-space font-bold rounded-lg glow-border hover:glow-shadow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 DOWNLOAD PDF RESUME
            </motion.button>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Profile */}
              <motion.div
                className="bg-space-gray/50 rounded-lg p-8 glow-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-neon-blue mb-4">Profile</h2>
                <p className="text-gray-300 leading-relaxed">
                  Product Designer with experience developing scalable, user-focused solutions. Expert in design systems, rapid prototyping, and leading cross-functional teams to simplify user journeys. Proven success in enhancing product growth and user satisfaction in fast-paced environments.
                </p>
              </motion.div>

              {/* Employment History */}
              <motion.div
                className="bg-space-gray/50 rounded-lg p-8 glow-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={() => toggleSection('experience')}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-2xl font-bold text-neon-blue">Employment History</h2>
                  <motion.span
                    animate={{ rotate: expandedSections.includes('experience') ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-neon-blue"
                  >
                    ▼
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedSections.includes('experience') ? 'auto' : 0,
                    opacity: expandedSections.includes('experience') ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 space-y-6">
                    {workExperience.map((job, index) => (
                      <motion.div
                        key={index}
                        className="border-l-4 border-neon-blue pl-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{job.role}</h3>
                          <span className="text-neon-green font-mono text-sm">{job.period}</span>
                        </div>
                        <p className="text-hologram-pink font-semibold mb-2">{job.company}</p>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 flex items-start">
                              <span className="text-neon-blue mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Portfolio */}
              <motion.div
                className="bg-space-gray/50 rounded-lg p-8 glow-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-neon-blue mb-4">Portfolio</h2>
                <div className="space-y-3">
                  {portfolio.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-blue hover:text-hologram-pink transition-colors duration-200 underline"
                      >
                        {item.url}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                className="bg-space-gray/50 rounded-lg p-8 glow-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button
                  onClick={() => toggleSection('skills')}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-2xl font-bold text-neon-blue">Skills</h2>
                  <motion.span
                    animate={{ rotate: expandedSections.includes('skills') ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-neon-blue"
                  >
                    ▼
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedSections.includes('skills') ? 'auto' : 0,
                    opacity: expandedSections.includes('skills') ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {skill}
                        </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Education */}
              <motion.div
                className="bg-space-gray/50 rounded-lg p-8 glow-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-neon-blue mb-4">Education</h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-hologram-pink pl-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                        <span className="text-neon-green font-mono text-sm">{edu.date}</span>
                      </div>
                      <p className="text-gray-300">{edu.degree}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage 