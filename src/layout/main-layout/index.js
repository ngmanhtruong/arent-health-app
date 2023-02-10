import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header'

const MainLayout = (props) => {
  return (
    <div className="main-page">
      <div className="main-page__header-wrapper">
        <Header />
      </div>
      <div className="main-page__content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout