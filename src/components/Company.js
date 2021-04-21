import React from "react"
import * as style from "../assets/scss/elements/company.module.scss"

const Company = () => {
  return (
    <section
     id="company"
     className={style.company}>
      <div className="container">
        <h2 className={style.company__nag}>WHY US</h2>
        <div className={style.company__nagLine}></div>
        <p className={style.company__text}>Pierogarnia Cardiff</p>
        <p className={style.company__longText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aperiam, atque commodi deleniti dicta dolores doloribus id illo
          incidunt laborum laudantium numquam odio quasi reiciendis rem
          repellendus soluta veritatis voluptate! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ad consequatur debitis excepturi id nam
          optio quia rem repudiandae saepe, velit veniam voluptas! Aliquid ex
          expedita, magni maxime perspiciatis porro rem?
        </p>
      </div>
    </section>
  )
}

export default Company
