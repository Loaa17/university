import React from 'react'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <>
    

    <div className="container mx-auto">
        <Outlet/>

        
    </div>
    
    
    </>
  )
}
