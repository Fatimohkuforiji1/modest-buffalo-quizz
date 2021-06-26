import React from 'react'
import Header from '../landingPageComponent/Header'


const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout
