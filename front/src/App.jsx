import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
