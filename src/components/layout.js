/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Sidebar from './sidebar'
import './layout.css'
import igIcon from '../images/ig.svg'
import twtrIcon from '../images/twtr.svg'
import ghIcon from '../images/gh.png'
import drbIcon from '../images/drb.png'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: 'Roboto', sans-serif;
`

const PageContent = styled.div`
  flex: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`
const Main = styled.main`
  flex: 1;
  margin-right: 25px;
`

const Footer = styled.footer`
  margin-top: 50px;
`

const Socials = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding-bottom: 10px;

  img {
    width: 50px;
    height: 50px;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`

const PageHero = styled.img`
  width: 100%;
  height: 400px;
  margin: 25px 0;
  border-radius: 25px;
`

const Layout = ({ fullWidth = false, hero = null, children }) => {
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
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDesc={data.site.siteMetadata.description}
      />
      <Container>
        { hero 
            ? <PageHero src={hero.src} alt={hero.alt} />
            : null
        }
        <PageContent className="page-content">
          <Main>{children}</Main>
          {!fullWidth ? (
            <Sidebar>
              <iframe title="Discord Widget" src="https://discordapp.com/widget?id=368060065170849793&theme=light" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
            </Sidebar>
          ) : null}
        </PageContent>

        <Footer>
          <Socials className="social-icons">
            <a href="https://twitter.com/crockerbytes">
              <img src={twtrIcon} alt="twitter icon" />
            </a>
            <a href="https://instagram.com/crockerbytes">
              <img src={igIcon} alt="instagram icon" />
            </a>
            <a href="https://github.com/crock">
              <img src={ghIcon} alt="github icon" />
            </a>
            <a href="https://dribbble.com/croc">
              <img src={drbIcon} alt="dribbble icon" />
            </a>
          </Socials>
          © {new Date().getFullYear()} Alex Crocker, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
