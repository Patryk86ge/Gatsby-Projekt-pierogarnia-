import React from "react"
import * as style from "../assets/scss/elements/contact.module.scss"

// image
import location from "../assets/image/location.png"
import phoneCall from "../assets/image/phone-call.png"
import message from "../assets/image/message.png"
import clock from "../assets/image/clock.png"

const Contact = () => {
  return (
    <section
      id="section__contact"
      className={style.section__contact}
    >
      <div className='container'>
      <h2 className={style.contact__nag}>Contact</h2>
      <div className={style.contact__footNagLine}></div>
      <p className={style.contact__footText}>Write or Call</p>
      <div className={style.contact__bar}>
        <div className={style.contact__ico}>
          <a
            className={style.contact__place}
            href="https://goo.gl/maps/TF5cfa1E4QFpineS9"
          >
            <img 
            src={location} 
            alt="location" />
          </a>
          <p className={style.place}>Cardiff Market</p>
          <p className={style.place}>St Mary Street</p>
          <p className={style.place}>CF10 1AU</p>
        </div>
        <div className={style.contact__ico}>
          <a 
          className={style.contact__coll} 
          href="tel:+44000000000">
            <img 
            src={phoneCall} 
            alt="phoneCall" />
          </a>
          <p className={style.phone}>phone: 000-000-000</p>
        </div>
        <div className={style.contact__ico}>
          <a
            className={style.contact__email}
            href="mailto:kokot.patryk@gmail.com"
          >
            <img 
            src={message} 
            alt="email" />
          </a>
          <p className={style.mail}>email/: xxxx@xxx.com</p>
        </div>
        <div className={style.contact__ico}>
          <a href="#">
            <img 
            src={clock} 
            alt="clock" />
          </a>
          <p className={style.timeOpen}>pn - pt: 8 - 22</p>
          <p className={style.timeOpen}>sob: 8 - 18</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact
