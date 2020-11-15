import React from 'react'
import ILayout from './ILayout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/tailwind.css'

const Layout = ({children}: ILayout) => {

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 flex flex-col">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
