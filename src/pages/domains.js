import React from 'react'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import DomainCard from '../components/domain-card'

const DomainsPage = () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(sort: {fields: frontmatter___slug, order: ASC}, filter: {frontmatter: {type: {eq: "domain"}}}) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        categories
                        title
                    }
                    html
                }
            }
        }
    }
  `)
  const domains = data.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <Layout fullWidth>
            <SEO 
                title="Croc's Domains" 
                description="A variety of high quality domains for sale at reasonable prices" />
            { domains.map(domain => <DomainCard domain={domain} /> ) }
        </Layout>
    )
}

export default DomainsPage