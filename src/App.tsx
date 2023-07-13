import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" />
        <Route path="/astro" />
        <Route path="/math" />
      </Routes>
    </>
  )
}

export default App
