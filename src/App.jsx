import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Company from "./pages/Company"
import Career from "./pages/Career"
import CareerInner from "./pages/CareerInnerPage"
import Blog from "./pages/Blog"
import BlogInnerPage from "./pages/BlogInnerPage"
import TeamTemplatePage from "./pages/TeamTemplatePage"
import ContactUs from "./pages/ContactUs"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/blog" element={<CareerInner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/breaking-the-code" element={<BlogInnerPage />} />
        <Route path="/team/:slug" element={<TeamTemplatePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
