/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./app.css"
import MUBCHeader from "./MUBCHeader"
import MUBCNavbar from "./MUBCNavbar"
import MUBCFooter from "./MUBCFooter"

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
    <>
      <MUBCHeader/>
      <MUBCNavbar/>
      <div
      >
        <main>{children}</main>
        <footer>
          <MUBCFooter/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
