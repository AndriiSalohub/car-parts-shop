import React, { FC } from 'react'
import Boards from '../Components/Boards/Boards'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const AboutPage: FC = () => {
    return (
        <>
            <header>
                <NavBar />
                <Boards title="about our shop" boardName="about" />
            </header>
            <Footer />
        </>
    )
}

export default AboutPage
