import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import DeliveryQualityBridge from './components/sections/DeliveryQualityBridge'
import FeaturedProjects from './components/sections/FeaturedProjects'
import './styles/global.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <DeliveryQualityBridge />
        <FeaturedProjects />
      </main>
    </>
  )
}

export default App