import React from 'react'
import SEO from '../components/seo'
import Layout from '../layouts/index'

import '../styles/styles.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <h2>PAGE NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
