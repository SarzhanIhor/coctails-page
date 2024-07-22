import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomeLayout = () => {
  return (
    <div>
        <NavBar/>
        <section className="page">
          <Outlet/>
        </section>
        <footer>Footer</footer>
    </div>
  )
}

export default HomeLayout