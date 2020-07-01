import React from 'react'
import Layout from '../layouts/'
import SEO from '../components/seo'
import Wrapper from '../components/Wrapper'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
