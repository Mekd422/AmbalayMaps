import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Documentation from "../pages/Documentation"
import Contact from "../pages/Contact"
import BlogS from "../pages/Blog"
import Shop from "../pages/Shop"
import Price from "../pages/Pricing"
import ScrollToHash from "../utils/ScrollToHash"
import Register from "../pages/RegisterPage"


export default function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogS />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/price"element={<Price/>} />
        <Route path="/register"element={<Register/>} />

      </Routes>
    </BrowserRouter>
  )
}