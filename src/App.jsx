import { About, Footer, Header, Work, Skills, Testimonial } from './container'
import { Hire, Navbar } from './components'

import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
      <Hire />
    </div>
  )
}

export default App