import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ResumePage from './components/ResumePage'
import ContactPage from './components/ContactPage'
import TracePage from './components/case-studies/TracePage'
import HemispheresPage from './components/case-studies/HemispheresPage'
import ServiceBlueprintPage from './components/case-studies/ServiceBlueprintPage'
import ViuHubPage from './components/case-studies/ViuHubPage'
import SecondOpinionPage from './components/case-studies/SecondOpinionPage'
import OmnichannelStrategyPage from './components/case-studies/OmnichannelStrategyPage'
import EasterEggConsole from './components/EasterEggConsole'
import { useState, useEffect } from 'react'

function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === '`' || event.key === '~') {
        setShowEasterEgg(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="App min-h-screen bg-dark-space text-white p-8">
      <h1 className="text-4xl font-bold text-neon-blue mb-4">Portfolio Test</h1>
      <p className="text-lg">If you can see this, React is working!</p>
      <div className="mt-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies/trace" element={<TracePage />} />
          <Route path="/case-studies/hemispheres" element={<HemispheresPage />} />
          <Route path="/case-studies/service-blueprint" element={<ServiceBlueprintPage />} />
          <Route path="/case-studies/omnichannel-strategy" element={<OmnichannelStrategyPage />} />
          <Route path="/case-studies/viu-hub" element={<ViuHubPage />} />
          <Route path="/case-studies/second-opinion" element={<SecondOpinionPage />} />
        </Routes>
      </div>
      
      {showEasterEgg && <EasterEggConsole onClose={() => setShowEasterEgg(false)} />}
    </div>
  )
}

export default App 