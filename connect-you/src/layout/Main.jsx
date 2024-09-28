import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Main = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default Main