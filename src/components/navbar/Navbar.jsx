import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = ({ menuOpen, setmenuOpen }) => {
  return (
    <div className='flex items-center justify-between py-2 px-4'>
      <Logo/>
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
    </div>
  )
}

export default Navbar