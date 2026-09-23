import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import DeliveryQualityBridge from './components/sections/DeliveryQualityBridge'
import './styles/global.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <DeliveryQualityBridge />

        <section className="section placeholder-section" id="projects">
          <div className="container">
            <p className="eyebrow">Coming Next</p>
            <h2>Featured Projects</h2>
          </div>
        </section>
      </main>
    </>
  )
}

export default App