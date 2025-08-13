import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App min-h-screen bg-dark-space text-white p-8">
      <h1 className="text-4xl font-bold text-neon-blue mb-4">Portfolio Test - React Router Added</h1>
      <p className="text-lg">If you can see this, React Router is working!</p>
      <p className="text-sm text-gray-400 mt-4">Background should be dark, text should be white, and title should be neon blue.</p>
      
      <Routes>
        <Route path="/" element={<div className="mt-8 p-4 bg-space-gray rounded">
          <h2 className="text-2xl text-neon-green mb-2">Home Route Working!</h2>
          <p>This means React Router is functioning correctly.</p>
        </div>} />
      </Routes>
    </div>
  )
}

export default App 