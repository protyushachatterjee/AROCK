import React, { useRef } from 'react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';

const Mainmenu = ({ setmenuOpen, menuOpen }) => {

const menuref=useRef()
  useGSAP(()=>{
    if(menuOpen===true){
      gsap.to(menuref.current, {
        top: 0,
        // opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }else{
      gsap.to(menuref.current, {
        top: "100%",
        duration: 0.5,
        ease: 'power2.out',
      })
    }
  }, [menuOpen])

  return (
    <div ref={menuref} className='w-full top-full flex h-full bg-zinc-950 fixed z-50 text-white'>
        <Menuleft />
        <Menuright menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
    </div>
  )
}

export default Mainmenu