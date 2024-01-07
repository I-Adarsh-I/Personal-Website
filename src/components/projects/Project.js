import React, {useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import './project.css'

function Project() {
  useEffect(() => {
    document.title = 'Projects | Adarsh Singh'
  },[])

  return (
    <>
      <Navbar />
    <div className='project-main-container'>
      <h1>Projects</h1>
      <h1>section</h1>
    </div>
    </>
  )
}

export default Project
