import React from 'react'
import ILayout from './ILayout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}: ILayout) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
