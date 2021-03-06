import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../styles/extra.css'

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
        <header className="bg-teal-600">
            <h1 className="text-3xl font-bold text-teal-300 m-0">{title}</h1>
            <div className="text-xl font-light text-teal-300">{description}</div>
        </header>
    )
}

export default Layout
