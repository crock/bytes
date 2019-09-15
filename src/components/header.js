import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/logo.png'

const Header = ({ siteTitle, siteDesc }) => (
  <header
    style={{
      background: `#EBF2F2`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-wrap"
      style={{
        margin: `0 auto`,
        maxWidth: 1170,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexFlow: `row wrap`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <div className="logo"
        style={{
          display: `flex`,
          flexFlow: `row nowrap`,
          alignItems: `center`,
        }}
      >
        <img src={logo} alt="logo" width="75" style={{display: 'inline-block', marginBottom: 0, marginRight: `15px`}} />
        <div className="title-group" style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `flex-start`}}>
          <h1 style={{ margin: 0, display: 'inline-block', fontFamily: `'Kelson Sans', sans-serif`, fontSize: '1.5rem', fontWeight: `bold` }}>
            <Link
              to="/"
              style={{
                color: `#0F2020`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <h2 style={{marginBottom: 0, color: `#233434`, fontSize: `1.15rem`, fontWeight: `300` }}>
            {siteDesc}
          </h2>
        </div>
      </div>
      
      <nav className="primary-nav">
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/blog" activeClassName="active">Blog</Link>
        <Link to="/domains" activeClassName="active">Domains</Link>
        {/* eslint-disable-next-line */}
        <a href="https://discord.gg/" target="_blank">Discord</a>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
