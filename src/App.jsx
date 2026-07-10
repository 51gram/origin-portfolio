import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import ProjectModal from './components/ProjectModal'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works onOpen={setActiveProject} />
        <About />
        <Contact />
      </main>
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}

export default App
