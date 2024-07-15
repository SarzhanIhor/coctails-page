import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomeLayout = () => {
  return (
    <div>
        <NavBar/>
        <h2>Home Layout</h2>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default HomeLayout