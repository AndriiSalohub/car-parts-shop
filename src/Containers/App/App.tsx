import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Player from '../../Components/Player/Player'
import Welcome from '../../Components/Welcome/Welcome'
import Backdrop from '../../Components/Backdrop/Backdrop'
import NavBar from '../../Components/NavBar/NavBar'
import Advantages from '../../Components/Advantages/Advantages'

const App = () => {
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
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
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
                            <Advantages />
                            <Advantages />
                            <Advantages />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
