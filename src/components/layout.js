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
import Sidebar from "./sidebar"
import RecentPosts from './recent-posts'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteDesc={data.site.siteMetadata.description} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1170,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          fontFamily: `'Roboto', sans-serif`
        }}
      >
        <div className="page-content"
          style={{
            flex: `auto`,
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `space-between`,
            alignItems: `flex-start`,
          }}
        >
          <main style={{flex: 1, marginRight: `25px`}}>{children}</main>
          <Sidebar>
            <RecentPosts />
            <a href='https://my.escrow.com/partner.asp?pid=0'><img src='https://secureapi.escrow.com/api/ecart/Content/Images/Affiliate%20Banners/Escow_Banner_300x250.jpg' width='300' height='250' alt='Escrow.com: Buy or Sell Online Without the Fear of Fraud' border='0' /></a>
          </Sidebar>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
