import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({title}) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="description" />
    </Helmet>
  )
}

export default SEO
