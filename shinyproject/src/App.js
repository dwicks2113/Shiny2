//import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home.js'
import AboutPage from './pages/About.js'
import NotFoundPage from './pages/NotFound.js'
import Header from './components/Header.js'


function App () {
  return (
    <div className='App'>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </div>
   )
}

export default App
