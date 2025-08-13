import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App min-h-screen bg-dark-space text-white p-8">
      <h1 className="text-4xl font-bold text-neon-blue mb-4">🎉 SUCCESS! React Router Fixed!</h1>
      <p className="text-lg text-neon-green">If you see this, the fix worked!</p>
      <p className="text-sm text-gray-400 mt-4">Background should be dark, text should be white, and title should be neon blue.</p>
      <p className="text-sm text-neon-pink mt-4">🚀 Ready to restore your full portfolio!</p>
      
      <Routes>
        <Route path="/" element={<div className="mt-8 p-4 bg-space-gray rounded border border-neon-blue">
          <h2 className="text-2xl text-neon-green mb-2">✅ Home Route Working!</h2>
          <p>React Router is now functioning correctly with proper basename.</p>
          <p className="text-sm text-neon-blue mt-2">Timestamp: {new Date().toLocaleTimeString()}</p>
        </div>} />
      </Routes>
    </div>
  )
}

export default App 