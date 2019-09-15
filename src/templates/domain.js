import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Domain = ({ pageContext }) => {
    const {  title, content, featuredImage } = pageContext

    return (
        <Layout>
            <SEO title={title} />
            <h1>{title}</h1>
            { featuredImage.source_url ? <img style={{width: `150px`, height: `150px`}} src={featuredImage.source_url} alt="domain logo" /> : null }
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export default Domain