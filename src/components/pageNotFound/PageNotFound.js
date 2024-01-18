import React from 'react'
import PageNotFoundImg from '../../Assets/page_not_found.jpg'
import './pnf.css'

const PageNotFound = () => {
  return (
    <div className='container pnf-con'>
      <img src={PageNotFoundImg} alt="Page not found" className='pnf-img'/>
      <p className='pnf-content tu'>Page not found</p>
    </div>
  )
}

export default PageNotFound
