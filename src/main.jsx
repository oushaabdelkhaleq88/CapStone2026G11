import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import Challenge from './Challenge'
import Logbooks from './Logbooks'
import Prototype from './Prototype'
import TestResults from './TestResults'
import './index.css'
import { HashRouter } from 'react-router-dom'
import STR from './STR'
import RecyclingChallenge from './TASKS/TSK1TEAM' 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="/Logbooks" element={<Logbooks />} />
        <Route path="/Prototype" element={<Prototype />} />
        <Route path="/TestResults" element={<TestResults />} />
        <Route path="/STR" element={<STR />} />
        <Route path="/TASKS/TSK1TEAM" element={<RecyclingChallenge />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)