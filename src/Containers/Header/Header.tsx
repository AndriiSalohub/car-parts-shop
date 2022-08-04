import React, { FC } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Welcome from '../../Components/Welcome/Welcome'
import Player from '../../Components/Player/Player'
import { useAppSelector } from '../../Hooks/hooks'
import Backdrop from '../../Components/Backdrop/Backdrop'

const Header: FC = () => {
    const popUpOpen: Boolean = useAppSelector((state) => state.popUp.isOpen)

    popUpOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto')

    return (
        <header>
            <NavBar />
            <Welcome />
            {popUpOpen ? <Backdrop children={<Player />} /> : null}
        </header>
    )
}

export default Header
