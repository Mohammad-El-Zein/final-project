import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Menu from "./pages/Menu"
import Home from "./pages/Home"
import Activities from "./pages/Activities"
import Booking from "./pages/Booking"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import { motion } from "framer-motion"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </motion.div>

      <Footer />

    </BrowserRouter>
  )
}

export default App