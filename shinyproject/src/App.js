import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'
import NotFoundPage from './pages/NotFound.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Banner from './components/Banner.js'
import Properties from './components/Properties.js'

function App () {
  const location = useLocation();

  return (
    <div className='App'>
    <Header />
    <main>
    <Banner />
    {location.pathname === '/' && <Properties />}

      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </main>
    <Footer />
    </div>

    )
}

export default App
