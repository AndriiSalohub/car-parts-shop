import React, { FC } from 'react'
import Boards from '../Components/Boards/Boards'
import Footer from '../Components/Footer/Footer'
import HowWeWork from '../Components/HowWeWork/HowWeWork'
import NavBar from '../Components/NavBar/NavBar'
import Stats from '../Components/Stats/Stats'

const AboutPage: FC = () => {
    return (
        <>
            <NavBar />
            <Boards title="about our shop" boardName="about" />
            <main>
                <HowWeWork />
                <Stats />
            </main>
            <Footer />
        </>
    )
}

export default AboutPage
