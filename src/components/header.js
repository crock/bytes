import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import logo from '../images/logo.png'
import arrowIcon from '../images/arrow.png'

const Header = ({ siteTitle, siteDesc }) => {
  const [ dropdownActive, setDropdownActive ] = useState(false);

  return (
    <header
      style={{
        background: `#EBF2F2`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        className="header-wrap"
        style={{
          margin: `0 auto`,
          maxWidth: 1170,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          flexFlow: `row wrap`,
          alignItems: `center`,
          justifyContent: `space-between`,
          position: 'relative',
        }}
      >
        <div
          className="logo"
          style={{
            display: `flex`,
            flexFlow: `row nowrap`,
            alignItems: `center`,
          }}
        >
          <img
            src={logo}
            alt="logo"
            width="75"
            style={{
              display: 'inline-block',
              marginBottom: 0,
              marginRight: `15px`,
            }}
          />
          <div
            className="title-group"
            style={{
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `center`,
              alignItems: `flex-start`,
            }}
          >
            <h1
              style={{
                margin: 0,
                display: 'inline-block',
                fontFamily: `'Kelson Sans', sans-serif`,
                fontSize: '1.5rem',
                fontWeight: `bold`,
              }}
            >
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
            <h2
              style={{
                marginBottom: 0,
                color: `#233434`,
                fontSize: `1.15rem`,
                fontWeight: `300`,
              }}
            >
              {siteDesc}
            </h2>
          </div>
        </div>
  
        <nav className="primary-nav">
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/the-swamp" activeClassName="active">
            The Swamp
          </Link>
          <button className="dropdown-btn" onClick={() => setDropdownActive(!dropdownActive)}>
            Projects
            <span>
              <img src={arrowIcon} alt="arrow icon" style={{transform: dropdownActive ? `scaleY(-1)` : 'unset'}} />
            </span>
          </button>
        </nav>
        { dropdownActive ? <nav className="sub-nav">
            <a href="https://domaincord.com" target="_blank" rel="noopener noreferrer">Domaincord</a>
            <a href="https://starterstorm.com" target="_blank" rel="noopener noreferrer">Starter Storm</a>
        </nav> : null }
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
