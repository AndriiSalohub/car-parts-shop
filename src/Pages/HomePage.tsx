import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Welcome from '../Components/Welcome/Welcome'
import Player from '../Components/Player/Player'
import Backdrop from '../Components/Backdrop/Backdrop'
import { useAppSelector } from '../Hooks/hooks'
import Advantages from '../Components/Advantages/Advantages'
import LatestProducts from '../Components/LatestProducts/LatestProducts'
import SalesProducts from '../Components/SalesProducts/SalesProducts'
import AboutUs from '../Components/AboutUs/AboutUs'
import OurContacts from '../Components/OurContacts/OurContacts'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
    const popUpOpen: Boolean = useAppSelector((state) => state.popUp.isOpen)

    popUpOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto')
    return (
        <>
            <header>
                {' '}
                <NavBar />
                <Welcome />
                {popUpOpen ? <Backdrop children={<Player />} /> : null}
            </header>
            <main>
                <Advantages />
                <LatestProducts />
                <SalesProducts />
                <AboutUs children={<OurContacts />} />
                <UsefulInformation />
            </main>
            <Footer />
        </>
    )
}

export default HomePage
