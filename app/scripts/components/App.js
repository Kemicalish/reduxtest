import React from 'react'
import Gallery from './gallery'
import { ProjectDetails } from './project.js'

console.log('ProjectDetails', ProjectDetails);

const App = () => (
  <div>
    <ProjectDetails />
    <Gallery />
  </div>
)

export default App