import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/image/logo.jpg'
import * as style from '../assets/scss/elements/navbar.module.scss'





const Navbar = () => {
    const [show, setShow] = useState(true)
    return (
      <nav className={style.nav}>
        <div className={style.container}>
          <Link to="/" className={style.logo}>
            <img src={Logo} alt="logo" />
          </Link>
          <div className={style.wrapper}>
            <div className={style.order__now}>
              <Link to="/Menu">ORDER NOW</Link>
            </div>
            <div className={show ? style.menu : style.menu__show}>
              <div className={style.menu_list}>
                <Link
                  className={style.list}
                  to="#company"
                  onClick={() => setShow(true)}
                >
                  WHY US
                </Link>
                <Link
                  className={style.list}
                  to="#menu__foot"
                  onClick={() => setShow(true)}
                >
                  MENU
                </Link>
                <Link
                  className={style.list}
                  to = "#section__gallery"
                  onClick={() => setShow(true)}
                >
                  GALLERY
                </Link>
                <Link
                  className={style.list}
                  to="#section__contact"
                  onClick={() => setShow(true)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
            <button
              className={style.hamburger}
              onClick={() => setShow(!show)}
            ></button>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
