import React from 'react'

const Menuright = ({ setmenuOpen, menuOpen }) => {
  const handleClose = () => {
    setmenuOpen(false);
    console.log(menuOpen)
  };

  return (
    <div className='w-1/4 px-40 py-10 '>
      <div onClick={handleClose}>
        <h1 className='uppercase text-right cursor-pointer text-[0.56rem] font-[a4] tracking-tighter'>Close</h1>
      </div>
    </div>
  )
}

export default Menuright