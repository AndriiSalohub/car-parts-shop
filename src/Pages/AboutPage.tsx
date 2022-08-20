import React from 'react'
import AboutBoard from '../Components/AboutBoard/AboutBoard'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const AboutPage = () => {
    return (
        <>
            <header>
                <NavBar />
                <AboutBoard />
            </header>
            <Footer />
        </>
    )
}

export default AboutPage
