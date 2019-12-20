/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from './footer';
import styled from "styled-components";
import Img from "gatsby-image"

const SiteWrapper = styled.div`

  `;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {
    regex: "/demo2/"
  }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    }
  `)

  return (
    <SiteWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
    { /* <Img fluid={data.file.childImageSharp.fluid} /> */ }

      <div>
        <main>{children}</main>
       <Footer />
      </div>
    </SiteWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
