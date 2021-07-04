import React from 'react'
import Header from '../landingPageComponent/Header'
import Footer from '../landingPageComponent/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Footer />
            {children}
        </>
    )
}

export default Layout
