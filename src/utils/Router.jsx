import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Mainmenu from '../components/menu/Mainmenu'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/index" element={<Mainmenu/>} />
    </Routes>
    
    </>
  )
}

export default Router