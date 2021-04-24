import React from "react"
import * as style from "../assets/scss/elements/menuFoot.module.scss"
import { Link } from "gatsby"

// img
import pierogi from "../assets/image/menu__pierogi.jpg"
import drink from "../assets/image/menu__napoje.jpg"

const MenuFoot = () => {
  return (
    <section id="menu__foot" className={style.menu__foot}>
      <div className="container">
        <h2 className={style.company__nag}>MENU</h2>
        <div className={style.menu__footNagLine} />
        <p className={style.menu__footText}>Food and Drinks</p>
        <div className={style.menu__footBar}>
          <div className={style.menu__footCards}>
            <div className={style.menu__footImg}>
              <Link to="/Menu">
                <img
                src={pierogi}
                alt="Pierogi" />
              </Link>
            </div>
            <p className={style.menu__footText}>Pierogi</p>
          </div>
          <div className={style.menu__footCards}>
            <div className={style.menu__footImg}>
              <Link to="/Menu" >
                <img
                src={drink}
                alt="drink"
                />
                </Link>
            </div>
            <p className={style.menu__footText}>Drink</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuFoot
