import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';
import '../App.css'
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main