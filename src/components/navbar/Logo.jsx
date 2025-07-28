import React from 'react'
import logo from '../../assets/logo.png' // Adjust the path as necessary

const Logo = () => {
  return (
    <div className='w-15 h-15'>
      <img className='w-full h-full object-contain' src={logo} alt="" />
    </div>
  )
}

export default Logo