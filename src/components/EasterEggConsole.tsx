import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface EasterEggConsoleProps {
  onClose: () => void
}

const EasterEggConsole = ({ onClose }: EasterEggConsoleProps) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const loreLines = [
    "INITIALIZING SECRET CONSOLE...",
    "ACCESSING HIDDEN LORE DATABASE...",
    "",
    "=== MERA BRADLEY - HIDDEN LORE ===",
    "",
    "Did you know?",
    "- Mera once debugged a neural network while",
    "  simultaneously debugging her own neural pathways",
    "- The intersection of UX and neuroscience isn't",
    "  just a career choice, it's a lifestyle",
    "- Every design decision is backed by cognitive",
    "  science and a dash of creative chaos",
    "",
    "SECRET ACHIEVEMENT UNLOCKED:",
    "🎯 'Console Explorer' - You found the hidden terminal!",
    "",
    "FUN FACT: This portfolio was built with the same",
    "attention to detail that goes into designing",
    "accessible, neurodivergent-friendly interfaces.",
    "",
    "Press any key to close console...",
    ""
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < loreLines.length) {
        const currentText = loreLines[currentLine]
        if (typedText.length < currentText.length) {
          setTypedText(currentText.slice(0, typedText.length + 1))
        } else {
          setCurrentLine(prev => prev + 1)
          setTypedText('')
        }
      }
    }, 50)

    return () => clearInterval(interval)
  }, [currentLine, typedText, loreLines])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const handleKeyPress = (e: KeyboardEvent) => {
    if (currentLine >= loreLines.length - 2) {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentLine])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-dark-space/95 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-2xl bg-space-gray border border-neon-blue rounded-lg p-6 font-terminal text-terminal-green"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Console Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neon-blue/30">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm">SECRET_CONSOLE.exe</span>
          </div>

          {/* Console Content */}
          <div className="h-96 overflow-y-auto space-y-1">
            {loreLines.slice(0, currentLine).map((line, index) => (
              <div key={index} className="whitespace-pre-wrap">
                {line}
              </div>
            ))}
            {currentLine < loreLines.length && (
              <div className="whitespace-pre-wrap">
                {typedText}
                {showCursor && <span className="animate-blink">|</span>}
              </div>
            )}
          </div>

          {/* Console Footer */}
          <div className="mt-4 pt-2 border-t border-neon-blue/30 text-xs text-gray-400">
            <span>Press any key to exit...</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default EasterEggConsole 