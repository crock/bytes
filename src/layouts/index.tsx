import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ILayout from './ILayout'
import Header from '../components/header/'
import Footer from '../components/footer/'

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
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
            <Footer />
        </>
    )
}

export default Layout
