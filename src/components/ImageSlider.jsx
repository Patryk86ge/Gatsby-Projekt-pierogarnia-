import React from "react"
import { Carousel } from "react-bootstrap"
import "../assets/scss/elements/imageSlider.scss"
import "bootstrap/dist/css/bootstrap.min.css"
// import Img from "gatsby-image"
// import { graphql } from "gatsby"



import img1 from '../assets/image/gallery/image1.jpg'
import img2 from "../assets/image/gallery/image2.jpg"
import img3 from "../assets/image/gallery/image3.jpg"
import img4 from "../assets/image/gallery/image1.jpg"
import img5 from "../assets/image/gallery/image2.jpg"
import img6 from "../assets/image/gallery/image3.jpg"
import img7 from "../assets/image/gallery/image1.jpg"
import img8 from "../assets/image/gallery/image2.jpg"
import img9 from "../assets/image/gallery/image3.jpg"
import img10 from "../assets/image/gallery/image1.jpg"
import img11 from "../assets/image/gallery/image2.jpg"
import img12 from "../assets/image/gallery/image3.jpg"

const ImageSlider = () => {
  return (
    <section id="section__gallery" className="section__gallery">
      <div className="container">
        <h2 className="gallery__nag">Gallery</h2>
        <div className="gallery__footNagLine"></div>
        <p className="gallery__footText">Dumpling & Food</p>
        <Carousel>
          <Carousel.Item>
            <img src={img1} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img4} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img5} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img6} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img7} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img8} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img9} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img10} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img11} alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img12} alt="img" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default ImageSlider

// export const query = graphql `
//   query {
//     img1ql: file(relativePath: { eq: "image1.jpg" }) {
//       childImgSharp {
//         fluid(macWith: 1200) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
//  <Img fluid={props.data.img1ql.childImgSharp.fluid} alt="img" />