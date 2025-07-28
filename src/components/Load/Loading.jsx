import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'

const Loading = () => {

    const load = useRef();
    const tl= gsap.timeline();
    useGSAP(()=>{
        tl.to(load.current, {
            width: '100%',
            duration: 1.7,
            delay: 0.7,
            ease: 'power2.out',
        }).to(load.current, {
            opacity: 0,
        })
    })


  return (
    <div className='w-full h-1 fixed bg-transparent z-50'>
        <div ref={load} className='w-0 h-full bg-white rounded-full'></div>
    </div>
  )
}

export default Loading