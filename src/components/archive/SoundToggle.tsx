import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const SoundToggle: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(false)

  useEffect(() => {
    // Load sound preference from localStorage
    const savedPreference = localStorage.getItem('archivist-sound-enabled')
    if (savedPreference !== null) {
      setSoundEnabled(JSON.parse(savedPreference))
    }
  }, [])

  const toggleSound = () => {
    const newState = !soundEnabled
    setSoundEnabled(newState)
    localStorage.setItem('archivist-sound-enabled', JSON.stringify(newState))
  }

  return (
    <button
      onClick={toggleSound}
      className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors focus-ring rounded-md"
      aria-pressed={soundEnabled}
      aria-label={`Sound ${soundEnabled ? 'enabled' : 'disabled'}`}
    >
      {soundEnabled ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
      <span>Sound: {soundEnabled ? 'On' : 'Off'}</span>
    </button>
  )
}

export default SoundToggle