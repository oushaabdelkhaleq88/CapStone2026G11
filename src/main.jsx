import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Challenge from './Challenge'
import Logbooks from './Logbooks'
import Prototype from './Prototype'
import TestResults from './TestResults'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="/Logbooks" element={<Logbooks />} />
        <Route path="/Prototype" element={<Prototype />} />
        <Route path="/TestResults" element={<TestResults />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)