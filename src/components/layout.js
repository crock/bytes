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
import igIcon from '../images/ig.svg'
import twtrIcon from '../images/twtr.svg'

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

        <footer
          style={{
            marginTop: `50px`
          }}
        >
          <div className="social-icons"
            style={{
              display: `flex`,
              flexFlow: `row nowrap`,
              justifyContent: `flex-start`,
              alignItems: `center`,
              width: `auto`,
              paddingBottom: `10px`
            }}
          >
            <a href="https://twitter.com/crocdomains"><img style={{width: `50px`, height: `50px`, marginRight: `10px`}} src={twtrIcon} alt="twitter icon"/></a>
            <a href="https://instagram.com/crocdesigns"><img style={{width: `50px`, height: `50px`}} src={igIcon} alt="instagram icon"/></a>
          </div>
          © {new Date().getFullYear()} Alex Crocker, Built with
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
