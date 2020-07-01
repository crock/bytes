import React from 'react'
import SEO from '../components/seo'
import SocialIcons from '../components/SocialIcons'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Link to="/" style={{textDecoration: 'none', position: 'fixed', top: 0, left: 0, padding: '15px 25px'}}><span role="img" aria-label="finger pointing left" style={{marginRight: 5}}>👈</span> Go Back</Link>
    <h1>PAGE NOT FOUND</h1>
      <div style={{padding: '1rem 0'}}>
          <div>
            <span role="img" aria-label="crocodile" className="giant-emoji">🐊</span>
            <span role="img" aria-label="tear falling from eye" className="giant-emoji">😢</span>
          </div>
          <em>Croc is sad...</em>
        </div>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <SocialIcons />
  </>
)

export default NotFoundPage
