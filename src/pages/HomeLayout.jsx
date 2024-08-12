import React from 'react'
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom'
import NavBar from '../components/NavBar'


const HomeLayout = () => {

  const navigate = useNavigate()
  const isPageLoading = navigate.state === "loading"
  const value = "some value"
  
  return (
    <div>
        <NavBar/>
        <section className="page">
          {isPageLoading ? (
            <div className="loading"></div>
          ):(
            <Outlet context={{value}}/>
          )}
        </section>
        <footer>Footer</footer>
    </div>
  )
}

export default HomeLayout