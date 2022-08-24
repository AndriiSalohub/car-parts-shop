import React, { FC } from 'react'
import ReactPlayer from 'react-player'
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
import AnimatedPage from './AnimatedPage'

const HomePage: FC = () => {
    const popUpOpen: Boolean = useAppSelector((state) => state.popup.isOpen)

    popUpOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto')
    return (
        <AnimatedPage>
            <NavBar /> <Welcome />
            {popUpOpen ? (
                <Backdrop
                    children={
                        <Player
                            player={
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=z0jjTU-H43M&ab_channel=MuffinGroup"
                                    width="800px"
                                    height="500px"
                                />
                            }
                            videoType="popup"
                        />
                    }
                    videoType="popup"
                />
            ) : null}
            <main>
                <Advantages />
                <LatestProducts />
                <SalesProducts />
                <AboutUs children={<OurContacts />} />
                <UsefulInformation />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default HomePage
