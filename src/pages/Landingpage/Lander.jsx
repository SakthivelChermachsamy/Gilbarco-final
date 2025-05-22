
import Navbar from "../../components/Lander/Navbar"
import Footer from "../../components/Lander/Footer"
import Hero from "../../components/Lander/Hero"
import Features from "../../components/Lander/Features"
import Faq from "../../components/Lander/Faq"
import Demo from "../../components/Lander/Demo"
import { isAuthenticated } from "../../services/Auth"
import { Navigate } from "react-router-dom"
function App() {
 
  if(isAuthenticated()){
    return <Navigate to='/Source_dashboard'/>
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Demo />
      <Features />
      <Faq />
      <Footer />
    </div>
  )
}

export default App