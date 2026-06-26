import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
