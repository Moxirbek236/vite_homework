import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Company from "./pages/Company"
import Career from "./pages/Career"
import CareerInner from "./pages/CareerInnerPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/blog" element={<CareerInner />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
