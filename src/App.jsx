import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </>
  )
}

export default App
