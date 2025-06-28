import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Layout from './Layout'
import Skills from './components/Skills'
import Projects from './components/Projects'
const App = () => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      {/* Add more components as needed */}
    </Layout>
  )
}

export default App