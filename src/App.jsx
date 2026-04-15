import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <Navbar />
      <Header />
      <About />
      <Expertise />
      <Services />
    </div>
  )
}

export default App
