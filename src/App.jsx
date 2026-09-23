import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import DeliveryQualityBridge from './components/sections/DeliveryQualityBridge'
import FeaturedProjects from './components/sections/FeaturedProjects'
import DevOpsCaseStudy from './components/sections/DevOpsCaseStudy'
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
      </main>
    </>
  )
}

export default App