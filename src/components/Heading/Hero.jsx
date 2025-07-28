
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'

const Hero = () => {
  const spanref = useRef();
  const mark = useRef();

  useGSAP(() => {
    let clutter="";
    const splittedtext=spanref.current.innerText.split("");
    splittedtext.forEach((letter) => {
      clutter += `<span class="inline-block">${letter}</span>`;
    })
    spanref.current.innerHTML = clutter;
    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      // delay: 2,
      ease: "slow(0.7,0.7,false)",
      rotateX:"-30deg",
      rotateY:"-40deg",
      stagger: 0.06,
    }, 'a')
    gsap.from(mark.current, {
      y: 100,
      opacity: 0,
      // delay: 2,
      ease: "slow(0.7,0.7,false)",
      rotateX:"-30deg",
      rotateY:"-40deg",
      stagger: 0.06,
    }, 'a')
  })


  return (
    <div className=''>
      <h1 ref={spanref} className='whitespace-nowrap text-8xl font-[u8] md:text-[16.4rem] uppercase md:leading-52 mt-24 tracking-tight relative overflow-hidden'>arock</h1>
      <h1 ref={mark} className='text-white text-6xl absolute top-[5rem] -right-9 font-[a4]'>®</h1>
    </div>
  )
}

export default Hero