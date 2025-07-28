
import React, { useRef } from 'react'


const Menu = ({ setmenuOpen, menuOpen }) => {
  const menuRef = useRef();

  const handleMenuClick = () => {
    setmenuOpen(true);
    console.log(menuOpen)
  };

  return (
    <div ref={menuRef} onClick={handleMenuClick} className='cursor-pointer uppercase text-[0.56rem] font-[a4] tracking-tighter'>Menu</div>
  )
}

export default Menu