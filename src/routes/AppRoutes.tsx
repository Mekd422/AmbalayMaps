import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Documentation from "../pages/Documentation"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  )
}