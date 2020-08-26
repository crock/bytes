import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Layout from '../layouts/index'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Link to="/" style={{textDecoration: 'none', position: 'fixed', top: 0, left: 0, padding: '15px 25px'}}><span role="img" aria-label="finger pointing left" style={{marginRight: 5}}>👈</span> Go Back</Link>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
