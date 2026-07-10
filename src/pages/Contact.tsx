import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import PageMeta from '../components/PageMeta'
import { ContactSchema, type ContactFormData } from '../lib/validators/contact'
import { generateCaseId, playSound } from '../lib/archive/utils'
import CopyBlockSection from '../components/archive/CopyBlock'
import CaseForm from '../components/archive/CaseForm'
import DrawerSuccess from '../components/archive/DrawerSuccess'
import CorkboardReceipt from '../components/archive/CorkboardReceipt'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'corkboard'>('idle')
  const [caseId, setCaseId] = useState<string>('')
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null)

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      ContactSchema.parse(data)
      setIsSubmitting(true)
      
      // Create mailto link with form data
      const subject = data.subject ? `Case File: ${data.subject}` : 'Case File Submission'
      const body = `Name: ${data.name}
Email: ${data.email}
Type: ${data.type || 'Other'}
${data.subject ? `Subject: ${data.subject}` : ''}

Message:
${data.message}

---
Case ID: ${generateCaseId()}
Submitted: ${new Date().toLocaleString()}`
      
      const mailtoLink = `mailto:jamera.bradley@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open mailto link
      window.location.href = mailtoLink
      
      // Generate case ID and play success sound
      const newCaseId = generateCaseId()
      setCaseId(newCaseId)
      setSubmittedData(data)
      setSubmitStatus('success')
      
      if (soundEnabled) {
        playSound('stamp', 0.3)
        setTimeout(() => playSound('drawer', 0.2), 200)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSendAnother = () => {
    setSubmitStatus('idle')
    setCaseId('')
    setSubmittedData(null)
  }

  const handlePinToCorkboard = () => {
    setSubmitStatus('corkboard')
  }

  return (
    <>
      <style jsx>{`
        html, body {
          background: #ffffff !important;
        }
        .contact-page {
          background: #ffffff !important;
        }
      `}</style>
      <PageMeta
        title="Contact me — Mera Bradley"
        description="Contact me for design, research, and interactive systems collaboration."
        ogImage="/og/contact.png"
      />
      <div className="min-h-screen bg-white text-black contact-page" style={{backgroundColor: '#ffffff'}}>
        <Navigation />
        
        <main className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Hero Stripe */}
          <motion.section
            className="pt-16 pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          </motion.section>

          {/* Two Column Body */}
          <motion.section
            className="py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column - Contact Details (50%) */}
              <div>
                <CopyBlockSection />
              </div>

              {/* Right Column - Contact Form (50%) */}
              <div>
                {submitStatus === 'success' && submittedData ? (
                  <DrawerSuccess
                    caseId={caseId}
                    formData={submittedData}
                    onSendAnother={handleSendAnother}
                    onPinToCorkboard={handlePinToCorkboard}
                  />
                ) : submitStatus === 'corkboard' && submittedData ? (
                  <CorkboardReceipt
                    caseId={caseId}
                    formData={submittedData}
                    onSendAnother={handleSendAnother}
                  />
                ) : (
                  <CaseForm
                    onSubmit={handleFormSubmit}
                    isSubmitting={isSubmitting}
                    soundEnabled={false}
                  />
                )}
              </div>
            </div>
          </motion.section>

        </main>
      </div>
    </>
  )
}

export default Contact