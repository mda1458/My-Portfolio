import { About, Footer, Header, Work, Skills, Testimonial, Projects } from './container'
import { Hire, Navbar } from './components'

import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Testimonial />
      <Footer />
      <Hire />
    </div>
  )
}

export default App