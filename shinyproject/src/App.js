import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'
import NotFoundPage from './pages/NotFoundPage.js'
import PropertyPage from './pages/PropertyPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Banner from './components/Banner.js'
import propertyData from '../Gallery.json'


function App () {
  const location = useLocation();
  const showBanner = !['./404'].includes(location.pathname);

  return (
    <div className='App'>
    <Header />
    <main>
    {showBanner && <Banner />}
     
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/property/:id' element={<PropertyPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </main>
    <Footer />
    </div>

    )
}

export default App
