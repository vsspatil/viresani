import './App.css'
import { Routes, Route } from "react-router-dom"
import AppNavbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import RepairShowcase from './pages/RepairShowcase'
import ContactSection from "./pages/ContactSection";
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import ScrollToTop from "./components/ScrollToTop";
import FloatingContactButton from './components/FloatingContactButton'

function App() {
  return (
    <>
    <AppNavbar/>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<RepairShowcase/>} />
      <Route path="/contact" element={<ContactSection/>} />
      <Route path="/cont" element={<Contact/>} />
      <Route path="/page" element={<ServicesPage/>} />
    </Routes>
    < FloatingContactButton/>
    <Footer/>

    </>
  )
}

export default App
