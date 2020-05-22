import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ILayout from './ILayout'
import Header from '../components/header/'
import Footer from '../components/footer/'

import '../styles/tailwind.css'
import '../styles/extra.css'

const Layout = ({children}: ILayout) => {
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

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} tagline={data.site.siteMetadata.description} />
            {children}
            <Footer />
        </>
    )
}

export default Layout
