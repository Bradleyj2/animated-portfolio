import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from './Navigation'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCountry: 'United States',
    phoneNumber: '+1',
    subject: '',
    message: '',
    designServices: [] as string[]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const services = prev.designServices.includes(service)
        ? prev.designServices.filter(s => s !== service)
        : [...prev.designServices, service]
      return {
        ...prev,
        designServices: services
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phoneNumber} (${formData.phoneCountry})
Subject: ${formData.subject}
Design Services: ${formData.designServices.length > 0 ? formData.designServices.join(', ') : 'None selected'}

Message:
${formData.message}
      `)
      
      const mailtoLink = `mailto:jamera.bradley@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Show confirmation
      setIsSubmitting(false)
      setShowConfirmation(true)
      setTimeout(() => setShowConfirmation(false), 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen archive-bg">
      <Navigation />
      
      {/* Cinematic Hero Section */}
      <motion.section 
        className="relative pt-32 pb-16 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="archive-title text-5xl lg:text-7xl mb-6 neon-glow"
            style={{ color: 'var(--cyberpunk-blue)' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            CONTACT
          </motion.h1>
          
          <motion.p 
            className="mission-header text-xl lg:text-2xl mb-8"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            "Ready to connect? Let's start a conversation."
          </motion.p>
          
          <motion.div 
            className="w-32 h-1 mx-auto mb-16"
            style={{ 
              background: 'linear-gradient(90deg, transparent, var(--cyberpunk-blue), transparent)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
        </div>
      </motion.section>

      {/* Contact Content */}
      <motion.section 
        className="py-16 px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.0 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mission-dossier p-8">
                <h2 className="archive-title text-3xl lg:text-4xl mb-6 neon-glow" style={{ color: 'var(--neon-lavender)' }}>
                  Get in Touch
                </h2>
                <p className="dossier-text text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                  If you have any questions or comments, please contact me via email, or send me a message using the contact form to the right.
                </p>
              </div>

              <div className="mission-dossier p-6">
                <h3 className="mission-header text-lg mb-4" style={{ color: 'var(--neon-lavender)' }}>Email</h3>
                <a 
                  href="mailto:jamera.bradley@gmail.com" 
                  className="dossier-text text-base hover:text-neon-green transition-colors duration-200 font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  jamera.bradley@gmail.com
                </a>
                <div className="mt-4">
                  <div className="dossier-text text-base" style={{ color: 'var(--text-primary)' }}>
                    FILE: LINKEDIN
                  </div>
                  <motion.a 
                    href="https://www.linkedin.com/in/jamerabradley/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-base hover:text-neon-green transition-colors duration-200 mt-2"
                    style={{ color: 'var(--text-primary)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    https://www.linkedin.com/in/jamerabradley/
                  </motion.a>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a 
                  href="mailto:jamera.bradley@gmail.com" 
                  className="w-12 h-12 steampunk-metal rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ color: 'var(--text-primary)' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-lg">✉</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="contact-form rounded-lg p-8">
                <div className="contact-screen rounded-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block mission-header text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Name (required)
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-200"
                          placeholder="First Name"
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-200"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mission-header text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Email (required)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-200"
                        placeholder="example@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mission-header text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Design services I can offer
                      </label>
                      <div className="space-y-2 p-4 rounded-lg border border-white/20 bg-black/20">
                        {[
                          'UX/UI Design',
                          'User Research',
                          'Service Design',
                          'Design Systems',
                          'Interaction Design',
                          'Product Design',
                          'Design Strategy',
                          'Prototyping',
                          'User Testing',
                          'Information Architecture'
                        ].map((service) => (
                          <label
                            key={service}
                            className="flex items-center cursor-pointer group"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <input
                              type="checkbox"
                              checked={formData.designServices.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="w-4 h-4 mr-3 rounded focus:ring-2 focus:ring-neon-green text-neon-green bg-transparent border-white/30"
                              style={{ accentColor: 'var(--neon-green)' }}
                            />
                            <span className="text-sm group-hover:text-neon-green transition-colors">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block mission-header text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Phone
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <select
                          name="phoneCountry"
                          value={formData.phoneCountry}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-200"
                        >
                          <option value="United States">United States</option>
                          <option value="Italy">Italy</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Spain">Spain</option>
                          <option value="Australia">Australia</option>
                        </select>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-200"
                          placeholder="+1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mission-header text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Subject (required)
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-200"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mission-header text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Message (required)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="form-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Message"
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4 neon-button font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <motion.div
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Submit'
                      )}
                    </motion.button>
                  </form>

                  {/* Confirmation Message */}
                  {showConfirmation && (
                    <motion.div
                      className="mt-6 p-4 mission-dossier rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">✅</span>
                        <div>
                          <p className="font-semibold" style={{ color: 'var(--neon-green)' }}>Email client opened!</p>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Your email client should now be open with a pre-filled message to jamera.bradley@gmail.com</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cinematic Footer */}
      <motion.section 
        className="text-center py-16 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="dossier-text text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            "Every connection is a bridge between worlds, waiting to be explored."
          </p>
          
          <motion.a
            href="/"
            className="neon-button px-8 py-3 rounded-lg inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-semibold">RETURN TO ARCHIVE</span>
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage 