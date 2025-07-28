import React from 'react'
import Hero from './Hero'
import Subhero from './Subhero'

const Centertext = () => {
  return (
    <div className='absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Hero/>
      <Subhero />
    </div>
  )
}

export default Centertext