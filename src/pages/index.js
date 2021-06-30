import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/home/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
  </Layout>
)

export default IndexPage
