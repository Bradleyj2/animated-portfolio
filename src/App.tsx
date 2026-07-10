import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import WorkPage from './components/WorkPage'
import AboutPage from './components/AboutPage'
import ResumePage from './components/ResumePage'
import ContactPage from './pages/Contact'
import HemispheresPage from './components/case-studies/HemispheresPage'
import ServiceBlueprintPage from './components/case-studies/ServiceBlueprintPage'
import OmnichannelStrategyPage from './components/case-studies/OmnichannelStrategyPage'
import ViuHubPage from './components/case-studies/ViuHubPage'
import SecondOpinionPage from './components/case-studies/SecondOpinionPage'
import DraftAiMarketingPage from './components/case-studies/DraftAiMarketingPage'
import ExperienceDesignSlide from './components/ExperienceDesignSlide'
import { isDraftContentVisible } from './lib/preview'
import EasterEggConsole from './components/EasterEggConsole'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
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
    <div className="App flex flex-col min-h-screen">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies/hemispheres" element={<HemispheresPage />} />
          <Route path="/case-studies/service-blueprint" element={<ServiceBlueprintPage />} />
          <Route path="/case-studies/omnichannel-strategy" element={<OmnichannelStrategyPage />} />
          <Route path="/case-studies/viu-hub" element={<ViuHubPage />} />
          <Route path="/case-studies/second-opinion" element={<SecondOpinionPage />} />
          {isDraftContentVisible() && (
            <Route path="/case-studies/ai-marketing-control-center" element={<DraftAiMarketingPage />} />
          )}
          {import.meta.env.DEV && (
            <Route path="/experience-design-slide" element={<ExperienceDesignSlide />} />
          )}
          <Route path="*" element={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
              <div className="text-center max-w-md mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
                <p className="text-gray-300 mb-6">
                  The page you're looking for doesn't exist.
                </p>
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Go Home
                </Link>
              </div>
            </div>
          } />
        </Routes>
      </div>

      {!isHomePage && <Footer />}
      {showEasterEgg && <EasterEggConsole onClose={() => setShowEasterEgg(false)} />}
    </div>
  )
}

export default App 