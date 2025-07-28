import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'

const Subhero = () => {

  const leftRef = useRef()
  const rightRef = useRef()

  useGSAP(()=>{
    gsap.from(leftRef.current, {
      y: 100,
      opacity: 0,
      // delay: 3,
      ease: "slow(0.7,0.7,false)",
      rotateX:"-30deg",
      rotateY:"-40deg",
      stagger: 0.06,
    }, 'b')
    gsap.from(rightRef.current, {
      y: 100,
      opacity: 0,
      // delay: 3,
      ease: "slow(0.7,0.7,false)",
      rotateX:"-30deg",
      rotateY:"-40deg",
      stagger: 0.06,
    }, 'b')
  })

  return (
    <div className='flex justify-between items-center w-full'>
      <div ref={leftRef} className="left flex items-center gap-2">
        <i className="ri-play-circle-line text-4xl text-zinc-100 opacity-55"></i>
        <div className='text-left font-[a4] leading-none text-[0.67rem] font-light text-zinc-200 uppercase'>
          <h1>Play</h1>
          <h1>The Film</h1>
        </div>
      </div>
      <div ref={rightRef} className="right flex items-center gap-16">
        <div className='right1 text-left font-[a4] leading-none text-[0.57rem] font-light tracking-normal text-white uppercase'>
          <h1>Creator</h1>
          <h1>Curator</h1>
        </div>
        <div className="right2 text-left font-[a4] leading-none text-[0.57rem] font-light tracking-normal text-white uppercase">
          <h1>New York</h1>
          <h1>Los Angeles</h1>
        </div>

      </div>
    </div>
  )
}

export default Subhero