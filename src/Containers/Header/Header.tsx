import React, { useState } from 'react'
import Backdrop from '../../Components/Backdrop/Backdrop'

import NavBar from '../../Components/NavBar/NavBar'
import Player from '../../Components/Player/Player'
import Welcome from '../../Components/Welcome/Welcome'

import './Header.scss'

const Header = () => {
    const [popUpOpen, setPopUpOpen] = useState(false)

    const OpenPopUp = () => {
        setPopUpOpen(true)
    }

    const ClosePopUp = () => {
        setPopUpOpen(false)
    }

    popUpOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto')

    return (
        <>
            <header className="header">
                <NavBar />
                <Welcome OpenPopUp={OpenPopUp} />
                {popUpOpen ? (
                    <Backdrop
                        children={
                            <Player
                                popUpOpen={popUpOpen}
                                ClosePopUp={ClosePopUp}
                            />
                        }
                        popUpOpen={popUpOpen}
                        ClosePopUp={ClosePopUp}
                    />
                ) : null}
            </header>
        </>
    )
}

export default Header
