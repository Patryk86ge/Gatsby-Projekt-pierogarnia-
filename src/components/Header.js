import React from 'react'
import Navbar from "./Navbar"

import * as style from "../assets/scss/elements/header.module.scss"



const Header = () => {
    return (
        <header>
            <Navbar/>
            <div className={style.nag}>
                <h1 className={style.nag__TXT}>PIEROGARNIA Cardiff!</h1>
                <p className={style.nag__txt}>Homemade Dumplings</p>
            </div>
        </header>
    )
}

export default Header
