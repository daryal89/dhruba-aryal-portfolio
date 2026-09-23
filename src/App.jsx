import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import DeliveryQualityBridge from './components/sections/DeliveryQualityBridge'
import FeaturedProjects from './components/sections/FeaturedProjects'
import DevOpsCaseStudy from './components/sections/DevOpsCaseStudy'
import QACaseStudy from './components/sections/QACaseStudy'
import TechnicalSkills from './components/sections/TechnicalSkills'
import ProfessionalExperience from './components/sections/ProfessionalExperience'
import About from './components/sections/About'
import EducationCredentials from './components/sections/EducationCredentials'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import './styles/global.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <DeliveryQualityBridge />
        <FeaturedProjects />
        <DevOpsCaseStudy />
        <QACaseStudy />
        <TechnicalSkills />
        <ProfessionalExperience />
        <About />
        <EducationCredentials />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App