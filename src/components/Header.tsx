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
        <header className="bg-teal-600">
            <div className="h-full container mx-auto px-4 flex flex-col justify-center items-start">
                <h1 className="text-3xl font-bold text-teal-300 m-0">{title}</h1>
                <div className="text-xl font-light text-teal-300">{description}</div>
            </div>
        </header>
    )
}

export default Layout
