import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'
import NotFoundPage from './pages/NotFoundPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Banner from './components/Banner.js'


function App () {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404';

  return (
    <div className='App'>
    <Header />
    <main>
    {!isNotFoundPage && <Banner />}
     
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
