import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Documentation from "../pages/Documentation"
import Contact from "../pages/Contact"
import BlogS from "../pages/Blog"


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogS />} />
      </Routes>
    </BrowserRouter>
  )
}