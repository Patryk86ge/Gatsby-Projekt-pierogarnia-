import React from "react"
import * as style from "../assets/scss/elements/menu.module.scss"
import { Link } from "gatsby"


const Menu = () => {
  return (
    <>
      <section className={style.menu}>
        <Link to="/" className={style.btn__home}>
          HOME
        </Link>
        <div className={style.menu__orderBat}>
          <h2 className={style.menu__orderBatNag}>MENU / ORDER</h2>
          <div className={style.menu__orderBatLine} />
        </div>
      </section>
    </>
  )
}

export default Menu
