import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = () => {
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
    const { title, description } = data.site.siteMetadata

    return (
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}

export default Layout
