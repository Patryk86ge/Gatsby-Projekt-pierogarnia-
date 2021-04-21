import React from "react"
import * as style from "../assets/scss/elements/companyNext.module.scss"


// img
import menu1 from "../assets/image/menu1.jpg"
import menu3 from "../assets/image/menu3.jpg"

const CompanyNext = () => {
  return (
    <section className={style.company__next}>
      <div className={style.company__nextImg}>
        <a href={menu1}>
          <img src={menu1} alt="menu"/>
        </a>
      </div>
      <div className={style.company__nextImg}>
        <a href={menu3}>
          <img src={menu3} alt="menu"/>
        </a>
      </div>
    </section>
  )
}

export default CompanyNext
