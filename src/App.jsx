import Header from './components/Header'
import ScrollBackground from './components/ScrollBackground'
import Hero from './components/Hero'
import DesignPieces from './components/DesignPieces'
import MotionEdit from './components/MotionEdit'
import Infographics from './components/Infographics'
import Footer from './components/Footer'
import LeftNav from './components/LeftNav'

function App() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <LeftNav />
      <main>
        <Hero />
        <DesignPieces />
        <MotionEdit />
        <Infographics />
      </main>
      <Footer />
    </>
  )
}

export default App
