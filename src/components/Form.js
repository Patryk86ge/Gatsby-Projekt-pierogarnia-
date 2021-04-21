import React from "react"
import * as style from "../assets/scss/elements/form.module.scss"

const Form = () => {
  return (
    <section className={style.form}>
      <div className={style.container}>
        <div id={style.form__box} className={style.form__box}>
          <div className={style.form__place}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2484.855554304536!2d-3.1808759342310777!3d51.479165629630536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCardiff%20Market%20St%20Mary%20Street%20CF10%201AU!5e0!3m2!1spl!2spl!4v1615360272532!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: 0, width:'100%'}}
              loading="lazy"
              title='01'
            />
          </div>
          <form
          action= "mailto:kokot.patryk@gmail.com"
          method='post'
          className={style.form}
          >
            <label for="name">N A M E</label>
            <input
              type="text"
              id={style.name}
              name="NAME"
            ></input>
            <label for="email">E M A I L</label>
            <input
              type="email"
              id={style.email}
              name="EMAIL"
            >
            </input>
            <label for="text">T E X T</label>
            <textarea
            rows="6"
            name="form_textarea"
            id={style.form_textarea}
            />
            <button
            type="submit"
            className={style.form__boxBtn}
            >
              S E N D
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
