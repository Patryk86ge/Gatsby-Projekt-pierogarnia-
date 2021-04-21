import { Link } from "gatsby"
import React from "react"
import * as style from "../assets/scss/elements/footer.module.scss"

// icon
import instagram from "../assets/image/instagram.png"
import facebook from "../assets/image/facebook.png"
const linkInstagram = [
  "https://instagram.com/pierogi.cardiff?igshid=17uxu7femieis",
]
const linkFacebook = [
  "https://www.facebook.com/Pierogi_cardiff-110681524402057",
]

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.menu}>
          <div className={style.footer__menu_list}>
            <Link
            to="/" className={style.menu_list, style.menu__liUp}>
              UP
            </Link>
            <Link
            to = "#company"
            className={style.menu_list}
            >
              WHY US
            </Link>
            <Link
            to = "#menu__foot"
            className={style.menu_list}
            >
              MENU
            </Link>
            <Link
            to="/"
            className={style.menu_list}
            >
              GALLERY
            </Link>
            <Link
            to = "#section__contact"
            className={style.menu_list}
            >
              CONTACT
            </Link>
          </div>
        </div>
        <div className={style.footer__contact}>
          <p>LOCATION :</p>
          <p>Cardiff Market</p>
          <p>St Mary Street</p>
          <p>CF10 1AU</p>
          <p>email/: xxxx@xxx.com</p>
          <p>phone: 000-000-000</p>
        </div>
        <div className={style.footer__ico}>
          <a href={linkInstagram}>
            <img
            src={instagram}
            alt="instagram" />
          </a>
          <a href={linkFacebook}>
            <img
            src={facebook}
            alt="facebook" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
