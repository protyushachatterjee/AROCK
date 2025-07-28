
import Loading from './components/Load/Loading'
import Home from './components/Home/Home'
import Mainmenu from './components/menu/Mainmenu'
import { useState } from 'react'


const App = () => {

  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <div className='overflow-hidden'>
      <Mainmenu menuOpen={menuOpen} setmenuOpen={setmenuOpen}   />
      <Loading/>
      <Home menuOpen={menuOpen} setmenuOpen={setmenuOpen}  />


    </div>
  )
}

export default App