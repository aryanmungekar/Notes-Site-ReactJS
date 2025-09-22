import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Outlet } from "react-router-dom"
import SEO from './SEO'
import ShareToggle from './Components/ShareToggle'
import Breadcrumb from './Components/Breadcrumb'  ;

export default function Layout() {
  return (
    <>
    <SEO />
    <Header/>
    <Breadcrumb />
    <Outlet/>
    <ShareToggle/>
    <Navbar/>
    </>
  )
}
