import React from "react"
import Header from "./Header"
import Company from "./Company"
import CompanyNext from "./CompanyNext"
import MenuFoot from "./MenuFoot"
import ImageSlider from "./ImageSlider"
import Contact from "./Contact"
import Form from "./Form"
import Footer from "./Footer"
import Menu from './Menu'

import "../assets/scss/index.scss"

const Layout = () => {
  return (
    <>
      <Header />
      <Company />
      <CompanyNext />
      <MenuFoot />
      <ImageSlider />
      <Contact />
      <Form />
      <Footer />
    </>
  )
}

export default Layout
