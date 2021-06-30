/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../assets/scss/index.scss"
import ExternalJS from "./externalJS";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="boxed_wrapper">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        <div className="boxed_wrapper">
          {children}
        </div>
      </main>
      <Footer />
      <ExternalJS />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
