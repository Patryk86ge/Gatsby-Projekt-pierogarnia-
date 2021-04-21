import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import * as style from "../assets/scss/elements/menu.module.scss"


const Menu = () => {
  return (
    <section className = {style.menu} >
      <Navbar />
      <div className={style.menu__orderBat}>
        <h2 className={style.menu__orderBatNag}>MENU</h2>
        <div className={style.menu__orderBatLine} />
      </div>
      <Footer />
    </section>
  )
}

export default Menu
