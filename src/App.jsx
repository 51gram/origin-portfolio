import Header from './components/Header'
import Hero from './components/Hero'
import DesignPieces from './components/DesignPieces'
import MotionEdit from './components/MotionEdit'
import Infographics from './components/Infographics'
import Footer from './components/Footer'
import LeftNav from './components/LeftNav'
import PageOverlays from './components/PageOverlays'

function App() {
  return (
    <>
      <Header />
      <LeftNav />
      <PageOverlays />
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
