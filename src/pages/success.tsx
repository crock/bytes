import React from 'react'
import SEO from '../components/seo'
import Layout from '../layouts/index'

import '../styles/styles.css'

const SuccessPage = () => (
  <Layout>
    <SEO title="Form Submitted!" />
      <h2>Form Submitted!</h2>
      <p>You have successfully submitted the form. I will get back to you as soon as possible.</p>
  </Layout>
)

export default SuccessPage
