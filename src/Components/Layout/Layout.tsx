import React from 'react'
import { Outlet } from 'react-router-dom'
import AnimatedPage from '../../Pages/AnimatedPage'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

const Layout = () => {
    return (
        <>
            <AnimatedPage>
                <NavBar />
                <Outlet />
                <Footer />
            </AnimatedPage>
        </>
    )
}

export default Layout
